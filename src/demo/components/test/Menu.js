/**
 * Created by ruslan on 12.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/menu/dist/mdc.menu.min.css';
import {menu}  from 'material-components-web/dist/material-components-web';
const {MDCSimpleMenu, MDCSimpleMenuFoundation} = menu;

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
}

export default class MenuComponentTest extends Component {

    state = {
        classNames: []
    };

    foundation = new MDCSimpleMenuFoundation({
            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),
            hasClass: className => {
                if (this.refs.root) {
                    return this.refs.root.classList.contains(className);
                }
            },
            hasAnchor: function hasAnchor() {
                if (this.refs.root) {
                    return this.refs.root.parentElement && this.refs.root.parentElement.classList.contains('mdc-menu-anchor');
                }
            },

            registerInteractionHandler: (type, handler) => {
                if (this.refs.root) {
                    this.refs.root.addEventListener(type, handler);
                }
            },
            deregisterInteractionHandler: (type, handler) => {
                if (this.refs.root) {
                    this.refs.root.removeEventListener(type, handler);
                }
            },
            registerDocumentClickHandler: handler => {
                return document.addEventListener('click', handler);
            },
            deregisterDocumentClickHandler: handler => {
                return document.removeEventListener('click', handler);
            },
            focus: () => {
                if (this.refs.root) {
                    this.refs.root.focus();
                }
            },
            hasNecessaryDom: () => {
                return Boolean(this.refs.items);
            },
            getInnerDimensions: () => {
                const itemsContainer = this.refs.items;
                return {width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight};
            },
            getAnchorDimensions: () => {
                if (this.refs.root) {
                    this.refs.root.parentElement.getBoundingClientRect();
                }
            },
            getWindowDimensions: () => {
                return {width: window.innerWidth, height: window.innerHeight};
            },
            getNumberOfItems: function getNumberOfItems() {
                if (this.refs.items) {
                    const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                    return items.length;
                }
            },
            setTransitionDelayForItemAtIndex: (index, value) => {
                if (this.refs.items) {
                    const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                    return items[index].style.setProperty('transition-delay', value);
                }
            },
            getIndexForEventTarget: target => {
                if (this.refs.items) {
                    const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                    return items.indexOf(target);
                }
            },
            isFocused: () => {
                if (this.refs.root) {
                    return document.activeElement === this.refs.root;
                }
            },
            getFocusedItemIndex: () => {
                if (this.refs.items) {
                    const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                    return items.indexOf(document.activeElement);
                }
            },
            focusItemAtIndex: index => {
                if (this.refs.items) {
                    const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                    return items[index].focus();
                }
            },
            isRtl: () => {
                if (this.refs.root) {
                    return getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl';
                }
            },
            getYParamsForItemAtIndex: index => {
                if (this.refs.items) {
                    const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                    return {top: items[index].offsetTop, height: items[index].offsetHeight};
                }
            },
            getAccurateTime: () => window.performance.now(),

            setPosition: position => {
                this.refs.root.style.left = 'left' in position ? position.left : null;
                this.refs.root.style.right = 'right' in position ? position.right : null;
                this.refs.root.style.top = 'top' in position ? position.top : null;
                this.refs.root.style.bottom = 'bottom' in position ? position.bottom : null;
            },

            /**** todo below *****/


            setScale: (x, y) => {
                if (this.refs.root) {
                    this.refs.root.style = 'scale(' + x + ', ' + y + ')';
                }
            },



            setInnerScale: function setInnerScale(x, y) {
                _this2.itemsContainer_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window)] = 'scale(' + x + ', ' + y + ')';
            },





            notifySelected: function notifySelected(evtData) {
                return _this2.emit('MDCSimpleMenu:selected', {
                    index: evtData.index,
                    item: _this2.items[evtData.index]
                });
            },
            notifyCancel: function notifyCancel() {
                return _this2.emit('MDCSimpleMenu:cancel');
            },
            saveFocus: function saveFocus() {
                _this2.previousFocus_ = document.activeElement;
            },
            restoreFocus: function restoreFocus() {
                if (_this2.previousFocus_) {
                    _this2.previousFocus_.focus();
                }
            },




            setTransformOrigin: function setTransformOrigin(origin) {
                _this2.root_.style[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getTransformPropertyName */])(window) + '-origin'] = origin;
            },
             /*
             hasClass: function hasClass() /!* className: string *!/{},
             hasNecessaryDom: function hasNecessaryDom() {
             return (/!* boolean *!/false
             );
             },
             getInnerDimensions: function getInnerDimensions() {
             return (/!* { width: number, height: number } *!/{}
             );
             },
             hasAnchor: function hasAnchor() {
             return (/!* boolean *!/false
             );
             },
             getAnchorDimensions: function getAnchorDimensions() {
             return (
             /!* { width: number, height: number, top: number, right: number, bottom: number, left: number } *!/{}
             );
             },
             getWindowDimensions: function getWindowDimensions() {
             return (/!* { width: number, height: number } *!/{}
             );
             },
             setScale: function setScale() /!* x: number, y: number *!/{},
             setInnerScale: function setInnerScale() /!* x: number, y: number *!/{},
             getNumberOfItems: function getNumberOfItems() {
             return (/!* number *!/0
             );
             },
             registerInteractionHandler: function registerInteractionHandler() /!* type: string, handler: EventListener *!/{},
             deregisterInteractionHandler: function deregisterInteractionHandler() /!* type: string, handler: EventListener *!/{},
             registerDocumentClickHandler: function registerDocumentClickHandler() /!* handler: EventListener *!/{},
             deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /!* handler: EventListener *!/{},
             getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
             return (/!* index: number *!/ /!* {top: number, height: number} *!/{}
             );
             },
             setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /!* index: number, value: string *!/{},
             getIndexForEventTarget: function getIndexForEventTarget() {
             return (/!* target: EventTarget *!/ /!* number *!/0
             );
             },
             notifySelected: function notifySelected() /!* evtData: {index: number} *!/{},
             notifyCancel: function notifyCancel() {},
             saveFocus: function saveFocus() {},
             restoreFocus: function restoreFocus() {},
             isFocused: function isFocused() {
             return (/!* boolean *!/false
             );
             },
             focus: function focus() {},
             getFocusedItemIndex: function getFocusedItemIndex() {
             return (/!* number *!/-1
             );
             },
             focusItemAtIndex: function focusItemAtIndex() /!* index: number *!/{},
             isRtl: function isRtl() {
             return (/!* boolean *!/false
             );
             },
             setTransformOrigin: function setTransformOrigin() /!* origin: string *!/{},
             setPosition: function setPosition() /!* position: { top: string, right: string, bottom: string, left: string } *!/{},
             getAccurateTime: function getAccurateTime() {
             return (/!* number *!/0
             );*/



        }
        /*
         hasClass: function hasClass() /!* className: string *!/{},
         hasNecessaryDom: function hasNecessaryDom() {
         return (/!* boolean *!/false
         );
         },
         getInnerDimensions: function getInnerDimensions() {
         return (/!* { width: number, height: number } *!/{}
         );
         },
         hasAnchor: function hasAnchor() {
         return (/!* boolean *!/false
         );
         },
         getAnchorDimensions: function getAnchorDimensions() {
         return (
         /!* { width: number, height: number, top: number, right: number, bottom: number, left: number } *!/{}
         );
         },
         getWindowDimensions: function getWindowDimensions() {
         return (/!* { width: number, height: number } *!/{}
         );
         },
         setScale: function setScale() /!* x: number, y: number *!/{},
         setInnerScale: function setInnerScale() /!* x: number, y: number *!/{},
         getNumberOfItems: function getNumberOfItems() {
         return (/!* number *!/0
         );
         },
         registerInteractionHandler: function registerInteractionHandler() /!* type: string, handler: EventListener *!/{},
         deregisterInteractionHandler: function deregisterInteractionHandler() /!* type: string, handler: EventListener *!/{},
         registerDocumentClickHandler: function registerDocumentClickHandler() /!* handler: EventListener *!/{},
         deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /!* handler: EventListener *!/{},
         getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
         return (/!* index: number *!/ /!* {top: number, height: number} *!/{}
         );
         },
         setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /!* index: number, value: string *!/{},
         getIndexForEventTarget: function getIndexForEventTarget() {
         return (/!* target: EventTarget *!/ /!* number *!/0
         );
         },
         notifySelected: function notifySelected() /!* evtData: {index: number} *!/{},
         notifyCancel: function notifyCancel() {},
         saveFocus: function saveFocus() {},
         restoreFocus: function restoreFocus() {},
         isFocused: function isFocused() {
         return (/!* boolean *!/false
         );
         },
         focus: function focus() {},
         getFocusedItemIndex: function getFocusedItemIndex() {
         return (/!* number *!/-1
         );
         },
         focusItemAtIndex: function focusItemAtIndex() /!* index: number *!/{},
         isRtl: function isRtl() {
         return (/!* boolean *!/false
         );
         },
         setTransformOrigin: function setTransformOrigin() /!* origin: string *!/{},
         setPosition: function setPosition() /!* position: { top: string, right: string, bottom: string, left: string } *!/{},
         getAccurateTime: function getAccurateTime() {
         return (/!* number *!/0
         );*/
    );

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
        console.log(this.foundation);
        return (
            <div
                ref='root'
                className={classnames('mdc-simple-menu', this.state.classNames)}

                tabIndex="-1"
            >
                <ul
                    ref='items'
                    className="mdc-simple-menu__items mdc-list"
                    role="menu"
                    aria-hidden="true"
                >
                    <li
                        className="mdc-list-item" role="menuitem" tabIndex="0">
                        A Menu Item
                    </li>
                    <li
                        className="mdc-list-item" role="menuitem" tabIndex="0">
                        Another Menu Item
                    </li>
                </ul>
            </div>
        );
    }
}