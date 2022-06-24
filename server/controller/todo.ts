import { Request, Response } from 'express'
import todoService from '../service/todo'

export const getAllTodo = async (req: Request, res: Response) => {
    const todos = await new todoService().getAllTodos()
    console.log(todos)
}