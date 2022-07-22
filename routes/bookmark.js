import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as bookmarkController from '../controllers/bookmark.js'

const router = Router()


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, bookmarkController.create)

export { router }


