import { Profile } from '../models/profile.js'
import { CalendarEvent } from '../models/calendarEvent.js'

function index(req, res) {
  CalendarEvent.find({})
  .then(event => {
    res.json(event)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  CalendarEvent.create(req.body)
  .then(event => {
    res.json(event)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteEvent(req, res) {

}

function update(req, res) {
  CalendarEvent.findById(req.params.id)
  .then(event => {
    if (event.owner._id.equals(req.user.profile)){
      CalendarEvent.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .populate('owner')
      .then(updatedEvent => {
        res.json(updatedEvent)
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({err: err.errmsg})
      })
    }
  })
}

export {
  index,
  create,
  deleteEvent as delete,
  update
}