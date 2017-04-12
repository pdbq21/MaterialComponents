/**
 * Created by ruslan on 12.04.17.
 */
import React, {Component} from 'react';
import '@material/menu/dist/mdc.menu.min.css';
import {menu}  from 'material-components-web/dist/material-components-web';
const {MDCSimpleMenu, MDCSimpleMenuFoundation} = menu;


export default class MenuComponentTest extends Component {

    state = {
        classNameMenu: []
    };

    foundation = new MDCSimpleMenuFoundation();

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            let drawer = new MDCSimpleMenu(this.refs.root);
            drawer.open = true;
        }
    }

    render() {
        return (
            <div
                ref='root'
                className="mdc-simple-menu" tabIndex="-1"
            >
                <ul
                    className="mdc-simple-menu__items mdc-list"
                    role="menu"
                    aria-hidden="true"
                >
                    <li className="mdc-list-item" role="menuitem" tabIndex="0">
                        A Menu Item
                    </li>
                    <li className="mdc-list-item" role="menuitem" tabIndex="0">
                        Another Menu Item
                    </li>
                </ul>
            </div>
        );
    }
}