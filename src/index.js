import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch as SwitchRoute
} from 'react-router-dom'
/*import ComponentsList from './demo/containers/ComponentsList';
//import App from './demo/containers/ComponentsView';
import configureStore from './demo/store/configureStore';

const store = configureStore();*/
import './react-material-components-demo/src/styles.css'
import Header from './react-material-components-demo/src/Header'
import Drawer from './react-material-components-demo/src/Drawer'
import Main from './react-material-components-demo/src/Main'
import {
    ToolbarNormal,
    ToolbarFixed,
    TemporaryToolbarSpacer,
    TemporaryHeader,
    PersistentHeader,
    PersistentToolbarSpacer,
    PermanentBelowToolbar,
    PermanentAboveToolbar
} from './react-material-components-demo/src/pages'

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
            <Route path='/drawer/permanent_below_toolbar' component={PermanentBelowToolbar}/>
            <Route path='/drawer/permanent_above_toolbar' component={PermanentAboveToolbar}/>
            <Route component={App}/>
        </SwitchRoute>
    </Router>,
    document.getElementById('root')
);/*ReactDOM.render(
    <Provider store={store}>
        <ComponentsList/>
    </Provider>,
    document.getElementById('root')
);*/