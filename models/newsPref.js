import mongoose from 'mongoose'

const Schema = mongoose.Schema

const newsPref = new Schema({
  category: [ String ],
  country: [ String ],
  favorites: [ String ]
}, {
  timestamps: true
})

const NewsPref = mongoose.model('NewsPref', newsPref)

export { NewsPref }