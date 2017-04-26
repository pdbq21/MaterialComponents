/**
 * Created by ruslan on 11.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/dialog/dist/mdc.dialog.min.css';
import {dialog}  from 'material-components-web/dist/material-components-web';
const {util, MDCDialog, MDCDialogFoundation} = dialog;
const {createFocusTrapInstance} = util;

export default class DialogTest extends Component {
    state = {
        classNames: []
    };

    foundation = new MDCDialogFoundation({
        addClass: className => this.setState(({classNames}) => ({
            classNames: classNames.concat([className])
        })),
        removeClass: className => this.setState(({classNames}) => ({
            classNames: classNames.filter(cn => cn !== className)
        })),
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

        //todo below

        /* notifyAccept: function notifyAccept() {
         return _this2.emit('MDCDialog:accept');
         },
         notifyCancel: function notifyCancel() {
         return _this2.emit('MDCDialog:cancel');
         },*/
    });

    componentDidMount() {
        console.log(this.foundation);
        this.foundation.init();

    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            // todo: this working if function attr is selector
            //let dialog = new MDCDialog(document.querySelector('#mdc-dialog-default'));
            //dialog.show();
            this.foundation.open();
        }
    }

    render() {
        return (
            <aside
                ref={(root) => {
                    this.root = root
                }}
                id="mdc-dialog-default"
                style={{'visibility': 'hidden'}}
                className={classnames('mdc-dialog', this.state.classNames)}
                role="alertdialog"
                aria-labelledby="my-mdc-dialog-label"
                aria-describedby="my-mdc-dialog-description">
                <div
                    ref={(dialogSurface) => {
                        this.dialogSurface = dialogSurface
                    }}
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
                            ref={(acceptSelector) => {
                                this.acceptSelector = acceptSelector
                            }}
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
