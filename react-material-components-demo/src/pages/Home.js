/**
 * Created by ruslan on 05.06.17.
 */
import React, { Component } from 'react'

import Header from '../Header'
import Main from '../Main'
import Drawer from '../Drawer'

export default class Home extends Component {
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
            <div >
home
            </div>
        )
    }
}
