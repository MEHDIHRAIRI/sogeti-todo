import { todoStatus } from './../constants/todo';
import Todo from '../model/todo'

export const MOCKED_TODOS: Todo[] = [
    {
        id: 1,
        title: 'Mettre en place l\'environement',
        status: todoStatus.DOING,
        description: 'Installer les dépendances pour le mini projet'
    }, {
        id: 2,
        title: 'Coder la US 1 pour le test des Todos',
        status: todoStatus.DOING,
        description: 'As a user I would like to list my current todos'
    }, {
        id: 3,
        title: 'Coder la US 2 pour le test des Todos',
        status: todoStatus.DONE,
    }, {
        id: 4,
        title: 'Coder la US 3 pour le test des Todos',
        status: todoStatus.DONE,
    }, {
        id: 5,
        title: 'Coder la US 4 pour le test des Todos',
        status: todoStatus.NEW,
    }, {
        id: 6,
        title: 'Un todo à faire',
        status: todoStatus.NEW,
    }, {
        id: 7,
        title: 'Un autre todo',
        status: todoStatus.TODO,
    }
];