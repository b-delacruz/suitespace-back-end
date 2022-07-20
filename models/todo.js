import mongoose from 'mongoose'

const Schema = mongoose.Schema

const todoItemSchema = new Schema({
  dueDate: Date,
  title: String,
  description: String,
  color: String,
  isComplete: Boolean,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Todo = mongoose.model('Todo', todoItemSchema)

export { Todo }