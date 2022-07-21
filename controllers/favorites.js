import { Profile } from '../models/profile.js'
import { Favorite } from '../models/favorite.js'

function index(req,res) {
  Profile.findById(req.user.profile)
  .populate('favoriteLinks')
  .then(profile => {
    res.json(profile.favoriteLinks)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function addFavorite(req,res) {
  Favorite.create(req.body)
  .then(favorite => {
    Profile.findById(req.user.profile)
    .then(profile => {
      profile.favoriteLinks.push(favorite)
      profile.save()
      .then(() => {
        res.json(favorite)
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function removeFavorite(req,res) {
  Favorite.findByIdAndDelete(req.params.id)
  .then(deletedFavorite => {
    res.json(deletedFavorite)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  }) 
}

export {
  index,
  addFavorite,
  removeFavorite
}