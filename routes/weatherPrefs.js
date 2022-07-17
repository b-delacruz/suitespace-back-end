import { Router } from 'express'
import * as weatherController from '../controllers/weatherPrefs.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:location/current', weatherController.getCurrent)
router.get('/:location/hourly', weatherController.getHourly)
router.get('/:location/daily', weatherController.getDaily)

/*---------- Protected Routes ----------*/

export { router }
