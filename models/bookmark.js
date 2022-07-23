import mongoose from 'mongoose'

const bookmarkSchema = new mongoose.Schema({
  title: String,
  img: String,
  description: String,
  link: String,

},{
  timestamps: true,
})

const Bookmark = mongoose.model('Bookmark', bookmarkSchema)

export { Bookmark }