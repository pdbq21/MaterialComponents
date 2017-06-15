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
import {Home, Button, Card, Checkbox, Dialog} from './pages'

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
                    </SwitchRoute>
                </ToolbarMain>
        )
    }
}