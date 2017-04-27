/**
 * Created by ruslan on 25.04.17.
 */
import React from 'react';

import PersistentDrawerTest from './test/PersistentDrawer'

export default class PersistentDrawerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handle = this.handle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setOpen(open) {
        this.setState({open});
    }

    handle() {
        this.setOpen(true);
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }
    render() {
        const {open} = this.state;

        return (
            <div>
                <fieldset>
                    <legend>Persistent Drawer</legend>
                    <button onClick={this.handle}>Open</button>
                    <div>
                        <PersistentDrawerTest
                            open={open}
                            onOpen={this.handleOpen}
                            onClose={this.handleClose}
                        />
                    </div>
                </fieldset>
            </div>
        );
    }

}
