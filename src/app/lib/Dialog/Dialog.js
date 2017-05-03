/**
 * Created by ruslan on 29.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {dialog}  from 'material-components-web/dist/material-components-web';
const {util, MDCDialogFoundation} = dialog;
const {createFocusTrapInstance} = util;
const {
    cssClasses: {
        OPEN: OPEN_CLASS_NAME,
    },
} = MDCDialogFoundation;

export default class Dialog extends PureComponent {
    static defaultProps = {
        open: false,
    };
    state = {
        classNames: [],
        open: false,
    };

    foundation = new MDCDialogFoundation({
        addClass: className => {
            this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
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
            this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            }));
            // MDCDialog does not provide opening/closing event.
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
        setStyle: (prop, val) => {
            if (this.refs.root) {
                this.refs.root.style.setProperty(prop, val);
            }
        },
        addBodyClass: className => (document.body.classList.add(className)),
        removeBodyClass: className => (document.body.classList.remove(className)),
        registerInteractionHandler: (evt, handler) => {
            if (this.refs.root) {
                this.refs.root.addEventListener(evt, handler);
            }
        },
        deregisterInteractionHandler: (evt, handler) => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(evt, handler);
            }
        },
        registerSurfaceInteractionHandler: (evt, handler) => {
            if (this.child.refs.dialogSurface) {
                this.child.refs.dialogSurface.addEventListener(evt, handler);
            }
        },
        deregisterSurfaceInteractionHandler: (evt, handler) => {
            if (this.child.refs.dialogSurface) {
                this.child.refs.dialogSurface.removeEventListener(evt, handler);
            }
        },
        registerDocumentKeydownHandler: handler => (document.addEventListener('keydown', handler)),
        deregisterDocumentKeydownHandler: handler => (document.removeEventListener('keydown', handler)),
        trapFocusOnSurface: () => {
            if (this.child.refs.dialogSurface || this.child.child.child.refs.acceptSelector.refs.root) {
                const focusTrap_ = createFocusTrapInstance(this.child.refs.dialogSurface, this.child.child.child.refs.acceptSelector.refs.root);
                focusTrap_.activate();
            }
        },
        untrapFocusOnSurface: () => {
            if (this.child.refs.dialogSurface || this.child.child.child.refs.acceptSelector.refs.root) {
                const focusTrap_ = createFocusTrapInstance(this.child.refs.dialogSurface, this.child.child.child.refs.acceptSelector.refs.root);
                focusTrap_.deactivate();
            }
        },
        eventTargetHasClass: (target, className) => (target.classList.contains(className)),
        notifyAccept: () => {
            if (this.props.onAccept !== null) {
                this.props.onAccept(this);
            }
        },
        notifyCancel: () => {
            if (this.props.onCancel !== null) {
                this.props.onCancel(this);
            }
        },
    });

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onAccept;
        delete ownProps.onCancel;
        delete ownProps.onClose;
        delete ownProps.onOpen;
        delete ownProps.open;
        const {
            className,
            elementType,
            ...otherProp
        } = ownProps;
        const childElement = child => {
            if (child.type.name === 'Surface') {
                return React.cloneElement(child, {
                    onRef: (ref) => (this.child = ref)
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(this.props.children, childElement);
        const ElementType = elementType || 'aside';
        return (
            <ElementType
                ref="root"
                style={{'visibility': 'hidden'}}
                className={classnames('mdc-dialog', this.state.classNames, className)}
                {...otherProp}
            >
                {renderChildren}
                <div className="mdc-dialog__backdrop"/>
            </ElementType>
        );
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
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
}
/*
* Note:
* this.Surface.Footer.FooterButton => this.child.child.child
* */