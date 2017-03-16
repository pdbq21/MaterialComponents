/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import '@material/menu/dist/mdc.menu.min.css';

export default function MenuComponent() {

    return (
        <div >
            <div className="mdc-simple-menu mdc-simple-menu--open" tabIndex="-1">
                <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                    <li className="mdc-list-item" role="menuitem" tabIndex="0">
                        A Menu Item
                    </li>
                    <li className="mdc-list-item" role="menuitem" tabIndex="0">
                        Another Menu Item
                    </li>
                </ul>
            </div>
            <div className="toolbar mdc-menu-anchor">
                <div className="mdc-simple-menu">
                    <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                        <li className="mdc-list-item" role="menuitem" tabIndex="0">
                            A Menu Item
                        </li>
                        <li className="mdc-list-item" role="menuitem" tabIndex="0">
                            Another Menu Item
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}