/**
 * Created by ruslan on 16.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
export default class Menu extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
        };
    }

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
        hasNecessaryDom: () => {
            return Boolean(this.child.refs.items);
        },
        getInnerDimensions: () => {
            return {
                width: this.child.refs.items.offsetWidth,
                height: this.child.refs.items.offsetHeight
            };
        },
        hasAnchor: () => {
            if (this.refs.root) {
                return this.refs.root.parentElement && this.refs.root.parentElement.classList.contains('mdc-menu-anchor');
            }
        },
        getAnchorDimensions: () => {
            if (this.refs.root) {
                return this.refs.root.parentElement.getBoundingClientRect();
            }
        },
        getWindowDimensions: () => {
            return {width: window.innerWidth, height: window.innerHeight};
        },
        setScale: (x, y) => {
            if (this.refs.root) {
                this.refs.root.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
            }
        },
        setInnerScale: (x, y) => {
            if (this.child.refs.items) {
                this.child.refs.items.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
            }
        },
        getNumberOfItems: () => {
            if (this.child.refs.items) {
                const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items.length;
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
        getYParamsForItemAtIndex: index => {
            if (this.child.refs.items) {
                const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return {
                    top: items[index].offsetTop,
                    height: items[index].offsetHeight
                };
            }
        },
        setTransitionDelayForItemAtIndex: (index, value) => {
            if (this.child.refs.items) {
                const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items[index].style.setProperty('transition-delay', value);
            }
        },
        getIndexForEventTarget: target => {
            if (this.child.refs.items) {
                const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items.indexOf(target);
            }
        },
        notifySelected: evtData => {
            if (this.props.onSelected !== null) {
                const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
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
            if (this.refs.root) {
                return document.activeElement === this.refs.root;
            }
        },
        focus: () => {
            if (this.refs.root) {
                this.refs.root.focus();
            }
        },
        getFocusedItemIndex: () => {
            if (this.child.refs.items) {
                const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items.indexOf(document.activeElement);
            }
        },
        focusItemAtIndex: index => {
            if (this.child.refs.items) {
                const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
                return items[index].focus();
            }
        },
        isRtl: () => {
            if (this.refs.root) {
                return getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl';
            }
        },
        setTransformOrigin: origin => {
            if (this.refs.root) {
                return this.refs.root.style[getTransformPropertyName(window) + '-origin'] = origin;
            }
        },
        setPosition: position => {
            this.refs.root.style.left = 'left' in position ? position.left : null;
            this.refs.root.style.right = 'right' in position ? position.right : null;
            this.refs.root.style.top = 'top' in position ? position.top : null;
            this.refs.root.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        getAccurateTime: () => window.performance.now(),
    });

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
        const ownProps = Object.assign({}, this.props);
        delete ownProps.open;
        delete ownProps.onSelected;
        delete ownProps.onCancel;
        const {
            elementType,
            className,
            children,
            tabIndex,
            ...otherProp
        } = ownProps;
        const ElementType = elementType || 'div';
        const classes = classnames('mdc-simple-menu', this.state.classNames, className);

        const childElement = child => {
            if (child.type.name === 'Items') {
                return React.cloneElement(child, {
                    onRef: (ref) => (this.child = ref)
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);
        return (
            <ElementType
                ref='root'
                className={classes}
                tabIndex={tabIndex || "-1"}
                {...otherProp}
            >
                {renderChildren}
            </ElementType>
        );
    }
}