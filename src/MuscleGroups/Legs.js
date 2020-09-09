import React from 'react';
import Navbar from '../Navbar';
import legMuscles from './legMuscles';
import Button from '@material-ui/core/Button';
import './muscleGroups.css';
import { BackButton } from '../BackButton';

function Legs() {
    return (
        <div className='muscle-group-main'>
            <Navbar />
            <div className='muscle-group-content-container'>
                <h2>LEGS Workout</h2>
                <ul className='muscle-list'>
                    {legMuscles.map(muscle => (
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

export default Legs;