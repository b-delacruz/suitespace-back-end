import mongoose from 'mongoose'

const Schema = mongoose.Schema

const todoItemSchema = new Schema({
  dueDate: Date,
  title: String,
  description: String,
}, {
  timestamps: true
})

const Todo = mongoose.model('Todo', todoItemSchema)

export { Todo }