import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function getLocation(req,res) {

}

function createLocation(req,res){

}

function updateLocation(req,res){

}

export { index, getLocation, createLocation, updateLocation }
