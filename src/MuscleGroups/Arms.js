import React from 'react';
import Navbar from '../Navbar';
import armMuscles from './armMuscles';
import Button from '@material-ui/core/Button';
import './muscleGroups.css';
import { BackButton } from '../BackButton';

function Arms() {
    return (
        <div className='muscle-group-main'>
            <Navbar />
            <div className='muscle-group-content-container'>
                <h2>ARM Workout</h2>
                <ul className='muscle-list'>
                    {armMuscles.map(muscle => (
                        <l1><Button variant='contained' component={() => muscle.workout} color='link'>{muscle.muscle}</Button></l1> 
                    ))}
                </ul>  
                <div className='back'>
                    <BackButton />
                </div>
            </div>
        </div>
    )
}

export default Arms;