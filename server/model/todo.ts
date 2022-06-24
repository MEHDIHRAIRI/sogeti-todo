import { todoStatus } from './../constants/todo';

export default interface Todo {
  id: number,
  title: string,
  status: todoStatus,
  description?: string,
}