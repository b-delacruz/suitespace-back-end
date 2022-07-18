import { Profile } from '../models/profile.js'
import { Todo } from '../models/todo.js'

function index(req, res) {
  Todo.find({})
  .then(todos => {
    res.json(todos)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  Todo.create(req.body)
  .then(todo => {
    res.json(todo)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteEvent(req, res) {

}

function update(req, res) {

}

export {
  index,
  create,
  deleteEvent as delete,
  update
}