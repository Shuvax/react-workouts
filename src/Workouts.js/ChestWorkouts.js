import React from 'react';
import { Divider } from '@material-ui/core';


export default [
    {
        muscle: 'Upper Chest',
        routine:<>
                    <h3>Bench Press:</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <ul>
                            <li>1 set of 8 reps</li>
                            <li>1 set of 8 reps</li>
                            <li>1 set of 8 reps</li>
                        </ul>
                    </div>
                    <h3>Incline Bench Press:</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <ul>
                            <li>1 set of 10 reps</li>
                            <li>1 set of 8 reps</li>
                            <li>1 set of 6 reps</li>
                        </ul>
                    </div>   
                    <h3>Dumbbell Fly's:</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <ul>
                            <li>1 set of 12 reps</li>
                            <li>1 set of 10 reps</li>
                            <li>1 set of 8 reps</li>
                        </ul>
                    <Divider variant='fullwidth' />
                    </div>  
                </> 
    },
    {
        muscle: 'Lower Chest',
        routine:<>
                    <h3>Decline Bench Press:</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <ul>
                            <li>1 set of 10 reps</li>
                            <li>1 set of 8 reps</li>
                            <li>1 set of 6 reps</li>
                        </ul>
                    </div>
                    <h3>Dips:</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <ul>
                            <li>1 set of 8 reps</li>
                            <li>1 set of 7 reps</li>
                            <li>1 set of 6 reps</li>
                        </ul>
                    </div>
                    <h3>Cable Crossover:</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <ul>
                            <li>1 set of 12 reps</li>
                            <li>1 set of 10 reps</li>
                            <li>1 set of 8 reps</li>
                        </ul>
                    <Divider variant='fullwidth' />
                    </div>  
                </> 
    }
]