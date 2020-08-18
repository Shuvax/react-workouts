import React from 'react';
import { IconButton, ListItem, Typography } from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox'
import CloseIcon from '@material-ui/icons/Close';

function CustomItem({ todo, toggleComplete, removeTodo  }) {

    function handleCheckBoxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <ListItem style={{ display: 'flex' }}>
            <CheckBox 
                checked={todo.completed}
                onClick={handleCheckBoxClick} 
                color='primary'
            />
            <Typography 
                variant='body1'
                style={{ 
                    textDecoration: todo.completed ? 'Typographyne-through' : null
                }}>
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default CustomItem;