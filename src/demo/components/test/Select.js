/**
 * Created by ruslan on 30.03.17.
 */
import React, {Component} from 'react';
import '@material/select/dist/mdc.select.min.css';
import {select}  from 'material-components-web/dist/material-components-web';
const {MDCSelectFoundation} = select;
import classnames from 'classnames';


export default class TestSelect extends Component {

    state = {
        classNames: [],
        attrRoot: {}
    }


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

        registerMenuInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.addEventListener(type, handler)
            }
        },
        deregisterMenuInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(type, handler)
            }
        },
        setMenuElStyle: (propertyName, value) => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.style.setProperty(propertyName, value);
            }
        },
        setMenuElAttr: (attr, value) => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.style.setAttribute(attr, value);
            }
        },
        rmMenuElAttr: attr => {
            if (this.refs.menuEl) {
                return this.refs.menuEl.style.removeAttribute(attr);
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
        getWindowInnerHeight: () => window.innerHeight,
        getNumberOfOptions: () => {
            if (this.options){
                return this.options.length;
            }
        },
        getTextForOptionAtIndex: index => {
            if (this.options){
                return this.options[index].textContent
            }
        },
        getValueForOptionAtIndex: index => (
            this.options[index].id || this.options[index].textContent
        ),
        setAttrForOptionAtIndex: (index, attr, value) => (
            this.options[index].setAttribute(attr, value)
        ),
        rmAttrForOptionAtIndex: (index, attr) => (
            this.options[index].removeAttribute(attr)
        ),
        getOffsetTopForOptionAtIndex: index => (
            this.options[index].offsetTop
        ),
        /* todo below */




        openMenu: function openMenu(focusIndex) {
            return _this2.menu_.show({ focusIndex: focusIndex });
        },
        isMenuOpen: function isMenuOpen() {
            return _this2.menu_.open;
        },



        getValueForOptionAtIndex: function getValueForOptionAtIndex(index) {
            return _this2.options[index].id || _this2.options[index].textContent;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
            return _this2.options[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
            return _this2.options[index].removeAttribute(attr);
        },
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
            return _this2.options[index].offsetTop;
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
            return _this2.menu_.listen(type, handler);
        },
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
            return _this2.menu_.unlisten(type, handler);
        },
        notifyChange: function notifyChange() {
            return _this2.emit('MDCSelect:change', _this2);
        },
        getWindowInnerHeight: function getWindowInnerHeight() {
            return window.innerHeight;
        }

    });


    render() {
        console.log(MDCSelectFoundation);
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
                        ref='menu'
                        className="mdc-simple-menu mdc-select__menu">
                        <ul className="mdc-list mdc-simple-menu__items">
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
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentWillReceiveProps(props) {

    }
}
