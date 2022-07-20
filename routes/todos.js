import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as todoController from '../controllers/todos.js'

const router = Router()

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, todoController.index)
router.post('/', checkAuth, todoController.create)
router.delete('/:id', checkAuth, todoController.delete)
router.put('/:id/todo-item', checkAuth, todoController.update)


export { router }
