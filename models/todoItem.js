import mongoose from 'mongoose'

const Schema = mongoose.Schema

const todoItemSchema = new Schema({
  title: String,
  description: String,
  isComplete: Boolean,
  color: String,
  dueDate: Date
}, {
  timestamps: true
})

const Todo = mongoose.model('Todo', todoItemSchema)

export { Todo }