import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
    .then(profiles => res.json(profiles))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

function getLocation(req, res) {
  Profile.findById(req.user.profile)
    .populate('location')
    .then(profile => {
      res.json(profile.location)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function createLocation(req, res) {
  Profile.create(req.body)
    .then(profile => {
      res.json(profile)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })

}

function updateLocation(req, res) {
  Profile.findByIdAndUpdate({ _id: req.user.profile }, { $set: { location: req.body } })
    .then(profile => {
      res.json(profile)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

export { index, getLocation, createLocation, updateLocation }
