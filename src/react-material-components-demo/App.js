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