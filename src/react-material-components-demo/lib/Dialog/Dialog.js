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
  strings: {
    DIALOG_SURFACE_SELECTOR: DIALOG_SURFACE_SELECTOR_CLASSNAME,
    ACCEPT_SELECTOR: ACCEPT_SELECTOR_CLASSNAME
  }
} = MDCDialogFoundation;

export default class Dialog extends PureComponent {
  static defaultProps = {
    open: false,
  };
  state = {
    classNames: [],
    open: false,
  };
  dialogSurface_ = () => (this.refs.root.querySelector(DIALOG_SURFACE_SELECTOR_CLASSNAME));
  acceptSelector_ = () => (this.refs.root.querySelector(
    ACCEPT_SELECTOR_CLASSNAME
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
    /* setStyle: (prop, val) => {
     if (this.refs.root) {
     this.refs.root.style.setProperty(prop, val);
     }
     },*/
    addBodyClass: className => document.body.classList.add(className),
    removeBodyClass: className => document.body.classList.remove(className),
    registerInteractionHandler: (evt, handler) => {
      if (this.refs.root) {
        this.refs.root.addEventListener(evt, handler, {passive: true});
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
        return dialogSurface.addEventListener(evt, handler, {passive: true});
      }
    },
    deregisterSurfaceInteractionHandler: (evt, handler) => {
      const dialogSurface = this.dialogSurface_();
      if (dialogSurface) {
        return dialogSurface.removeEventListener(evt, handler);
      }
    },
    registerDocumentKeydownHandler: handler => document.addEventListener('keydown', handler, {passive: true}),
    deregisterDocumentKeydownHandler: handler => document.removeEventListener('keydown', handler),
    registerTransitionEndHandler: (handler) => {
      const dialogSurface = this.dialogSurface_();
      if (dialogSurface) {
        return dialogSurface.addEventListener('transitionend', handler, {passive: true});
      }
    },
    deregisterTransitionEndHandler: (handler) => {
      const dialogSurface = this.dialogSurface_();
      if (dialogSurface) {
        return dialogSurface.removeEventListener('transitionend', handler);
      }
    },
    trapFocusOnSurface: () => {
      const dialogSurface = this.dialogSurface_();
      const acceptSelector = this.acceptSelector_();
      if (dialogSurface || acceptSelector) {
        const focusTrap = createFocusTrapInstance(dialogSurface, acceptSelector);
        focusTrap.activate();
      }
    },
    untrapFocusOnSurface: () => {
      const dialogSurface = this.dialogSurface_();
      const acceptSelector = this.acceptSelector_();
      if (dialogSurface || acceptSelector) {
        const focusTrap = createFocusTrapInstance(dialogSurface, acceptSelector);
        focusTrap.deactivate();
      }
    },
    eventTargetHasClass: (target, className) => target.classList.contains(className),
    notifyAccept: () => {
      if (typeof this.props.onAccept !== 'undefined') {
        this.props.onAccept(this);
      }
    },
    notifyCancel: () => {
      if (typeof this.props.onCancel !== 'undefined') {
        this.props.onCancel(this);
      }
    },
    isDialog: (el) => {
      const dialogSurface = this.dialogSurface_();
      if (dialogSurface) {
        return el === dialogSurface
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
      fullPage,
      ...otherProp
    } = ownProps;

    const ElementType = elementType || 'aside';
    const classes = classnames('mdc-dialog', {
      'rmd-dialog--full-page': fullPage
    },this.state.classNames, className);
    return (
      <ElementType
        ref="root"
        className={classes}
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
