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
    dialogSurface_ = () => (this.refs.root.querySelector('.mdc-dialog__surface'));
    acceptSelector_ = () => (this.refs.root.querySelector(
        '.mdc-dialog__footer__button.mdc-dialog__footer__button--accept'
    ));

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
            const dialogSurface = this.dialogSurface_();
            if (dialogSurface) {
                return dialogSurface.addEventListener(evt, handler);
            }
        },
        deregisterSurfaceInteractionHandler: (evt, handler) => {
            const dialogSurface = this.dialogSurface_();
            if (dialogSurface) {
                return dialogSurface.removeEventListener(evt, handler);
            }
        },
        registerDocumentKeydownHandler: handler => (document.addEventListener('keydown', handler)),
        deregisterDocumentKeydownHandler: handler => (document.removeEventListener('keydown', handler)),
        trapFocusOnSurface: () => {
            const dialogSurface = this.dialogSurface_();
            const acceptSelector = this.acceptSelector_();
            if (dialogSurface || acceptSelector) {
                const focusTrap_ = createFocusTrapInstance(dialogSurface, acceptSelector);
                focusTrap_.activate();
            }
        },
        untrapFocusOnSurface: () => {
            const dialogSurface = this.dialogSurface_();
            const acceptSelector = this.acceptSelector_();
            if (dialogSurface || acceptSelector) {
                const focusTrap_ = createFocusTrapInstance(dialogSurface, acceptSelector);
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
            children,
            ...otherProp
        } = ownProps;

        const ElementType = elementType || 'aside';
        return (
            <ElementType
                ref="root"
                style={{'visibility': 'hidden'}}
                className={classnames('mdc-dialog', this.state.classNames, className)}
                {...otherProp}
            >
                {children}
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
