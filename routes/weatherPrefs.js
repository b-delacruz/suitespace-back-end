import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as weatherController from '../controllers/weatherPrefs.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', weatherController.index)

/*---------- Protected Routes ----------*/

export { router }
