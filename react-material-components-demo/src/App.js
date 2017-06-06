/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
    // etc.
} from 'react-router-dom'


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
                <Main/>

            </div>
        </Router>
            )
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = (e) => {
    console.log(e);
    return (<div>
        <h3>{e.match.params.topicId}</h3>
    </div>)
}

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

ReactDOM.render(
    <App/>, document.getElementById('root')
);

/*<div className='container'>
 <h1>App</h1>
 <ul>
 <li><Link to='/button'>button</Link></li>
 </ul>
 {/!* добавили вывод потомков *!/}
 {this.props.children}
 </div>*/