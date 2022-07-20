import mongoose from 'mongoose'

const Schema = mongoose.Schema

const locationSchema = new Schema({
  area: String,
  coords: [Number]
}, {
  timestamps: true
})

const profileSchema = new Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: String,
  location: {locationSchema},
  news: {type: mongoose.Schema.Types.ObjectId, ref:"NewsPref"},
  weather: {type: mongoose.Schema.Types.ObjectId, ref:"WeatherPref"},
  todoList: [{type: mongoose.Schema.Types.ObjectId, ref:"Todo"}],
  calendarList: [{type: mongoose.Schema.Types.ObjectId, ref:"CalendarEvent"}],
  favoriteLinks: {type: mongoose.Schema.Types.ObjectId, ref:"Favorite"},
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
