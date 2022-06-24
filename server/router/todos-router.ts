import { getAllTodo } from './../controller/todo';
import express from 'express'

const router = express.Router()

router.get('/', getAllTodo)

export { router as todoRouter }
