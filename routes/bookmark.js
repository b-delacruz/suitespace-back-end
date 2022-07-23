import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as bookmarkCtrl from '../controllers/bookmarks.js'


const router = Router()

/*---------- Public Routes ----------*/
router.use(decodeUserFromToken)
router.post('/',checkAuth, bookmarkCtrl.create)


export { 
  router 
}
