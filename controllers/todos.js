import { Profile } from '../models/profile.js'
import { TodoItem } from '../models/todoItem.js'

function index(req, res) {

}

function create(req, res) {
  TodoItem.create(req.body)
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