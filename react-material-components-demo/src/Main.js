/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import {
    Route,
    Switch as SwitchRoute
    // etc.
} from 'react-router-dom'
import {
    ToolbarMain,
} from './lib'
import {
    Home,
    Button,
    Card,
    Checkbox,
    Dialog,
    Elevation,
    Typography,
    List,
    IconToggle,
Switch,
    Radio
} from './pages'

export default class Main extends Component {
    render() {
        return (
                <ToolbarMain
                    fixed
                >
                    <SwitchRoute>
                        <Route exact path='/' component={Home}/>
                        <Route path='/button' component={Button}/>
                        <Route path='/card' component={Card}/>
                        <Route path='/checkbox' component={Checkbox}/>
                        <Route path='/dialog' component={Dialog}/>
                        <Route path='/elevation' component={Elevation}/>
                        <Route path='/typography' component={Typography}/>
                        <Route path='/list' component={List}/>
                        <Route path='/icon_toggle' component={IconToggle}/>
                        <Route path='/switch' component={Switch}/>
                        <Route path='/radio' component={Radio}/>
                    </SwitchRoute>
                </ToolbarMain>
        )
    }
}