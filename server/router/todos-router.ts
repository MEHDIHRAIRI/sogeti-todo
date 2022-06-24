import { getAllTodo, getTodo, addTodo } from './../controller/todo';
import express from 'express'

const router = express.Router()

router.get('/', getAllTodo)
router.get('/:id', getTodo)
router.post('/', addTodo)

export { router as todoRouter }
