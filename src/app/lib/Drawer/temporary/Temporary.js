/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {drawer}  from 'material-components-web/dist/material-components-web';
const {util, MDCTemporaryDrawerFoundation} = drawer;
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

export default class Temporary extends PureComponent {
    static defaultProps = {
        open: false,
    };
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
                if (this.props.onOpen) {
                    this.props.onOpen(this);
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
                if (this.props.onClose) {
                    this.props.onClose(this);
                }
            }
        },
        hasClass: className => (this.refs.root.classList.contains(className)),

        hasNecessaryDom: () => {
            if (this.child){
                return Boolean(this.child.refs.drawer);
            }
        },

        registerInteractionHandler: (evtType, handler) => {
            this.refs.root.addEventListener(remapEvent(evtType), handler, applyPassive());
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.root.removeEventListener(remapEvent(evtType), handler, applyPassive());
        },
        registerDrawerInteractionHandler: (evtType, handler) => {
            this.child.refs.drawer.addEventListener(remapEvent(evtType), handler);
        },
        deregisterDrawerInteractionHandler: (evtType, handler) => {
            this.child.refs.drawer.removeEventListener(remapEvent(evtType), handler);
        },
        registerTransitionEndHandler: handler => {
            this.child.refs.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: handler => {
            this.child.refs.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: handler => {
            document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: handler => {
            document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: () => {
            if (this.child.refs.drawer) {
                return this.child.refs.drawer.offsetWidth;
            }
        },
        setTranslateX: value => {
            if (this.child.refs.drawer) {
                return this.child.refs.drawer.style.setProperty(getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
            }
        },
        updateCssVariable: value => {
            if (supportsCssCustomProperties()) {
                this.refs.root.style.setProperty('--mdc-temporary-drawer-opacity', value);
            }
        },

        getFocusableElements: () => {
            if (this.child.refs.drawer) {
                return this.child.refs.drawer.querySelectorAll(
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
            return el === this.child.refs.drawer;
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
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onOpen;
        delete ownProps.onClose;
        const {
            className,
            children,
            elementType,
            ...otherProp
        } = ownProps;

        const childElement = child => {
            if (child.type.name === 'Drawer') {
                return React.cloneElement(child, {
                    onRef: (ref) => (this.child = ref)
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);
        const ElementType = elementType || 'aside';
        return (
            <ElementType
                ref='root'
                className={classnames('mdc-temporary-drawer', this.state.classNameDrawer, className)}
                {...otherProp}
            >
                {renderChildren}
            </ElementType>
        );
    }
}