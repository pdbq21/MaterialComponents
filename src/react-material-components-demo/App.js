/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'


import './styles.css'
import Header from './Header'
import Drawer from './Drawer'
import Main from './Main'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
      darkMode: false
    };

    this.handleShowMenu = this.handleShowMenu.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleDarkMode = this.handleDarkMode.bind(this);
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

  handleDarkMode({target}) {
    this.setState({
      darkMode: target.checked
    })
  }

  render() {
    const {isOpenMenu, darkMode} = this.state;
    return (
      <div className={(darkMode && 'mdc-theme--dark') || null}>
        <Header
          handleShowMenu={this.handleShowMenu}
          handleDarkMode={this.handleDarkMode}
        />
        <Drawer
          isOpenMenu={isOpenMenu}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
        <Main/>
      </div>
    )
  }
}