/**
 * Created by ruslan on 25.04.17.
 */

import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/drawer/dist/mdc.drawer.min.css';
import {drawer}  from 'material-components-web/dist/material-components-web';
const {util, MDCPersistentDrawerFoundation} = drawer;
const {
    // Determine whether the current browser supports passive event listeners, and if so, use them.
    applyPassive,
    // Choose the correct transform property to use on the current browser.
    getTransformPropertyName,
    restoreElementTabState,
    // Remap touch events to pointer events, if the browser doesn't support touch events.
    remapEvent,
    // Save the tab state for an element.
    saveElementTabState
} = util;
const {
    cssClasses: {
        OPEN: OPEN_CLASS_NAME,
    }
} = MDCPersistentDrawerFoundation;
export default class DrawerComponentTest extends Component {
    static defaultProps = {
        open: false,
    };
    state = {
        classNameDrawer: [],
        open: false
    };

    foundation = new MDCPersistentDrawerFoundation({
        addClass: className => {
            this.setState(({classNameDrawer}) => ({
                classNameDrawer: classNameDrawer.concat([className])
            }));
            if (className === OPEN_CLASS_NAME) {
                this.setState({
                    open: true,
                });
                if (this.props.onOpenDrawer) {
                    this.props.onOpenDrawer(this);
                }
            }
        },
        removeClass: className => {
            this.setState(({classNameDrawer}) => ({
                classNameDrawer: classNameDrawer.filter(cn => cn !== className)
            }));
            // MDCTemporaryDrawerFoundation does not provide opening/closing event.
            // But we can assume open/close by adding/removing OPEN_CLASS_NAME
            if (className === OPEN_CLASS_NAME) {
                this.setState({
                    open: false,
                });
                if (this.props.onCloseDrawer) {
                    this.props.onCloseDrawer(this);
                }
            }
        },
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
            this.refs.root.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: handler => {
            this.refs.root.removeEventListener('transitionend', handler);
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

    componentWillReceiveProps(props) {
        if (props.open !== this.state.open) {
            if (props.open) {
                this.foundation.open();
            } else {
                this.foundation.close();
            }
        }
    }

    render() {
        const a = new MDCPersistentDrawerFoundation;
        console.dir(a);
        return (
            <aside
                ref='root'
                className={classnames('mdc-persistent-drawer mdc-typography', this.state.classNameDrawer)}
            >
                <nav
                    ref='drawer'
                    className="mdc-persistent-drawer__drawer">
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