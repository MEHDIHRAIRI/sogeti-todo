import { todoStatus } from '../constants/todo';
import BadRequestError from '../errors/bar-request-error';
import { MOCKED_TODOS } from './../mocks/todo';
export default class todoService{
    async getAllTodos(){
        if (!MOCKED_TODOS.length) throw new BadRequestError({})
        return MOCKED_TODOS
    }
    async getTodoById(id: number){
        const todo = MOCKED_TODOS.filter(todo => todo.id === id)
        if (!todo) throw  new BadRequestError({})
        return todo
    }
    async addTodo({ title, description }: { title: string, status: string, description: string }){ 
        const lastId = MOCKED_TODOS[MOCKED_TODOS.length - 1]
        console.log(lastId.id)
        const addedTodo = MOCKED_TODOS.push({
            id: lastId.id + 1,
            title,
            status: todoStatus.NEW,
            description
        })
        if (!addedTodo) throw new BadRequestError({})
        return addedTodo
    }
}