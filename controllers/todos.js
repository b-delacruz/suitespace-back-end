import { Profile } from '../models/profile.js'
import { Todo } from '../models/todo.js'

function index(req, res) {
  Profile.findById(req.user.profile)
    .populate('todoList')
    .then(profile => {
      res.json(profile.todoList)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Todo.create(req.body)
    .then(todo => {
      Todo.findById(todo._id)
        .populate('owner')
        .then(populatedTodo => {
          Profile.findById(req.user.profile)
            .then(profile => {
              profile.todoList.push(populatedTodo)
              profile.save()
              res.json(populatedTodo)
            })
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function deleteTodo(req, res) {
  Todo.findByIdAndDelete(req.params.id)
    .then(deletedTodo => {
      res.json(deletedTodo)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function update(req, res) {
  Todo.findById(req.params.id)
    .then(todo => {
      if (todo.owner._id.equals(req.user.profile)) {
        Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
          .populate('owner')
          .then(updatedTodo => {
            res.json(updatedTodo)
          })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

export {
  index,
  create,
  deleteTodo as delete,
  update
}