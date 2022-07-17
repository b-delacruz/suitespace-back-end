import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import { router as calendarsRouter } from './routes/calendars.js'
import { router as newsPrefsRouter } from './routes/newsPrefs.js'
import { router as favoritesRouter } from './routes/favorites.js'
import { router as weatherPrefsRouter } from './routes/weatherPrefs.js'
import { router as todosRouter } from './routes/todos.js'

import './config/database.js'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/api/calendars', calendarsRouter)
app.use('/api/newsprefs', newsPrefsRouter)
app.use('/api/favorites', favoritesRouter)
app.use('/api/weather', weatherPrefsRouter)
app.use('/api/todos', todosRouter)


app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
