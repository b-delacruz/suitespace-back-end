import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FavoriteSchema = new Schema({
  name: String,
  link: String,
},{
  timestamps: true
})

const Favorite = mongoose.model('Favorite', FavoriteSchema)

export { Favorite }