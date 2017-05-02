/**
 * Created by ruslan on 25.04.17.
 */
import React from 'react';

//import PersistentDrawerTest from './test/PersistentDrawer'
import {
    DrawerListItemDetail,
    DrawerPersistent,
    PersistentContent,
    PersistentToolbarSpacer,
    PersistentDrawer,
    PersistentHeader,
    PersistentHeaderContent,
    PersistentListItem
} from '../../app/lib'

export default class PersistentDrawerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isActive: false
        };

        this.handle = this.handle.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setOpen(open) {
        this.setState({open});
    }

    handle() {
        this.setOpen(!this.state.open);
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }
    handleToggle() {
        this.setState({isActive: !this.state.isActive});
    }
    render() {
        const {open, isActive} = this.state;

        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Persistent Drawer</legend>
                    <button onClick={this.handle}>Open</button>
                    <button onClick={this.handleToggle}>ToolbarSpacer/Header</button>
                    <div>
                        <DrawerPersistent
                            open={open}
                            onOpen={this.handleOpen}
                            onClose={this.handleClose}
                        >
                            <PersistentDrawer>
                                {(isActive) ?
                                    <PersistentToolbarSpacer/> :
                                    <PersistentHeader>
                                        <PersistentHeaderContent>
                                            Header here
                                        </PersistentHeaderContent>
                                    </PersistentHeader>
                                }

                                <PersistentContent>
                                    <PersistentListItem selected>
                                        <DrawerListItemDetail start>
                                            inbox
                                        </DrawerListItemDetail>
                                        Inbox
                                    </PersistentListItem>
                                    <PersistentListItem >
                                        <DrawerListItemDetail start>
                                            star
                                        </DrawerListItemDetail>
                                        Star
                                    </PersistentListItem>
                                </PersistentContent>
                            </PersistentDrawer>
                        </DrawerPersistent>
                    </div>
                </fieldset>
            </div>
        );
    }

}
