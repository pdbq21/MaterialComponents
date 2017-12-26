/**
 * Created by ruslan on 27.06.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import {tabs, ripple}  from 'material-components-web/dist/material-components-web';
const {MDCTabFoundation} = tabs;
const {MDCRippleFoundation} = ripple;

const {
  strings: {
    SELECTED_EVENT: SELECTED_EVENT_NAME,
  }
} = MDCTabFoundation;

let supportsPassive_;

function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {
        get passive() {
          isSupported = true;
        }
      });
    } catch (e) {
    }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}
function supportsCssVariables(windowObj) {
  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}
const MATCHES = getMatchesProperty(HTMLElement.prototype);
export default class Tab extends Component {
  state = {
    classNames: [],
    classNamesRipple: [],
  };
  emit = (root, evtType, evtData, shouldBubble = false) => {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }
    root.dispatchEvent(evt);
  };

  foundation = new MDCTabFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),

    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
    registerInteractionHandler: (type, handler) => {
      if (this.refs.root) {
        return this.refs.root.addEventListener(type, handler)
      }
    },
    deregisterInteractionHandler: (type, handler) => {
      if (this.refs.root) {
        return this.refs.root.removeEventListener(type, handler)
      }
    },
    getOffsetWidth: () => {
      if (this.refs.root) {
        return this.refs.root.offsetWidth
      }
    },
    getOffsetLeft: () => {
      if (this.refs.root) {
        return this.refs.root.offsetLeft
      }
    },
    notifySelected: () => {
      if (this.refs.root){
        if (typeof this.props.onSelected !== 'undefined') {
          this.props.onSelected({tab: this});
        }
        return this.emit(this.refs.root, SELECTED_EVENT_NAME, {tab: this}, true);
      }
    },
  });

  foundationRipple = new MDCRippleFoundation({
    isUnbounded: () => false,
    browserSupportsCssVars: () => {
      return supportsCssVariables(window);
    },
    isSurfaceActive: () => {
      if (this.refs.root) {
        return this.refs.root[MATCHES](':active')
      }
    },
    addClass: className => {
      this.setState(({classNamesRipple}) => ({
        classNamesRipple: classNamesRipple.concat([className])
      }))
    },
    removeClass: className => {
      if (this.refs.root) {
        this.setState(({classNamesRipple}) => ({
          classNamesRipple: classNamesRipple.filter(cn => cn !== className)
        }))
      }
    },
    registerInteractionHandler: (evtType, handler) => {
      if (this.refs.root) {
        return this.refs.root.addEventListener(evtType, handler, applyPassive());
      }
    },
    deregisterInteractionHandler: (evtType, handler) => {
      if (this.refs.root) {
        return this.refs.root.removeEventListener(evtType, handler, applyPassive());
      }
    },
    registerResizeHandler: handler => {
      window.addEventListener('resize', handler);
    },
    deregisterResizeHandler: handler => {
      window.removeEventListener('resize', handler);
    },
    updateCssVariable: (varName, value) => {
      if (this.refs.root) {
        return this.refs.root.style.setProperty(varName, value);
      }
    },
    computeBoundingRect: () => {
      if (this.refs.root) {
        return this.refs.root.getBoundingClientRect()
      }
    },

    getWindowPageOffset: () => {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    },

    /*
     Whether or not the ripple is attached to a disabled component. If true, the ripple will not activate.
     isSurfaceDisabled: () => {disabled},

     */
  });

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.foundation.init();
      if (this.props.ripple) {
        this.foundationRipple.init();
      }
    }
  }

  componentWillUnmount() {
    if (!this.props.cssOnly) {
      if (this.props.ripple) {
        this.foundationRipple.destroy();
      }
      this.foundation.destroy();
    }
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.onSelected;
    delete ownProps.ripple;
    delete ownProps.cssOnly;
    const {
      elementType,
      className,
      active,
      iconText,
      children,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'a';
    const classes = classnames('mdc-tab', {
      'mdc-tab--active': active,
      'mdc-tab--with-icon-and-text': iconText,
    }, this.state.classNames, this.state.classNamesRipple, className);

    return (
      <ElementType
        ref="root"
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}