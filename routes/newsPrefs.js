import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as newsController from '../controllers/newsPrefs.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', newsController.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, newsController.bookmark)
router.delete('/:id', checkAuth, newsController.deleteBookmark)


export { router }
