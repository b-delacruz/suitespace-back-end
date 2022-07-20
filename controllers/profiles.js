import { Profile } from '../models/profile.js'

function getLocation(req, res) {
  Profile.findById(req.user.profile)
    .then(profile => {
      res.json(profile.location)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function updateLocation(req, res) {
  
  Profile.findByIdAndUpdate(req.user.profile, { location: req.body.location }, {new: true})
    .then(profile => {
      res.json(profile)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

export { getLocation, updateLocation }
