import { MOCKED_TODOS } from './../mocks/todo';
export default class todoService{
    async getAllTodos(){
        return MOCKED_TODOS
    }
    async getTodoById(id: number){
        const todo = MOCKED_TODOS.filter(todo => todo.id === id)
        if(!todo) return 0
        return todo
    }
}