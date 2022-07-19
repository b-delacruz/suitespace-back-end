import { WeatherPref } from '../models/weatherPref.js'
import { Profile } from '../models/profile.js'
import axios from 'axios'

const BASE_URL = `http://api.weatherapi.com/v1`

function getWeather(req, res) {
  axios.get(`${BASE_URL}/forecast.json?key=${process.env.WEATHER_APIKEY}&q=${req.params.location}&days=3&aqi=no&alerts=no`)
    .then(apiResponse => {
      res.json(apiResponse.data)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function getWeatherPref(req, res) {
  Profile.findById(req.user.profile)
    .populate('weather')
    .then(pref => {
      res.json(pref)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function create(req, res) {
  WeatherPref.create(req.body)
  .then(pref => {
    Profile.findById(req.user.profile)
    .populate('weather')
    .then(profile=>{
      profile.weather.push(pref)
      profile.save()
      res.json(pref)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ err: err.errmsg })
  })
}

function update(req, res) {
  WeatherPref.findByIdAndUpdate(req.params.id,req.body, {new:true})
  .then(pref=>{
    res.json(pref)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ err: err.errmsg })
  })
}

export {
  getWeather,
  getWeatherPref,
  create,
  update
}