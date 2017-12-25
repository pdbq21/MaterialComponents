/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {drawer} from 'material-components-web/dist/material-components-web';

const {util, MDCPersistentDrawerFoundation} = drawer;
const {
  // Determine whether the current browser supports passive event listeners, and if so, use them.
  applyPassive,
  // Choose the correct transform property to use on the current browser.
  getTransformPropertyName,
  restoreElementTabState,
  // Remap touch events to pointer events, if the browser doesn't support touch events.
  remapEvent,
  // Save the tab state for an element.
  saveElementTabState
} = util;
const {
  cssClasses: {
    OPEN: OPEN_CLASS_NAME,
  }
} = MDCPersistentDrawerFoundation;

export default class Persistent extends PureComponent {
  static defaultProps = {
    open: false,
  };
  state = {
    classNameDrawer: [],
    open: false
  };
  drawer_ = () => (this.refs.root.querySelector('.mdc-persistent-drawer__drawer'));

  foundation = new MDCPersistentDrawerFoundation({
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
      const drawer = this.drawer_();
      return Boolean(drawer)
    },
    registerInteractionHandler: (evtType, handler) => {
      this.refs.root.addEventListener(remapEvent(evtType), handler, applyPassive());
    },
    deregisterInteractionHandler: (evtType, handler) => {
      this.refs.root.removeEventListener(remapEvent(evtType), handler, applyPassive());
    },
    registerDrawerInteractionHandler: (evtType, handler) => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.addEventListener(remapEvent(evtType), handler, {passive: true});
      }
    },
    deregisterDrawerInteractionHandler: (evtType, handler) => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.removeEventListener(remapEvent(evtType), handler);
      }
    },
    registerTransitionEndHandler: handler => {
      this.refs.root.addEventListener('transitionend', handler, {passive: true});
    },
    deregisterTransitionEndHandler: handler => {
      this.refs.root.removeEventListener('transitionend', handler);
    },
    registerDocumentKeydownHandler: handler => {
      document.addEventListener('keydown', handler, {passive: true});
    },
    deregisterDocumentKeydownHandler: handler => {
      document.removeEventListener('keydown', handler);
    },
    getDrawerWidth: () => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.offsetWidth;
      }
    },
    setTranslateX: value => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.style.setProperty(getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
      }
    },
    getFocusableElements: () => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.querySelectorAll(
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
    isRtl: () => getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl',
    isDrawer: el => {
      const drawer = this.drawer_();
      return el === drawer;
    },
    notifyOpen: () => {
      if (typeof this.props.onOpen !== 'undefined') {
        this.props.onOpen(this);
      }
    },
    notifyClose: () => {
      if (typeof this.props.onClose !== "undefined") {
        this.props.onClose(this);
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

    const ElementType = elementType || 'aside';
    const classes = classnames('mdc-persistent-drawer', this.state.classNameDrawer, className);
    return (
      <ElementType
        ref='root'
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}