/**
 * Created by ruslan on 30.03.17.
 */
import React, {Component, PropTypes} from 'react';
import '@material/select/dist/mdc.select.min.css';
import {select as test}  from 'material-components-web/dist/material-components-web';
const {MDCSelectFoundation} = test;
import classnames from 'classnames';

export default function (props) {
    return (
        <TestSelect />
    )
}


class TestSelect extends Component {
    static propTypes = {
        id: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        disabled: false,
    }

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
        setAttr: (attr, value) => this.setState(({attrRoot}) => ({
            attrRoot: {
                attr: value
        },
        })),
        rmAttr: (attr, value) => this.setState(({attrRoot}) => ({
            attrRoot: () => {
                delete attrRoot[attr];
                return attrRoot
            }
        })),

        registerInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.addEventListener(type, handler)
            }
        },
        deregisterInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(type, handler)
            }
        },
        focus: () => {
            if (this.refs.root) {
                this.refs.root.focus()
            }
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
        /*return {

         setAttr: function setAttr() /!* attr: string, value: string *!/{},
         rmAttr: function rmAttr() /!* attr: string *!/{},
         computeBoundingRect: function computeBoundingRect() {
         return (/!* {left: number, top: number} *!/{ left: 0, top: 0 }
         );
         },
         focus: function focus() {},
         makeTabbable: function makeTabbable() {},
         makeUntabbable: function makeUntabbable() {},
         getComputedStyleValue: function getComputedStyleValue() {
         return (/!* propertyName: string *!/ /!* string *!/''
         );
         },
         setStyle: function setStyle() /!* propertyName: string, value: string *!/{},
         create2dRenderingContext: function create2dRenderingContext() {
         return (/!* {font: string, measureText: (string) => {width: number}} *!/{
         font: '',
         measureText: function measureText() {
         return { width: 0 };
         }
         }
         );
         },
         setMenuElStyle: function setMenuElStyle() /!* propertyName: string, value: string *!/{},
         setMenuElAttr: function setMenuElAttr() /!* attr: string, value: string *!/{},
         rmMenuElAttr: function rmMenuElAttr() /!* attr: string *!/{},
         getMenuElOffsetHeight: function getMenuElOffsetHeight() {
         return (/!* number *!/0
         );
         },
         openMenu: function openMenu() /!* focusIndex: number *!/{},
         isMenuOpen: function isMenuOpen() {
         return (/!* boolean *!/false
         );
         },
         setSelectedTextContent: function setSelectedTextContent() /!* textContent: string *!/{},
         getNumberOfOptions: function getNumberOfOptions() {
         return (/!* number *!/0
         );
         },
         getTextForOptionAtIndex: function getTextForOptionAtIndex() {
         return (/!* index: number *!/ /!* string *!/''
         );
         },
         getValueForOptionAtIndex: function getValueForOptionAtIndex() {
         return (/!* index: number *!/ /!* string *!/''
         );
         },
         setAttrForOptionAtIndex: function setAttrForOptionAtIndex() /!* index: number, attr: string, value: string *!/{},
         rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() /!* index: number, attr: string *!/{},
         getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
         return (/!* index: number *!/ /!* number *!/0
         );
         },
         registerMenuInteractionHandler: function registerMenuInteractionHandler() /!* type: string, handler: EventListener *!/{},
         deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() /!* type: string, handler: EventListener *!/{},
         notifyChange: function notifyChange() {},
         getWindowInnerHeight: function getWindowInnerHeight() {
         return (/!* number *!/0
         );
         }
         };*/
    });


    render() {
        console.log(test, MDCSelectFoundation);
        return (
            <div>
                <div
                    ref='root'
                    className={classnames('mdc-select', this.state.classNames)}
                    role="listbox"
                    tabIndex="0"
                    {...this.state.attrRoot}
                >
                    <span className="mdc-select__selected-text">Pick a food group</span>
                    <div className="mdc-simple-menu mdc-select__menu">
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
