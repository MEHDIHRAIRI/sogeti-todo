import { MOCKED_TODOS } from './../mocks/todo';
export default class todoService{
    async getAllTodos(){
        console.log(MOCKED_TODOS)
    }
}