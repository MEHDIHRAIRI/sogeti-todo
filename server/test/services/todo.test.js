var chai = require('chai');
import chaiAsPromised from "chai-as-promised"
import { todoService } from "../../service/todo"

var expect = chai.expect;
chai.use(chaiAsPromised);
describe('Fetch All Todos', () => {
    const expected = [
    {
        id: 1,
        title: 'Mettre en place l\'environement',
        status: Doing,
        description: 'Installer les dépendances pour le mini projet'
    }, {
        id: 2,
        title: 'Coder la US 1 pour le test des Todos',
        status: Doing,
        description: 'As a user I would like to list my current todos'
    }, {
        id: 3,
        title: 'Coder la US 2 pour le test des Todos',
        status: Done,
    }, {
        id: 4,
        title: 'Coder la US 3 pour le test des Todos',
        status: Done,
    }, {
        id: 5,
        title: 'Coder la US 4 pour le test des Todos',
        status: New,
    }, {
        id: 6,
        title: 'Un todo à faire',
        status: New,
    }, {
        id: 7,
        title: 'Un autre todo',
        status: Todo,
    }
];
    it('return data from MOCKED_TODOS', () => {
        return expect(new todoService().getAllTodos())
     .to.eventually.become(expected);
    });
});