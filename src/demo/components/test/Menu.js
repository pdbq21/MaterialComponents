/**
 * Created by ruslan on 12.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/menu/dist/mdc.menu.min.css';
import {menu}  from 'material-components-web/dist/material-components-web';
const {MDCSimpleMenuFoundation} = menu;

let storedTransformPropertyName_;
// Returns the name of the correct transform property to use on the current browser.
export function getTransformPropertyName(globalObj, forceRefresh = false) {
    if (storedTransformPropertyName_ === undefined || forceRefresh) {
        const el = globalObj.document.createElement('div');
        storedTransformPropertyName_ = ('transform' in el.style ? 'transform' : 'webkitTransform');
    }
    return storedTransformPropertyName_;
}

export default class MenuComponentTest extends Component {
    static defaultProps = {
        open: false,
    };
    state = {
        classNames: [],
        open: false,
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
            hasAnchor: () => {
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
            getNumberOfItems: () => {
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
            setScale: (x, y) => {
                if (this.refs.root) {
                    this.refs.root.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
                }
            },
            setInnerScale: (x, y) => {
                if (this.refs.items) {
                    this.refs.items.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
                }
            },
            setTransformOrigin: origin => {
                if (this.refs.root) {
                    this.refs.root.style[getTransformPropertyName(window) + '-origin'] = origin;
                }
            },
            saveFocus: () => {
                this.previousFocus_ = document.activeElement;
            },
            restoreFocus: () => {
                if (this.previousFocus_) {
                    this.previousFocus_.focus();
                }
            },
            notifySelected: evtData => {
                if (this.props.onSelected !== null) {
                    const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                    this.props.onSelected(this, {
                        index: evtData.index,
                        item: items[evtData.index]
                    });
                }
            },
            notifyCancel: () => {
                if (this.props.onCancel !== null) {
                    this.props.onCancel(this);
                }
            },
        }
    );

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentWillReceiveProps(props) {
        if (props.open) {
            this.foundation.open();
        } else {
            this.foundation.close();
        }
    }

    render() {
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