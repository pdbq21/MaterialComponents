/**
 * Created by ruslan on 14.03.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {radio, ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRadioFoundation} = radio;
const {MDCRippleFoundation} = ripple;

//Ripple
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

function supportsCssVariables(windowObj) {
  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports("--css-vars", "yes");
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports("(--css-vars: yes)") &&
    windowObj.CSS.supports("color", "#00000000")
  );
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

export default class Radio extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  state = {
    classNames: [],

    classNamesRipple: [],
    rippleCss: {},
  }
//
  rootInput_ = () => this.refs.root.querySelector('.mdc-radio__native-control');
  foundation = new MDCRadioFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
    getNativeControl: () => {
      const rootInput = this.rootInput_();
      if (!rootInput) {
        throw new Error('Invalid state for operation');
      }
      return rootInput;
    }
  });

  foundationRipple = new MDCRippleFoundation({
    // for Checkbox and Radio this. === true \ for other component === false
    isUnbounded: () => true,
    browserSupportsCssVars: () => {
      return supportsCssVariables(window);
    },
    isSurfaceActive: () => this.refs.root[MATCHES](':active'),
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
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.addEventListener(evtType, handler, {passive: true});
      }
    },
    deregisterInteractionHandler: (evtType, handler) => {
      const rootInput = this.rootInput_();
      if (rootInput) {
        return rootInput.removeEventListener(evtType, handler);
      }
    },
    registerResizeHandler: handler => {
      window.addEventListener('resize', handler, {passive: true});
    },
    deregisterResizeHandler: handler => {
      window.removeEventListener('resize', handler);
    },
    updateCssVariable: (varName, value) => {
      if (this.refs.root) {
        this.setState(({rippleCss}) => ({
          rippleCss: {
            ...rippleCss,
            [varName]: value
          }
        }))
      }
    },
    computeBoundingRect: () => {
      const {left, top} = this.refs.root.getBoundingClientRect();

      const DIM = 40;
      return {
        top,
        left,
        right: left + DIM,
        bottom: top + DIM,
        width: DIM,
        height: DIM,
      };
    },
    getWindowPageOffset: () => {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    },

  });

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.ripple;
    const {
      className,
      disabled,
      children,
      elementType,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-radio', {
        'mdc-radio--disabled': disabled
      },
      this.state.classNames, this.state.classNamesRipple, className);
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

  // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
  // so that proper work can be performed.
  componentDidMount() {
    this.foundation.init();
    if (this.props.ripple) {
      this.foundationRipple.init();
    }
  }

  componentWillUnmount() {
    if (this.props.ripple) {
      this.foundationRipple.destroy();
    }
    this.foundation.destroy();
  }

  // Here we synchronize the internal state of the UI component based on what the user has specified.
  componentWillReceiveProps(props) {
    if (props.checked !== this.props.checked) {
      this.setState({checkedInternal: props.checked});
    }

    if (props.disabled !== this.props.disabled) {
      this.setState({disabledInternal: props.disabled});
    }
  }

  componentDidUpdate() {
    if (this.props.ripple && this.refs.root) {
      for (let key in this.state.rippleCss) {
        if (this.state.rippleCss.hasOwnProperty(key)) {
          this.refs.root.style.setProperty(key, this.state.rippleCss[key]);
        }
      }
    }
  }

}
