import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as calendarController from '../controllers/calendars.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, calendarController.index)
router.post('/', checkAuth, calendarController.create)
router.delete('/:id', checkAuth, calendarController.delete)
router.put('/:id', checkAuth, calendarController.update)


export { router }
