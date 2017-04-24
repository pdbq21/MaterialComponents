/**
 * Created by ruslan on 11.04.17.
 */
import React, {Component} from 'react';
import '@material/drawer/dist/mdc.drawer.min.css';
import {drawer}  from 'material-components-web/dist/material-components-web';
const {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation} = drawer;
/*
let storedTransformPropertyName_ = void 0;
function getTransformPropertyName() {
    const globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    const forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (storedTransformPropertyName_ === undefined || forceRefresh) {
        const el = globalObj.document.createElement('div');
        const transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
        storedTransformPropertyName_ = transformPropertyName;
    }

    return storedTransformPropertyName_;
}*/

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
            this.refs.root.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.root.removeEventListener(evtType, handler);
        },
        registerDrawerInteractionHandler: (evtType, handler) => {
            this.refs.drawer.addEventListener(evtType, handler);
        },
        deregisterDrawerInteractionHandler: (evtType, handler) => {
            this.refs.drawer.removeEventListener(evtType, handler);
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
                return this.refs.drawer.style.setProperty(value === null ? null : 'translateX(' + value + 'px)');
            }
        },
        updateCssVariable: value => this.refs.root.style.setProperty('--mdc-temporary-drawer-opacity', value),
        getFocusableElements: () => {
            if (this.refs.drawer) {
                return this.refs.drawer.querySelectorAll(
                    'a[href], area[href], input:not([disabled]), select:not([disabled]), ' +
                    'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, ' +
                    '[tabindex], [contenteditable]'
                );
            }
        },
        isRtl: () => (getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl'),

        // Todo: below methods


        /*        saveElementTabState: function saveElementTabState(el) {
         return __WEBPACK_IMPORTED_MODULE_2__util__["e" /!* saveElementTabState *!/](el);
         },
         restoreElementTabState: function restoreElementTabState(el) {
         return __WEBPACK_IMPORTED_MODULE_2__util__["f" /!* restoreElementTabState *!/](el);
         },
         makeElementUntabbable: function makeElementUntabbable(el) {
         return el.setAttribute('tabindex', -1);
         },

         isDrawer: function isDrawer(el) {
         return el === _this2.drawer;
         }



         },
         saveElementTabState: function saveElementTabState() /!* el: Element *!/ {
         },
         restoreElementTabState: function restoreElementTabState() /!* el: Element *!/ {
         },
         makeElementUntabbable: function makeElementUntabbable() /!* el: Element *!/ {
         },
         isDrawer: function isDrawer() {
         return (/!* el: Element *!/ /!* boolean *!/false
         );
         }*/
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
            console.log(drawer)
            drawer.open = true;
        }
    }

    render() {
        console.log(this.foundation);
        return (
            <aside ref="root" className="mdc-temporary-drawer">
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