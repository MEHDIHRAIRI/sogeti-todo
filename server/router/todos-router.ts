import { getAllTodo, getTodo } from './../controller/todo';
import express from 'express'

const router = express.Router()

router.get('/', getAllTodo)
router.get('/:id', getTodo)

export { router as todoRouter }
