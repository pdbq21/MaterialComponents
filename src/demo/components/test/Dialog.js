/**
 * Created by ruslan on 11.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/dialog/dist/mdc.dialog.min.css';
import {dialog}  from 'material-components-web/dist/material-components-web';
const {util, MDCDialogFoundation} = dialog;
const {createFocusTrapInstance} = util;
const {
    cssClasses: {
        OPEN: OPEN_CLASS_NAME,
    },
} = MDCDialogFoundation;

export default class DialogTest extends Component {

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
            if (this.refs.dialogSurface) {
                this.refs.dialogSurface.addEventListener(evt, handler);
            }
        },
        deregisterSurfaceInteractionHandler: (evt, handler) => {
            if (this.refs.dialogSurface) {
                this.refs.dialogSurface.removeEventListener(evt, handler);
            }
        },
        registerDocumentKeydownHandler: handler => (document.addEventListener('keydown', handler)),
        deregisterDocumentKeydownHandler: handler => (document.removeEventListener('keydown', handler)),
        trapFocusOnSurface: () => {
            if (this.refs.dialogSurface || this.refs.acceptSelector) {
                const focusTrap_ = createFocusTrapInstance(this.refs.dialogSurface, this.refs.acceptSelector);
                focusTrap_.activate();
            }
        },
        untrapFocusOnSurface: () => {
            if (this.refs.dialogSurface || this.refs.acceptSelector) {
                const focusTrap_ = createFocusTrapInstance(this.refs.dialogSurface, this.refs.acceptSelector);
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

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentWillReceiveProps(props) {
        console.log(this.foundation);
        if (props.open !== this.state.open) {
            if (props.open) {
                this.foundation.open();
            } else {
                this.foundation.close();
            }
        }
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <aside
                ref='root'
                style={{'visibility': 'hidden'}}
                className={classnames('mdc-dialog', this.state.classNames)}
                role="alertdialog"
                aria-labelledby="my-mdc-dialog-label"
                aria-describedby="my-mdc-dialog-description">
                <div
                    ref='dialogSurface'
                    className="mdc-dialog__surface">
                    <header className="mdc-dialog__header">
                        <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
                            Use Google's location service?
                        </h2>
                    </header>
                    <section id="my-mdc-dialog-description" className="mdc-dialog__body">
                        Let Google help apps determine location. This means sending anonymous location data to Google,
                        even when no apps are running.
                    </section>
                    <footer className="mdc-dialog__footer">
                        <button type="button"
                                className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">
                            Decline
                        </button>
                        <button
                            ref='acceptSelector'
                            type="button"
                            className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">
                            Accept
                        </button>
                    </footer>
                </div>
                <div className="mdc-dialog__backdrop"/>
            </aside>

        );
    }
}
