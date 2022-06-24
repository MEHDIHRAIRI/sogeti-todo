import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import {AiFillAlert} from 'react-icons/ai'
import Modal from '@mui/material/Modal';
import axios from "axios"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [open, setOpen] = useState(false);
    const [todoData, setTodoData] = useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const url = "http://localhost:5000/todo"
    const [edit, setEdit] =useState ({ 
        id: null,
        value: ''
    });
    const showModal = async(id) => {
        const todo = await axios.get(url+'/'+id)
        if(todo.data[0]) {handleOpen();
            setTodoData(todo.data[0])
        }

    }
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit ({
            id: null, 
            value: ''
        })
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' :
        'todo-row'} key={index} >
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Title: {todoData.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4 }}>
            status: {todoData.status}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Description: {todoData.description}
          </Typography>
        </Box>
      </Modal>

        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.title}
        </div>

        <div className="icons">
            <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
            />
            <TiEdit
            onClick={() => setEdit({id: todo.id, value: todo.title})}
            className='edit-icon'
            />
            <AiFillAlert
            onClick={() => showModal(todo.id)}
            className='edit-icon'
            />
        </div>
        </div>
    ))

}  

export default Todo;