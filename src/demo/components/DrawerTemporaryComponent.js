/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';

//import DrawerComponentTest from './test/Drawer'
import {
    DrawerTemporary,
    TemporaryContent,
    DrawerListItemDetail,
    TemporaryDrawer,
    TemporaryHeader,
    TemporaryHeaderContent,
    TemporaryListItem,
    TemporaryToolbarSpacer
} from '../../app/index'
export default class DrawerComponent extends React.Component {

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
        this.setOpen(true);
    }

    handleToggle() {
        this.setState({isActive: !this.state.isActive});
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }

    render() {
        const {open, isActive} = this.state;

        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Drawer</legend>
                    <button onClick={this.handle}>Open</button>
                    <button onClick={this.handleToggle}>ToolbarSpacer/Header</button>
                    <div>
                        <DrawerTemporary
                            open={open}
                            onOpen={this.handleOpen}
                            onClose={this.handleClose}
                        >
                            <TemporaryDrawer>
                                {(isActive) ?
                                    <TemporaryToolbarSpacer/> :
                                    <TemporaryHeader>
                                        <TemporaryHeaderContent>
                                            Header here
                                        </TemporaryHeaderContent>
                                    </TemporaryHeader>
                                }

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
                    </div>
                </fieldset>
            </div>
        );
    }

}


/*
 export default function DrawerComponent() {

 return (
 <div >
 <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
 <fieldset>
 <legend>Permanent Drawer</legend>
 <div>
 <nav className="mdc-permanent-drawer mdc-typography">
 <div className="mdc-permanent-drawer__toolbar-spacer"/>
 <div className="mdc-permanent-drawer__content">
 <nav id="icon-with-text-demo" className="mdc-list">
 <a className="mdc-list-item mdc-permanent-drawer--selected" href="#">
 <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
 </a>
 <a className="mdc-list-item" href="#">
 <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
 </a>
 </nav>
 </div>
 </nav>
 <div>
 Toolbar and page content go inside here.
 </div>
 <div>Toolbar goes here</div>

 <div className="content">
 <nav className="mdc-permanent-drawer mdc-typography">
 <nav id="icon-with-text-demo" className="mdc-list">
 <a className="mdc-list-item mdc-permanent-drawer--selected" href="#">
 <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
 </a>
 <a className="mdc-list-item" href="#">
 <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
 </a>
 </nav>
 </nav>
 <main>
 Page content goes here.
 </main>
 </div>
 </div>
 </fieldset>
 <fieldset>
 <legend>Permanent Drawer</legend>
 <div>
 <button>Open</button>
 <DrawerComponentTest />
 </div>
 </fieldset>
 </div>
 );
 }*/