/**
 * Created by ruslan on 30.03.17.
 */
import React, {Component} from 'react';
import '@material/select/dist/mdc.select.min.css';
import {select}  from 'material-components-web/dist/material-components-web';
const {MDCSelectFoundation} = select;
import classnames from 'classnames';
import '@material/menu/dist/mdc.menu.min.css';
import {menu}  from 'material-components-web/dist/material-components-web';
const {MDCSimpleMenuFoundation} = menu;
import '@material/list/dist/mdc.list.min.css';

let storedTransformPropertyName_;
// Returns the name of the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj, forceRefresh = false) {
    if (storedTransformPropertyName_ === undefined || forceRefresh) {
        const el = globalObj.document.createElement('div');
        storedTransformPropertyName_ = ('transform' in el.style ? 'transform' : 'webkitTransform');
    }

    return storedTransformPropertyName_;
}

export default class TestSelect extends Component {

    state = {
        classNames: [],
        classNamesMenuEl: [],
    };
    //this.refs.menuEl
    foundationMenu = new MDCSimpleMenuFoundation({
        addClass: className => this.setState(({classNamesMenuEl}) => ({
            classNamesMenuEl: classNamesMenuEl.concat([className])
        })),
        removeClass: className => this.setState(({classNamesMenuEl}) => ({
            classNamesMenuEl: classNamesMenuEl.filter(cn => cn !== className)
        })),
        hasClass: className => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.classList.contains(className);
            }
        },
        hasNecessaryDom: () => {
            return Boolean(this.refs.items);
        },
        getInnerDimensions: () => {
            return {
                width: this.refs.items.offsetWidth,
                height: this.refs.items.offsetHeight
            };
        },
        hasAnchor: () => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.parentElement && this.refs.menuEl.parentElement.classList.contains('mdc-menu-anchor');
            }
        },
        getAnchorDimensions: () => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.parentElement.getBoundingClientRect();
            }
        },
        getWindowDimensions: () => {
            return {width: window.innerWidth, height: window.innerHeight};
        },
        setScale: (x, y) => {
            if (this.refs.menuEl) {
                this.refs.menuEl.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
            }
        },
        setInnerScale: (x, y) => {
            if (this.refs.items) {
                this.refs.items.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
            }
        },
        getNumberOfItems: () => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items.length;
            }
        },
        registerInteractionHandler: (type, handler) => {
            if (this.refs.menuEl) {
                this.refs.menuEl.addEventListener(type, handler);
            }
        },
        deregisterInteractionHandler: (type, handler) => {
            if (this.refs.menuEl) {
                this.refs.menuEl.removeEventListener(type, handler);
            }
        },
        registerDocumentClickHandler: handler => {
            return document.addEventListener('click', handler);
        },
        deregisterDocumentClickHandler: handler => {
            return document.removeEventListener('click', handler);
        },
        getYParamsForItemAtIndex: index => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return {
                    top: items[index].offsetTop,
                    height: items[index].offsetHeight
                };
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
        saveFocus: () => {
            this.previousFocus_ = document.activeElement;
        },
        restoreFocus: () => {
            if (this.previousFocus_) {
                this.previousFocus_.focus();
            }
        },
        isFocused: () => {
            if (this.refs.menuEl) {
                return document.activeElement === this.refs.menuEl;
            }
        },
        focus: () => {
            if (this.refs.menuEl) {
                this.refs.menuEl.focus();
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
            if (this.refs.menuEl) {
                return getComputedStyle(this.refs.menuEl).getPropertyValue('direction') === 'rtl';
            }
        },
        setTransformOrigin: origin => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.style[getTransformPropertyName(window) + '-origin'] = origin;
            }
        },
        setPosition: position => {
            this.refs.menuEl.style.left = 'left' in position ? position.left : null;
            this.refs.menuEl.style.right = 'right' in position ? position.right : null;
            this.refs.menuEl.style.top = 'top' in position ? position.top : null;
            this.refs.menuEl.style.bottom = 'bottom' in position ? position.bottom : null;
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
            if (this.refs.menuEl) {
                return this.refs.menuEl.style.setProperty(propertyName, value);
            }
        },
        setMenuElAttr: (attr, value) => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.setAttribute(attr, value);
            }
        },
        rmMenuElAttr: attr => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.removeAttribute(attr);
            }
        },
        getMenuElOffsetHeight: () => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.offsetHeight;
            }
        },

        setSelectedTextContent: selectedTextContent => {
            if (this.refs.selectedText) {
                return this.refs.selectedText.textContent = selectedTextContent;
            }
        },
        getWindowInnerHeight: () => (window.innerHeight),

        notifyChange: () => {
            if (this.props.onChange !== null) {
                return this.props.onChange(this);
            }
        },
        openMenu: focusIndex => {
            return this.foundationMenu.open({focusIndex: focusIndex});
        },
        isMenuOpen: () => {
            return this.foundationMenu.open();
        },

        getNumberOfOptions: () => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items.length;
            }
        },
        getTextForOptionAtIndex: index => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items[index].textContent;
            }
        },
        getValueForOptionAtIndex: index => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items[index].id || items[index].textContent;
            }
        },
        setAttrForOptionAtIndex: (index, attr, value) => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items[index].setAttribute(attr, value);
            }
        },
        rmAttrForOptionAtIndex: (index, attr) => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items[index].removeAttribute(attr);
            }
        },
        getOffsetTopForOptionAtIndex: index => {
            if (this.refs.items) {
                const items = [].slice.call(this.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items[index].offsetTop;
            }
        },
        registerMenuInteractionHandler: (type, handler) => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.addEventListener(type, handler);
            }
        },
        deregisterMenuInteractionHandler: (type, handler) => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.removeEventListener(type, handler);
            }
        },
    });


    render() {
        return (
            <div>
                <div
                    ref='root'
                    className={classnames('mdc-select', this.state.classNames)}
                    role="listbox"
                    tabIndex="0"
                >
                    <span
                        ref='selectedText'
                        className="mdc-select__selected-text">Pick a food group</span>
                    <div
                        ref='menuEl'
                        className={classnames('mdc-simple-menu mdc-select__menu', this.state.classNamesMenuEl)}
                        >
                        <ul
                            ref='items'
                            className="mdc-list mdc-simple-menu__items">
                            <li className="mdc-list-item" role="option" id="grains" tabIndex="0">
                                Bread, Cereal, Rice, and Pasta
                            </li>
                            <li className="mdc-list-item" role="option" id="vegetables" tabIndex="0">
                                Vegetables
                            </li>
                            <li className="mdc-list-item" role="option" id="fruit" tabIndex="0">
                                Fruit
                            </li>
                            <li className="mdc-list-item" role="option" id="dairy" tabIndex="0">
                                Milk, Yogurt, and Cheese
                            </li>
                            <li className="mdc-list-item" role="option" id="meat" tabIndex="0">
                                Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                            </li>
                            <li className="mdc-list-item" role="option" id="fats" tabIndex="0">
                                Fats, Oils, and Sweets
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.foundationMenu);
        this.foundationMenu.init();
        this.foundation.init();
    }

    componentWillUnmount() {

        this.foundationMenu.destroy();
        this.foundation.destroy();
    }

    componentWillReceiveProps(props) {

    }
}
