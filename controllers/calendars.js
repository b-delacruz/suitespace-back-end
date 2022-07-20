import { Profile } from '../models/profile.js'
import { CalendarEvent } from '../models/calendarEvent.js'

function index(req, res) {
  Profile.findById(req.user.profile)
  .populate('calendarList')
  .then(profile => {
    res.json(profile.calendarList)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  CalendarEvent.create(req.body)
  .then(event => {
    Profile.findById(req.user.profile)
    .then(profile => {
      profile.calendarList.push(event)
      profile.save()
      .then(() => {
        res.json(event)
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteEvent(req, res) {
  CalendarEvent.findByIdAndDelete(req.params.id)
  .then(deletedEvent => {
    res.json(deletedEvent)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  }) 
}

function update(req, res) {
  CalendarEvent.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedEvent => {
    console.log(updatedEvent)
    res.json(updatedEvent)
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