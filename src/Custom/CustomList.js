import React from 'react';
import Todo from './CustomItem';
import { List } from '@material-ui/core';
import '../Menu.css';


function CustomList({ todos, toggleComplete, removeTodo }) {
    return (
        <List>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete} 
                    removeTodo={removeTodo}
                />   
            ))}
        </List>
    );
}

export default CustomList;