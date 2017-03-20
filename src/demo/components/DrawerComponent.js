/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';

import '@material/drawer/dist/mdc.drawer.css';
export default function DrawerComponent() {

    return (
        <div >
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <fieldset>
                <legend>Permanent Drawer</legend>
                <div>
                    <nav className="mdc-permanent-drawer mdc-typography">
                        <div className="mdc-permanent-drawer__toolbar-spacer"></div>
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
        </div>
    );
}