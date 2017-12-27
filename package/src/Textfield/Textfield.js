/**
 * Created by ruslan on 20.03.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {textField, ripple} from 'material-components-web/dist/material-components-web';

const {
  MDCTextFieldFoundation,
} = textField;
const {MDCRippleFoundation} = ripple;
const {
  strings: {
    INPUT_SELECTOR: INPUT_SELECTOR_NAME,
    LABEL_SELECTOR: LABEL_SELECTOR_NAME,
    ICON_SELECTOR: ICON_SELECTOR_NAME,
    BOTTOM_LINE_SELECTOR: BOTTOM_LINE_SELECTOR_NAME,
    //IDLE_OUTLINE_SELECTOR: IDLE_OUTLINE_SELECTOR_NAME
  },
} = MDCTextFieldFoundation;
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

export default class Textfield extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    upgraded: PropTypes.bool,
    multiline: PropTypes.bool,
    fullwidth: PropTypes.bool,
    dense: PropTypes.bool,
  };

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

  rootInput_ = () => this.refs.root.querySelector(INPUT_SELECTOR_NAME);
  rootLabel_ = () => this.refs.root.querySelector(LABEL_SELECTOR_NAME);

  icon_ = () => this.refs.root.querySelector(ICON_SELECTOR_NAME);
  bottomLine_ = () => this.refs.root.querySelector(BOTTOM_LINE_SELECTOR_NAME);

  foundation = new MDCTextFieldFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
    registerTextFieldInteractionHandler: (evtType, handler) => {
      if (!!this.refs.root) {
        this.refs.root.addEventListener(evtType, handler);
      }
    },
    deregisterTextFieldInteractionHandler: (evtType, handler) => {
      if (!!this.refs.root) {
        this.refs.root.removeEventListener(evtType, handler);
      }
    },
    // input
    getNativeInput: () => {
      const rootInput = this.rootInput_();
      if (!!rootInput) {
        return rootInput;
      }
    },
    registerInputInteractionHandler: (evtType, handler) => {
      const rootInput = this.rootInput_();
      if (!!rootInput) {
        return rootInput.addEventListener(evtType, handler);
      }
    },
    deregisterInputInteractionHandler: (evtType, handler) => {
      const rootInput = this.rootInput_();
      if (!!rootInput) {
        return rootInput.removeEventListener(evtType, handler);
      }
    },
    // bottom line
    registerBottomLineEventHandler: (evtType, handler) => {
      const bottomLine = this.bottomLine_();
      if (!!bottomLine) {
        bottomLine.addEventListener(evtType, handler, {passive: true});
      }
    },
    deregisterBottomLineEventHandler: (evtType, handler) => {
      const bottomLine = this.bottomLine_();
      if (bottomLine) {
        bottomLine.removeEventListener(evtType, handler);
      }
    },
    /*getIdleOutlineStyleValue: (propertyName) => {
      const idleOutlineElement = this.refs.root.querySelector(IDLE_OUTLINE_SELECTOR_NAME);
      if (idleOutlineElement) {
        return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
      }
    },
    isFocused: () => {
      if (!!this.refs.root) {
        return document.activeElement === this.refs.root.querySelector(INPUT_SELECTOR_NAME);
      }
    },
    isRtl: () => {
      if (!!this.refs.root) {
        return window.getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl';
      }
    },*/
    addClassToLabel: className => {
      const rootLabel = this.rootLabel_();
      if (rootLabel) {
        return rootLabel.classList.add(className);
      }
    },
    removeClassFromLabel: className => {
      const rootLabel = this.rootLabel_();
      if (rootLabel) {
        return rootLabel.classList.remove(className);
      }
    },
    eventTargetHasClass: (target, className) => target.classList.contains(className),
    notifyIconAction: () => {
      if (typeof this.props.onIcon !== 'undefined') {
        this.props.onIcon({});
      }
      /*      if (this.refs.root) {
              return this.emit(this.refs.root, ICON_EVENT, {})
            }*/
    },
    setIconAttr: (name, value) => {
      const icon_ = this.icon_();
      if (icon_) {
        return icon_.setAttribute(name, value);
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
  });

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.foundation.init();
      if (this.props.box) {
        this.foundationRipple.init();
      }
    }
  }

  componentWillUnmount() {
    if (!this.props.cssOnly) {
      if (this.props.box) {
        this.foundationRipple.destroy();
      }
      this.foundation.destroy();
    }
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.cssOnly;
    delete ownProps.onIcon;
    const {
      disabled,
      upgraded,
      fullwidth,
      dense,
      box,
      leadingIcon,
      trailingIcon,
      textarea,
      outlined,
      focused,
      children,
      elementType,
      className,
      ...otherProps
    } = ownProps;

    const classes = classnames(
      'mdc-text-field', {
        'mdc-text-field--disabled': disabled,
        'mdc-text-field--upgraded': upgraded,
        'mdc-text-field--fullwidth': fullwidth,
        'mdc-text-field--dense': dense,
        'mdc-text-field--box': box,
        'mdc-text-field--with-leading-icon': leadingIcon,
        'mdc-text-field--with-trailing-icon': trailingIcon,
        'mdc-text-field--textarea': textarea,
        'mdc-text-field--outlined': outlined,
        'mdc-text-field--focused': focused,
      }, this.state.classNames, this.state.classNamesRipple, className);
    const ElementType = elementType || 'div';
    return (
      <ElementType
        ref="root"
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>);
  }
}
