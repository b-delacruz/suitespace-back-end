import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as todoController from '../controllers/todos.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', todoController.index) 
router.post('/', todoController.create)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.delete('/:id', checkAuth, todoController.delete)
router.put('/:id/todo-item', checkAuth, todoController.update)


export { router }
