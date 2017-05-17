/**
 * Created by ruslan on 11.04.17.
 */
import React from 'react';
//import DialogTest from './test/Dialog'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogFooterButton,
    DialogSurface,
    DialogTitle
} from '../../app/index'
import {
    List,
    ListItem,
} from '../../app/index'
export default class DialogComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openScroll: false,
        };

        this.handle = this.handle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleOpenScroll = this.handleOpenScroll.bind(this);
        this.handleCloseScroll = this.handleCloseScroll.bind(this);
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

    setOpenScroll(openScroll) {
        this.setState({openScroll});
    }

    handleScroll() {
        this.setOpenScroll(true);
    }

    handleOpenScroll() {
        this.setOpenScroll(true);
    }

    handleCloseScroll() {
        this.setOpenScroll(false);
    }

    handleAccept() {
        console.log("Accept");
    }

    handleCancel() {
        console.log("Decline");
    }

    render() {
        const {open, openScroll} = this.state;
        return (
            <div>
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
                                    Let Google help apps determine location. This means sending anonymous location data
                                    to Google, even when no apps are running.
                                </DialogBody>
                                <DialogFooter>
                                    <DialogFooterButton cancel>Decline</DialogFooterButton>
                                    <DialogFooterButton accept>Accept</DialogFooterButton>
                                </DialogFooter>
                            </DialogSurface>
                        </Dialog>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Dialog with List</legend>
                    <button onClick={this.handleScroll}>Open</button>
                    <div>
                        <Dialog
                            open={openScroll}
                            onAccept={this.handleAccept}
                            onCancel={this.handleCancel}
                            onOpen={this.handleOpenScroll}
                            onClose={this.handleCloseScroll}
                        >
                            <DialogSurface>
                                <DialogHeader>
                                    <DialogTitle>
                                        Choose?
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogBody scrollable>
                                    <List>
                                        <ListItem>Item 1</ListItem>
                                        <ListItem>Item 2</ListItem>
                                        <ListItem>Item 3</ListItem>
                                        <ListItem>Item 4</ListItem>
                                        <ListItem>Item 5</ListItem>
                                    </List>
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