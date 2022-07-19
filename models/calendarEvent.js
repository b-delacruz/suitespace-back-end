import mongoose from 'mongoose'

const Schema = mongoose.Schema

const calendarEventSchema = new Schema({
  category: String,
  description: String,
  location: String,
  date: String,
  time: String, 
}, {
  timestamps: true
})

const CalendarEvent = mongoose.model('CalendarEvent', calendarEventSchema)

export { CalendarEvent }