/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {textfield, ripple}  from 'material-components-web/dist/material-components-web';
const {MDCTextfieldFoundation} = textfield;
const {MDCRippleFoundation} = ripple;
const {
  strings: {
    LABEL_SELECTOR: LABEL_SELECTOR_NAME,
    INPUT_SELECTOR: INPUT_SELECTOR_NAME
  },
} = MDCTextfieldFoundation;
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

export default class Textfield extends PureComponent {
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

  rootInput_ = () => this.refs.root.querySelector(INPUT_SELECTOR_NAME);
  rootLabel_ = () => this.refs.root.querySelector(LABEL_SELECTOR_NAME);

  helptextElement = () => {
    const rootInput = this.rootInput_();
    if (rootInput) {
      return (rootInput.hasAttribute('aria-controls')) ?
        document.getElementById(rootInput.getAttribute('aria-controls')) :
        null;
    }
  };

  foundation = new MDCTextfieldFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
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
    registerInputFocusHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.addEventListener('focus', handler, {passive: true});
      }
    },
    registerInputBlurHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.addEventListener('blur', handler, {passive: true});
      }
    },
    registerInputInputHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.addEventListener('input', handler, {passive: true});
      }
    },
    registerInputKeydownHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.addEventListener('keydown', handler, {passive: true});
      }
    },
    deregisterInputFocusHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.removeEventListener('focus', handler);
      }
    },
    deregisterInputBlurHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.removeEventListener('blur', handler);
      }
    },
    deregisterInputInputHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.removeEventListener('input', handler);
      }
    },
    deregisterInputKeydownHandler: handler => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.removeEventListener('keydown', handler);
      }
    },
    getNativeInput: () => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput;
      }
    },
    addClassToHelptext: className => {
      if (this.helptextElement()) {
        const helptext = this.helptextElement();
        return helptext.classList.add(className);
      }
    },
    removeClassFromHelptext: className => {
      if (this.helptextElement()) {
        const helptext = this.helptextElement();
        return helptext.classList.remove(className);
      }
    },
    helptextHasClass: className => {
      if (!this.helptextElement()) {
        return false;
      }
      const helptext = this.helptextElement();
      return helptext.classList.contains(className);
    },
    setHelptextAttr: (name, value) => {
      if (this.helptextElement()) {
        const helptext = this.helptextElement();
        return helptext.setAttribute(name, value);
      }
    },
    removeHelptextAttr: name => {
      if (this.helptextElement()) {
        const helptext = this.helptextElement();
        return helptext.removeAttribute(name);
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
    const {
      disabled,
      upgraded,
      multiline,
      fullwidth,
      dense,
      box,
      children,
      elementType,
      className,
      ...otherProps
    } = ownProps;

    const classes = classnames(
      'mdc-textfield', {
        'mdc-textfield--disabled': disabled,
        'mdc-textfield--upgraded': upgraded,
        'mdc-textfield--multiline': multiline,
        'mdc-textfield--fullwidth': fullwidth,
        'mdc-textfield--dense': dense,
        'mdc-textfield--box': box,
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
