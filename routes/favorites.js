import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as favoriteController from '../controllers/favorites.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, favoriteController.index)
router.post('/', checkAuth, favoriteController.addFavorite)
router.delete('/:id', checkAuth, favoriteController.removeFavorite)


export { router }
