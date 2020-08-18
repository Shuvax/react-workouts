import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Button, TextField } from '@material-ui/core';
import '../Menu.css'


function CustomForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            setTodo({ ...todo, task: '' });
        }
    }

    return (
        <form className='Custom-form' onSubmit={handleSubmit}>
            <TextField 
                label='Task'
                name='task'
                type='text'
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type='submit'>Add</Button>
        </form>
    )
}

export default CustomForm;