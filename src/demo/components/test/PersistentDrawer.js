/**
 * Created by ruslan on 25.04.17.
 */

import React, {Component} from 'react';
import '@material/drawer/dist/mdc.drawer.min.css';
import {drawer}  from 'material-components-web/dist/material-components-web';
const {MDCPersistentDrawer, MDCPersistentDrawerFoundation} = drawer;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName) {
    const globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

    if (!('ontouchstart' in globalObj.document)) {
        switch (eventName) {
            case 'touchstart':
                return 'pointerdown';
            case 'touchmove':
                return 'pointermove';
            case 'touchend':
                return 'pointerup';
            default:
                return eventName;
        }
    }

    return eventName;
}
const TAB_DATA = 'data-mdc-tabindex';
const TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';
let supportsPassive_;
let storedTransformPropertyName_;
// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
    const globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    const forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (supportsPassive_ === undefined || forceRefresh) {
        let isSupported = false;
        try {
            globalObj.document.addEventListener('test', null, { get passive() {
                isSupported = true;
            } });
        } catch (e) {}

        supportsPassive_ = isSupported;
    }

    return supportsPassive_ ? { passive: true } : false;
}
// Choose the correct transform property to use on the current browser.
function getTransformPropertyName() {
    const globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    const forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (storedTransformPropertyName_ === undefined || forceRefresh) {
        const el = globalObj.document.createElement('div');
        storedTransformPropertyName_ = 'transform' in el.style ? 'transform' : '-webkit-transform';
    }

    return storedTransformPropertyName_;
}
// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties() {
    const globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

    if ('CSS' in globalObj) {
        return globalObj.CSS.supports('(--color: red)');
    }
    return false;
}
// Save the tab state for an element.
function saveElementTabState(el) {
    if (el.hasAttribute('tabindex')) {
        el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
    }
    el.setAttribute(TAB_DATA_HANDLED, true);
}
// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
    // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
    if (el.hasAttribute(TAB_DATA_HANDLED)) {
        if (el.hasAttribute(TAB_DATA)) {
            el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
            el.removeAttribute(TAB_DATA);
        } else {
            el.removeAttribute('tabindex');
        }
        el.removeAttribute(TAB_DATA_HANDLED);
    }
}
export default class DrawerComponentTest extends Component {

    state = {
        classNameDrawer: []
    };

    foundation = new MDCPersistentDrawerFoundation();

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            let drawer = new MDCPersistentDrawer(this.refs.root);
            drawer.open = true;
        }
    }

    render() {
        console.log(drawer);
        return (
            <aside className="mdc-persistent-drawer mdc-typography">
                <nav className="mdc-persistent-drawer__drawer">
                    <header className="mdc-persistent-drawer__header">
                        <div className="mdc-persistent-drawer__header-content">
                            Header here
                        </div>
                    </header>
                    <nav id="icon-with-text-demo" className="mdc-persistent-drawer__content mdc-list">
                        <a className="mdc-list-item mdc-persistent-drawer--selected" href="#">
                            <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
                        </a>
                        <a className="mdc-list-item" href="#">
                            <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
                        </a>
                    </nav>
                </nav>
            </aside>
        );
    }
}