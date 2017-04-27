/**
 * Created by ruslan on 11.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/drawer/dist/mdc.drawer.min.css';
import {drawer}  from 'material-components-web/dist/material-components-web';
const {util, MDCTemporaryDrawer, MDCTemporaryDrawerFoundation} = drawer;
const {
    applyPassive,
    getTransformPropertyName,
    restoreElementTabState,
    remapEvent,
    saveElementTabState,
    supportsCssCustomProperties
} = util;
const {
    cssClasses: {
        OPEN: OPEN_CLASS_NAME,
    }
} = MDCTemporaryDrawerFoundation;

export default class DrawerComponentTest extends Component {

    state = {
        classNameDrawer: [],
        open: false
    };

    foundation = new MDCTemporaryDrawerFoundation({
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
    componentWillReceiveProps(props) {
        if (props.open !== this.state.open) {
            if (props.open) {
                this.foundation.open();
            } else {
                this.foundation.close();
            }
        }
    }
    componentDidUpdate() {
        /*if (this.props.isOpen) {
            let drawer = new MDCTemporaryDrawer(this.refs.root);
            console.dir(drawer, MDCTemporaryDrawerFoundation);
            drawer.open = true;
            //this.foundation.open();
        }*/
    }

    render() {
        console.log(util);
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