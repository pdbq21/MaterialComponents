/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {textfield, ripple}  from 'material-components-web/dist/material-components-web';
const {MDCTextfieldFoundation} = textfield;
const {MDCRippleFoundation} = ripple;
const {
  strings: {
    LABEL_SELECTOR: LABEL_SELECTOR_NAME,
    INPUT_SELECTOR: INPUT_SELECTOR_NAME,
    ICON_SELECTOR: ICON_SELECTOR_NAME,
    BOTTOM_LINE_SELECTOR: BOTTOM_LINE_SELECTOR_NAME
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

  state = {
    classNames: [],
    classNamesRipple: [],
  };

  rootInput_ = () => this.refs.root.querySelector(INPUT_SELECTOR_NAME);
  rootLabel_ = () => this.refs.root.querySelector(LABEL_SELECTOR_NAME);

  icon_ = () => this.refs.root.querySelector(ICON_SELECTOR_NAME);
  bottomLine_ = () => this.refs.root.querySelector(BOTTOM_LINE_SELECTOR_NAME);

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
    eventTargetHasClass: (target, className) => target.classList.contains(className),
    registerTextFieldInteractionHandler: (evtType, handler) => {
      if (this.refs.root) {
        this.refs.root.addEventListener(evtType, handler);
      }
    },
    deregisterTextFieldInteractionHandler: (evtType, handler) => {
      if (this.refs.root) {
        this.refs.root.removeEventListener(evtType, handler);
      }
    },
    notifyIconAction: () => {
      if (typeof this.props.onIcon !== 'undefined') {
        this.props.onIcon({});
      }
/*      if (this.refs.root) {
        return this.emit(this.refs.root, ICON_EVENT, {})
      }*/
    },
    // input
    getNativeInput: () => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput;
      }
    },
    registerInputInteractionHandler: (evtType, handler) => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.addEventListener(evtType, handler);
      }
    },
    deregisterInputInteractionHandler: (evtType, handler) => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.removeEventListener(evtType, handler);
      }
  },
    // Helptext
    addClassToHelptext: className => {
      const helptext = this.helptextElement();
      if (helptext) {
        return helptext.classList.add(className);
      }
    },
    removeClassFromHelptext: className => {
      const helptext = this.helptextElement();
      if (helptext) {
        return helptext.classList.remove(className);
      }
    },
    helptextHasClass: className => {
      const helptext = this.helptextElement();
      if (!helptext) {
        return false;
      }
      return helptext.classList.contains(className);
    },
    setHelptextAttr: (name, value) => {
      const helptext = this.helptextElement();
      if (helptext) {
        return helptext.setAttribute(name, value);
      }
    },
    removeHelptextAttr: name => {
      const helptext = this.helptextElement();
      if (helptext) {
        return helptext.removeAttribute(name);
      }
    },
    // Line
    addClassToBottomLine: (className) => {
      const bottomLine_ = this.bottomLine_();
      if (bottomLine_) {
        bottomLine_.classList.add(className);
      }
    },
    removeClassFromBottomLine: (className) => {
      const bottomLine_ = this.bottomLine_();
      if (bottomLine_) {
        bottomLine_.classList.remove(className);
      }
    },
    setBottomLineAttr: (attr, value) => {
      const bottomLine_ = this.bottomLine_();
      if (bottomLine_) {
        bottomLine_.setAttribute(attr, value);
      }
    },
    registerTransitionEndHandler: (handler) => {
      const bottomLine_ = this.bottomLine_();
      if (bottomLine_) {
        bottomLine_.addEventListener('transitionend', handler);
      }
    },
    deregisterTransitionEndHandler: (handler) => {
      const bottomLine_ = this.bottomLine_();
      if (bottomLine_) {
        bottomLine_.removeEventListener('transitionend', handler);
      }
    },
// Icon
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
    delete ownProps.onIcon;
    const {
      disabled,
      upgraded,
      multiline,
      fullwidth,
      dense,
      box,
      leadingIcon,
      trailingIcon,
      textarea,
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
        'mdc-textfield--with-leading-icon': leadingIcon,
        'mdc-textfield--with-trailing-icon': trailingIcon,
        'mdc-textfield--textarea': textarea,
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
