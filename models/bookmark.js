import mongoose from 'mongoose'

const Schema = mongoose.Schema

const newBookmark = new Schema({
  title: String,
  urlToImage: String,
  description: {type: String, default: "None Provided"},
  url: [String],
  content: {type: String, default: 'Not Listed, See Source Link'},
}, {
  timestamps: true
})

const Bookmark = mongoose.model('Bookmark', newBookmark)

export { newBookmark }