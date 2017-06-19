/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch as SwitchRoute
} from 'react-router-dom'

import './styles.css'
import Header from './Header'
import Drawer from './Drawer'
import Main from './Main'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false
        };

        this.handleShowMenu = this.handleShowMenu.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShowMenu() {
        this.setState({
            isOpenMenu: true
        })
    }

    setOpen(isOpenMenu) {
        this.setState({isOpenMenu});
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }

    render() {
        const {isOpenMenu} = this.state;
        return (
        <Router>
            <div>
                <Header
                    handleShowMenu={this.handleShowMenu}
                />
                <Drawer
                    isOpenMenu={isOpenMenu}
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                />
                <Main />
            </div>
        </Router>
            )
    }
}


ReactDOM.render(
    <App/>, document.getElementById('root')
);