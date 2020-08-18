import React from 'react';
import { Divider } from '@material-ui/core';


export default [
    {
        muscle: 'Upper Back',
        routine:<>
                    <h3>Pull-ups:</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <ul>
                            <li>1 set of 10 reps</li>
                            <li>1 set of 9 reps</li>
                            <li>1 set of 8 reps</li>
                        </ul>
                    </div>
                    <h3>Lateral Pulldown:</h3>
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
                    </div>   
                    <h3>Dumbell Row:</h3>
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
        muscle: 'Lower Back',
        routine:<>
                    <h3>Deadlift:</h3>
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
                    <h3>Rackpulls:</h3>
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
                    <h3>Hyper-Extensions:</h3>
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