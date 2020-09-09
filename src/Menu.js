import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Menu.css';
import muscleGroups from './MuscleGroups/muscleGroups';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import CustomForm from './Custom/CustomForm';
import CustomList from './Custom/CustomList';
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos'

function Menu() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id) )
    }

    return (
        <div className='Menu-main'>
            <Navbar />
            <div className='Menu-both'>
                <div className='muscle-list-container'>
                    <ul className='muscle-list'>
                        {muscleGroups.map(muscle => (
                            <l1><Button variant='contained' component={Link} to={`/${muscle}`} color='link'>{muscle}</Button></l1>
                        ))}
                    </ul>    
                </div>
                <div className='custom-container'>
                    <Typography id='my-plan-heading'  variant='h2'>My Plan</Typography>
                    <CustomForm id='custom-form' addTodo={addTodo} />
                    <CustomList 
                        id='custom-list'
                        todos={todos} 
                        toggleComplete={toggleComplete} 
                        removeTodo={removeTodo}
                    />
                </div>
            </div>  
        </div>
    )
}

export default Menu;