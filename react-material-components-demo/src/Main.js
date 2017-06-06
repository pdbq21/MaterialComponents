/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import {
    Route,
    Switch
    // etc.
} from 'react-router-dom'

import {Home, Button} from './pages'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/button' component={Button}/>
                </Switch>
            </div>
        )
    }
}