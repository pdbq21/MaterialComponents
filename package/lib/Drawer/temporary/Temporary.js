/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {drawer} from 'material-components-web/dist/material-components-web';

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
  },
  strings: {
    DRAWER_SELECTOR: DRAWER_SELECTOR_NAME,
    OPACITY_VAR_NAME: OPACITY_VAR_NAME_NAME,
    FOCUSABLE_ELEMENTS: FOCUSABLE_ELEMENTS_NAME
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

  drawer_ = () => this.refs.root.querySelector(DRAWER_SELECTOR_NAME);

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
      const drawer = this.drawer_();
      return Boolean(drawer);
    },
    registerInteractionHandler: (evtType, handler) => {
      return this.refs.root.addEventListener(remapEvent(evtType), handler, applyPassive());
    },
    deregisterInteractionHandler: (evtType, handler) => {
      return this.refs.root.removeEventListener(remapEvent(evtType), handler, applyPassive());
    },
    registerDrawerInteractionHandler: (evtType, handler) => {
      const drawer = this.drawer_();
      // todo: evtType !== 'click' make selectively
      if (drawer && evtType !== 'click') {
        return drawer.addEventListener(remapEvent(evtType), handler, {passive: true});
      }
    },
    deregisterDrawerInteractionHandler: (evtType, handler) => {
      const drawer = this.drawer_();
      if (drawer && evtType !== 'click') {
        return drawer.removeEventListener(remapEvent(evtType), handler);
      }
    },
    registerTransitionEndHandler: handler => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.addEventListener('transitionend', handler, {passive: true});
      }
    },
    deregisterTransitionEndHandler: handler => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.removeEventListener('transitionend', handler);
      }
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
    updateCssVariable: value => {
      if (supportsCssCustomProperties()) {
        this.refs.root.style.setProperty(OPACITY_VAR_NAME_NAME, value);
      }
    },
    getFocusableElements: () => {
      const drawer = this.drawer_();
      if (drawer) {
        return drawer.querySelectorAll(FOCUSABLE_ELEMENTS_NAME);
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
    notifyOpen: () => {
      if (this.props.onOpen !== null) {
        this.props.onOpen(this);
      }
    },
    notifyClose: () => {
      if (this.props.onClose !== null) {
        this.props.onClose(this);
      }
    },
    isRtl: () => (getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl'),
    isDrawer: el => {
      const drawer = this.drawer_();
      return el === drawer;
    },

    addBodyClass: (className) => document.body.classList.add(className),
    removeBodyClass: (className) => document.body.classList.remove(className),
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
    return (
      <ElementType
        ref='root'
        className={classnames('mdc-temporary-drawer', this.state.classNameDrawer, className)}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}