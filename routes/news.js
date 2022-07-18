import { Router } from 'express'
import * as newsCtrl from '../controllers/news.js'


const router = Router()

/*---------- Public Routes ----------*/
router.get('/:search', newsCtrl.getNews)


export { 
  router 
}
