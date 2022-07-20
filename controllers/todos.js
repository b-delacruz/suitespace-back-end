import { Profile } from '../models/profile.js'
import { Todo } from '../models/todo.js'

function index(req, res) {
  Todo.find({})
  .populate('owner')
  .then(todos => {
    res.json(todos)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Todo.create(req.body)
  .then(todo => {
    Todo.findById(todo._id)
    .populate('owner')
    .then(populatedTodo => {
      res.json(populatedTodo)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteEvent(req, res) {
  Todo.findById(req.params.id)
  .then(todo => {
    if (todo.owner._id.equals(req.user.profile)){
      Todo.findByIdAndDelete(todo._id)
      .then(deletedPuppy => {
        res.json(deletedPuppy)
      })
    } else { // This is not doing anything. Check auth template to display on front end.
      res.status(401).json({err: 'Not authorized'})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  Todo.findById(req.params.id)
  .then(todo => {
    if (todo.owner._id.equals(req.user.profile)){
      Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .populate('owner')
      .then(updatedTodo => {
        res.json(updatedTodo)
      })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  index,
  create,
  deleteEvent as delete,
  update
}