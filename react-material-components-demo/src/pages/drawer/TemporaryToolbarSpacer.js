/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
    DrawerTemporary,
    TemporaryContent,
    DrawerListItemDetail,
    TemporaryDrawer,
    TemporaryListItem,
    TemporaryToolbarSpacer,
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMain,
    Icon
} from '../../lib/index'


export default class TemporaryToolbarSpacerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
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
            <section>
                <Toolbar>
                    <ToolbarRow>
                        <ToolbarSection start>
                            <Icon
                                onClick={this.handle}
                            >menu</Icon>
                            <ToolbarTitle>Temporary Drawer</ToolbarTitle>
                        </ToolbarSection>
                    </ToolbarRow>
                </Toolbar>
                <DrawerTemporary
                    open={open}
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                >
                    <TemporaryDrawer>
                        <TemporaryToolbarSpacer/>
                        <TemporaryContent>
                            <TemporaryListItem selected>
                                <DrawerListItemDetail start>
                                    inbox
                                </DrawerListItemDetail>
                                Inbox
                            </TemporaryListItem>
                            <TemporaryListItem >
                                <DrawerListItemDetail start>
                                    star
                                </DrawerListItemDetail>
                                Star
                            </TemporaryListItem>
                        </TemporaryContent>
                    </TemporaryDrawer>
                </DrawerTemporary>
                <ToolbarMain>
                    <h2>Temporary Drawer with Toolbar Spacer</h2>
                    <p>
                        Click the menu icon above to open.
                    </p>
                </ToolbarMain>
            </section>
        )
    }
}
