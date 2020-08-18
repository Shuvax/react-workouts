import React from 'react';
import './WorkoutApp.css';
import { Link } from 'react-router-dom';




function WorkoutApp() {
    return (
        <div className='main'>
            <div className='top'>
                <h1>Workout</h1>
                <h4>Shuva Banik</h4>
            </div>
            <hr/>
            <div className='body'>
                <div>
                    <Link to='/menu'>
                        <button className='mainButton'>Get Started!</button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default WorkoutApp;