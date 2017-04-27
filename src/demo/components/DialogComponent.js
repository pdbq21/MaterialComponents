/**
 * Created by ruslan on 11.04.17.
 */
import React from 'react';

import DialogTest from './test/Dialog'

export default class DialogComponent extends React.Component {

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
                    <legend>Dialog</legend>
                    <button onClick={this.handle}>Open</button>
                    <div>
                        <DialogTest
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