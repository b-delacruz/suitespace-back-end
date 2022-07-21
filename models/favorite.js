import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FavoriteSchema = new Schema({
  link: String,
  image: String
},{
  timestamps: true
})

const Favorite = mongoose.model('Favorite', FavoriteSchema)

export { Favorite }