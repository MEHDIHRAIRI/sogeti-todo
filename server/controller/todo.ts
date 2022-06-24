import { Request, Response } from 'express'
import todoService from '../service/todo'

export const getAllTodo = async (req: Request, res: Response) => {
    const todos = await new todoService().getAllTodos()
    res.status(200).json({todos})
}
export const getTodo = async (req: Request, res: Response) => {
    const { id } = req.params
    const todo = await new todoService().getTodoById(parseInt(id))
    if(!todo) res.status(404).json({error: 'todo not found'})
    res.status(200).json(todo)
}
export const addTodo = async (req: Request, res: Response) => {
    const { title, status, description } = req.body
    const addedTod = await new todoService().addTodo({title, status, description})
    if(!addedTod) res.status(404).json({error: ''})
    res.status(200).json(addedTod)
}