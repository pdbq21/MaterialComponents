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
import {
    ToolbarNormal,
    ToolbarFixed,
    TemporaryToolbarSpacer,
    TemporaryHeader,
    PersistentHeader,
    PersistentToolbarSpacer
} from './pages'

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
        )
    }
}


ReactDOM.render(
    <Router>
        <SwitchRoute>
            <Route path='/toolbar_normal' component={ToolbarNormal}/>
            <Route path='/toolbar_fixed' component={ToolbarFixed}/>
            <Route path='/drawer/temporary_toolbar_spacer' component={TemporaryToolbarSpacer}/>
            <Route path='/drawer/temporary_header' component={TemporaryHeader}/>
            <Route path='/drawer/persistent_header' component={PersistentHeader}/>
            <Route path='/drawer/persistent_toolbar_spacer' component={PersistentToolbarSpacer}/>
            <Route component={App}/>
        </SwitchRoute>
    </Router>, document.getElementById('root')
);