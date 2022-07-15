import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as calendarController from '../controllers/calendars.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', calendarController.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, calendarController.create)
router.delete('/:id', checkAuth, calendarController.delete)
router.put('/:id/add-calender-event', checkAuth, calendarController.update)


export { router }
