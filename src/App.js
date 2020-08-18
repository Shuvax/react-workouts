import React, { Component } from 'react';
import WorkoutApp from './WorkoutApp';
import { Route, Switch } from 'react-router-dom';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import Arms from './MuscleGroups/Arms';
import Back from './MuscleGroups/Back';
import Legs from './MuscleGroups/Legs';
import Chest from './MuscleGroups/Chest';
import Abs from './MuscleGroups/Abs';
import Menu from './Menu';
import Page from './Page';


function App() {
    return (
        <Route render={({location}) => (  
            <TransitionGroup>
                <CSSTransition key={location.key} classNames='page' timeout={500}>
                    <Switch location={location}>
                        <Route 
                            exact 
                            path='/' 
                            render={routeProps => (
                                <Page>
                                    <WorkoutApp {...routeProps}/>
                                </Page>
                            )}
                        />
                        <Route 
                            exact 
                            path='/menu' 
                            render={routeProps => (
                                <Page>
                                    <Menu {...routeProps}/>
                                </Page>
                            )} 
                        />  
                        <Route 
                            exact 
                            path='/arms' 
                            render={routeProps => (
                                <Page>
                                    <Arms {...routeProps}/>
                                </Page>
                            )}
                        />  
                        <Route 
                            exact 
                            path='/back' 
                            render={routeProps => (
                                <Page>
                                    <Back {...routeProps}/>
                                </Page>
                            )}
                        />  
                        <Route 
                            exact 
                            path='/chest' 
                            render={routeProps => (
                                <Page>
                                    <Chest {...routeProps}/>
                                </Page>
                            )}
                        />  
                        <Route 
                            exact 
                            path='/legs' 
                            render={routeProps => (
                                <Page>
                                    <Legs {...routeProps}/>
                                </Page>
                            )} 
                        /> 
                        <Route 
                            exact 
                            path='/abs' 
                            render={routeProps => (
                                <Page>
                                    <Abs {...routeProps}/>
                                </Page>
                            )} 
                        />  
                        <Route 
                            component={() => <Menu />} 
                        />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}/>
    )
}

export default App;