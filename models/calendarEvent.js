import mongoose from 'mongoose'

const Schema = mongoose.Schema

const calendarEventSchema = new Schema({
  title: String,
  description: String,
  isComplete: Boolean,
  location: String,
  color: String,
  startDate: Date,
  endDate: Date,
}, {
  timestamps: true
})

const CalendarEvent = mongoose.model('CalendarEvent', calendarEventSchema)

export { CalendarEvent }