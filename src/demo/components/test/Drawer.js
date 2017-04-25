/**
 * Created by ruslan on 11.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/drawer/dist/mdc.drawer.min.css';
import {drawer}  from 'material-components-web/dist/material-components-web';
const {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation} = drawer;

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

    foundation = new MDCTemporaryDrawerFoundation({
        addClass: className => this.setState(({classNameDrawer}) => ({
            classNameDrawer: classNameDrawer.concat([className])
        })),
        removeClass: className => this.setState(({classNameDrawer}) => ({
            classNameDrawer: classNameDrawer.filter(cn => cn !== className)
        })),
        hasClass: className => (this.refs.root.classList.contains(className)),

        hasNecessaryDom: () => Boolean(this.refs.drawer),

        registerInteractionHandler: (evtType, handler) => {
            this.refs.root.addEventListener(remapEvent(evtType), handler, applyPassive());
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.root.removeEventListener(remapEvent(evtType), handler, applyPassive());
        },
        registerDrawerInteractionHandler: (evtType, handler) => {
            this.refs.drawer.addEventListener(remapEvent(evtType), handler);
        },
        deregisterDrawerInteractionHandler: (evtType, handler) => {
            this.refs.drawer.removeEventListener(remapEvent(evtType), handler);
        },
        registerTransitionEndHandler: handler => {
            this.refs.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: handler => {
            this.refs.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: handler => {
            document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: handler => {
            document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: () => {
            if (this.refs.drawer) {
                return this.refs.drawer.offsetWidth;
            }
        },
        setTranslateX: value => {
            if (this.refs.drawer) {
                return this.refs.drawer.style.setProperty(getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
            }
        },
        updateCssVariable: value => {
            if (supportsCssCustomProperties()){
                this.refs.root.style.setProperty('--mdc-temporary-drawer-opacity', value);
            }
        },

        getFocusableElements: () => {
            if (this.refs.drawer) {
                return this.refs.drawer.querySelectorAll(
                    'a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
                    'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, ' +
                    '[tabindex], [contenteditable]'
                );
            }
        },
        saveElementTabState: el => {
            return saveElementTabState(el);
        },
        restoreElementTabState: el => {
            return restoreElementTabState(el);
        },
        makeElementUntabbable: el => {
            return el.setAttribute('tabindex', -1);
        },
        isRtl: () => (getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl'),
        isDrawer: el => {
            return el === this.refs.drawer;
        }
    });

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            let drawer = new MDCTemporaryDrawer(this.refs.root);
            console.log(drawer);
            drawer.open = true;
        }
    }

    render() {
        console.log(this.foundation);
        return (
            <aside
                ref="root"
                className={classnames('mdc-temporary-drawer', this.state.classNameDrawer)}

            >
                <nav ref='drawer' className="mdc-temporary-drawer__drawer">
                    <header className="mdc-temporary-drawer__header">
                        <div
                            className="mdc-temporary-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary">
                            Header here
                        </div>
                    </header>
                    <nav className="mdc-temporary-drawer__content mdc-list-group">
                        <div id="icon-with-text-demo" className="mdc-list">
                            <a className="mdc-list-item mdc-temporary-drawer--selected" href="#" tabIndex="-1">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                                    inbox
                                </i>
                                Inbox
                            </a>
                            <a className="mdc-list-item" href="#" tabIndex="-1">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                                    star
                                </i>
                                Star
                            </a>
                            <a className="mdc-list-item" href="#" tabIndex="-1">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                                    send
                                </i>
                                Sent Mail
                            </a>
                            <a className="mdc-list-item" href="#" tabIndex="-1">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                                    drafts
                                </i>
                                Drafts
                            </a>
                        </div>

                        <hr className="mdc-list-divider"/>

                        <div className="mdc-list">
                            <a className="mdc-list-item" href="#" tabIndex="-1">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                                    email
                                </i>
                                All Mail
                            </a>
                            <a className="mdc-list-item" href="#" tabIndex="-1">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                                    delete
                                </i>
                                Trash
                            </a>
                            <a className="mdc-list-item" href="#" tabIndex="-1">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                                    report
                                </i>
                                Spam
                            </a>
                        </div>
                    </nav>
                </nav>
            </aside>
        );
    }
}