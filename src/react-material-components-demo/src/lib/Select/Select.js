/**
 * Created by ruslan on 16.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

import {select}  from 'material-components-web/dist/material-components-web';
const {MDCSelectFoundation} = select;
import {menu}  from 'material-components-web/dist/material-components-web';
const {MDCSimpleMenuFoundation} = menu;

let storedTransformPropertyName_;
// Returns the name of the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj, forceRefresh = false) {
    if (storedTransformPropertyName_ === undefined || forceRefresh) {
        const el = globalObj.document.createElement('div');
        storedTransformPropertyName_ = ('transform' in el.style ? 'transform' : 'webkitTransform');
    }

    return storedTransformPropertyName_;
}

export default class Select extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
        };
    }

    emit = (root, evtType, evtData) => {
        let evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {detail: evtData});
        } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, false, false, evtData);
        }

        root.dispatchEvent(evt);
    };
    items_ = () => (this.refs.root.querySelector('.mdc-list.mdc-simple-menu__items'));
    menuEl_ = () => (this.refs.root.querySelector('.mdc-select__menu.mdc-simple-menu'));
    selectedText_ = () => (this.refs.root.querySelector('.mdc-select__selected-text'));

    items = () => ([].slice.call(this.refs.root.querySelectorAll('.mdc-list-item[role]')));

    foundationMenu = new MDCSimpleMenuFoundation({
        addClass: className => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.classList.add(className);
            }
        },
        removeClass: className => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.classList.remove(className);
            }
        },
        hasClass: className => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.classList.contains(className);
            }
        },
        hasNecessaryDom: () => {

            return Boolean(this.items_());
        },
        getInnerDimensions: () => {
            return {
                width: this.items_().offsetWidth,
                height: this.items_().offsetHeight
            };
        },
        hasAnchor: () => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.parentElement && menuEl.parentElement.classList.contains('mdc-menu-anchor');
            }
        },
        getAnchorDimensions: () => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.parentElement.getBoundingClientRect();
            }
        },
        getWindowDimensions: () => {
            return {width: window.innerWidth, height: window.innerHeight};
        },
        setScale: (x, y) => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                menuEl.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
            }
        },
        setInnerScale: (x, y) => {
            const refItems = this.items_();
            if (refItems) {
                refItems.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
            }
        },
        getNumberOfItems: () => {
            const items = this.items();
            if (items) {
                return items.length;
            }
        },
        registerInteractionHandler: (type, handler) => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                menuEl.addEventListener(type, handler);
            }
        },
        deregisterInteractionHandler: (type, handler) => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                menuEl.removeEventListener(type, handler);
            }
        },
        registerDocumentClickHandler: handler => {
            return document.addEventListener('click', handler);
        },
        deregisterDocumentClickHandler: handler => {
            return document.removeEventListener('click', handler);
        },
        getYParamsForItemAtIndex: index => {
            const items = this.items();
            if (items) {
                return {
                    top: items[index].offsetTop,
                    height: items[index].offsetHeight
                };
            }
        },
        setTransitionDelayForItemAtIndex: (index, value) => {
            const items = this.items();
            if (items) {
                return items[index].style.setProperty('transition-delay', value);
            }
        },
        getIndexForEventTarget: target => {
            const items = this.items();
            if (items) {
                return items.indexOf(target);
            }
        },
        notifySelected: evtData => {
            if (this.props.onSelected !== null) {
                const items = this.items();
                this.props.onSelected({
                    index: evtData.index,
                    item: items[evtData.index]
                });
            }
            const menuEl = this.menuEl_();
            const items = this.items();
            if (menuEl && items) {
                return this.emit(menuEl, 'MDCSimpleMenu:selected', {
                    index: evtData.index,
                    item: items[evtData.index]
                });
            }

        },
        notifyCancel: () => {
            const menuEl = this.menuEl_();
            if (this.props.onCancel !== null) {
                this.props.onCancel(this);
            }
            if (menuEl) {
                return this.emit(menuEl, 'MDCSimpleMenu:cancel');
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
        isFocused: () => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return document.activeElement === menuEl;
            }
        },
        focus: () => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.focus();
            }
        },
        getFocusedItemIndex: () => {
            const items = this.items();
            if (items) {
                return items.indexOf(document.activeElement);
            }
        },
        focusItemAtIndex: index => {
            const items = this.items();
            if (items) {
                return items[index].focus();
            }
        },
        isRtl: () => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return getComputedStyle(menuEl).getPropertyValue('direction') === 'rtl';
            }
        },
        setTransformOrigin: origin => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.style[getTransformPropertyName(window) + '-origin'] = origin;
            }
        },
        setPosition: position => {
            const menuEl = this.menuEl_();
            menuEl.style.left = 'left' in position ? position.left : null;
            menuEl.style.right = 'right' in position ? position.right : null;
            menuEl.style.top = 'top' in position ? position.top : null;
            menuEl.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        getAccurateTime: () => window.performance.now(),
    });

    foundation = new MDCSelectFoundation({
        addClass: className => this.setState(({classNames}) => ({
            classNames: classNames.concat([className])
        })),
        removeClass: className => this.setState(({classNames}) => ({
            classNames: classNames.filter(cn => cn !== className)
        })),
        setAttr: (attr, value) => {
            if (this.refs.root) {
                return this.refs.root.setAttribute(attr, value);
            }
        },
        rmAttr: attr => {
            if (this.refs.root) {
                return this.refs.root.removeAttribute(attr);
            }
        },
        computeBoundingRect: () => {
            if (this.refs.root) {
                return this.refs.root.getBoundingClientRect();
            }
        },

        registerInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                return this.refs.root.addEventListener(type, handler)
            }
        },
        deregisterInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                return this.refs.root.removeEventListener(type, handler)
            }
        },
        focus: () => {
            if (this.refs.root) {
                return this.refs.root.focus()
            }
        },

        makeTabbable: () => {
            if (this.refs.root) {
                return this.refs.root.tabIndex = 0;
            }
        },
        makeUntabbable: () => {
            if (this.refs.root) {
                return this.refs.root.tabIndex = -1;
            }
        },
        getComputedStyleValue: prop => {
            if (this.refs.root) {
                return window.getComputedStyle(this.refs.root).getPropertyValue(prop);
            }
        },
        setStyle: (propertyName, value) => {
            if (this.refs.root) {
                return this.refs.root.style.setProperty(propertyName, value);
            }
        },
        create2dRenderingContext: () => {
            return document.createElement('canvas').getContext('2d');
        },
        setMenuElStyle: (propertyName, value) => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.style.setProperty(propertyName, value);
            }
        },
        setMenuElAttr: (attr, value) => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.setAttribute(attr, value);
            }
        },
        rmMenuElAttr: attr => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.removeAttribute(attr);
            }
        },
        getMenuElOffsetHeight: () => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.offsetHeight;
            }
        },

        setSelectedTextContent: selectedTextContent => {
            if (this.selectedText_()) {
                return this.selectedText_().textContent = selectedTextContent;
            }
        },
        getWindowInnerHeight: () => (window.innerHeight),

        notifyChange: () => {
            if (this.props.onChange !== null) {
                return this.props.onChange(this);
            }
        },
        openMenu: (focusIndex) => {
            return this.foundationMenu.open({focusIndex: focusIndex});
        },
        isMenuOpen: () => {
            return this.foundationMenu.open();
        },
//items
        getNumberOfOptions: () => {
            return this.foundationMenu.adapter_.getNumberOfItems();
        },
        getTextForOptionAtIndex: (index) => {
            const items = this.items();
            if (items) {
                return items[index].textContent;
            }

        },
        getValueForOptionAtIndex: (index) => {
            const items = this.items();
            if (items) {
                return items[index].id || items[index].textContent;
            }
        },
        setAttrForOptionAtIndex: (index, attr, value) => {
            const items = this.items();
            if (items) {
                return items[index].setAttribute(attr, value);
            }
        },
        rmAttrForOptionAtIndex: (index, attr) => {
            const items = this.items();
            if (items) {
                return items[index].removeAttribute(attr);
            }
        },
        getOffsetTopForOptionAtIndex: (index) => {
            const items = this.items();
            if (items) {
                return items[index].offsetTop;
            }
        },
        registerMenuInteractionHandler: (type, handler) => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                return menuEl.addEventListener(type, handler);
            }
        },
        deregisterMenuInteractionHandler: (type, handler) => {
            const menuEl = this.menuEl_();
            if (menuEl) {
                menuEl.removeEventListener(type, handler);
            }
        },

    });

    componentDidMount() {
        this.foundationMenu.init();
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundationMenu.destroy();
        this.foundation.destroy();
    }

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onSelected;
        delete ownProps.onCancel;
        delete ownProps.onChange;
        const {
            elementType,
            className,
            role,
            tabIndex,
            children,
            ...otherProps
        } = ownProps;

        const ElementType = elementType || 'div';
        const classes = classnames('mdc-select', this.state.classNames, className);

        return (
            <ElementType
                ref='root'
                className={classes}
                role={role || "listbox"}
                tabIndex={tabIndex || "0"}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}