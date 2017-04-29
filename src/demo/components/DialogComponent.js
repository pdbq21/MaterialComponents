/**
 * Created by ruslan on 11.04.17.
 */
import React from 'react';

import DialogTest from './test/Dialog'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogFooterButton,
    DialogSurface,
    DialogTitle
} from '../../app/lib'

export default class DialogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handle = this.handle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
    handleAccept(){
        console.log("Accept");
    }
    handleCancel(){
        console.log("Decline");
    }
    render() {
        const {open} = this.state;

        return (
            <div>
                <fieldset>
                    <legend>Dialog</legend>
                    <button onClick={this.handle}>Open</button>
                    <div>
                        {/*<DialogTest
                            open={open}
                            onAccept={this.handleAccept}
                            onCancel={this.handleCancel}
                            onOpen={this.handleOpen}
                            onClose={this.handleClose}
                        />*/}
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Dialog</legend>
                    <button onClick={this.handle}>Open</button>
                    <div>
                        <Dialog
                            open={open}
                            onAccept={this.handleAccept}
                            onCancel={this.handleCancel}
                            onOpen={this.handleOpen}
                            onClose={this.handleClose}
                        >
                            <DialogSurface>
                                <DialogHeader>
                                    <DialogTitle>
                                        Use Google's location service?
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogBody>
                                    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                                </DialogBody>
                                <DialogFooter>
                                    <DialogFooterButton cancel>Decline</DialogFooterButton>
                                    <DialogFooterButton accept>Accept</DialogFooterButton>
                                </DialogFooter>
                            </DialogSurface>
                        </Dialog>
                    </div>
                </fieldset>
            </div>
        );
    }

}