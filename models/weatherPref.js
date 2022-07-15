import mongoose from 'mongoose'

const Schema = mongoose.Schema

const weatherPrefSchema = new Schema({
  display: {
    type: String,
    enum: ['today','hourly','weekly','monthly'],
    default: 'today'
  },
  chart: Boolean,
}, {
  timestamps: true,
})

const WeatherPref = mongoose.model('WeatherPref', weatherPrefSchema)

export { WeatherPref }