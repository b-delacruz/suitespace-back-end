import { Router } from 'express'
import * as weatherController from '../controllers/weatherPrefs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/:location', weatherController.getWeather)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/user/preference',checkAuth, weatherController.getWeatherPref)
router.put('/:id', checkAuth, weatherController.update)

export { router }
