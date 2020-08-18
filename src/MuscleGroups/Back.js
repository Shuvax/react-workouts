import React from 'react';
import Navbar from '../Navbar';
import backMuscles from './backMuscles';
import Button from '@material-ui/core/Button';
import '../Menu.css';
import { BackButton } from '../BackButton';

function Back() {
    return (
        <div className='Menu-main'>
            <Navbar />
            <h2>BACK Workout</h2>
            <ul className='muscle-list'>
                {backMuscles.map(muscle => (
                    <l1><Button variant='contained' component={() => muscle.workout} color='link'>{muscle.muscle}</Button></l1> 
                ))}
            </ul>  
            <div className='back'>
                <BackButton />
            </div>
        </div>
    )
}

export default Back;