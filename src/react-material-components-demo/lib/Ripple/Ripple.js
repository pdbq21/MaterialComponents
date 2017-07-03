/**
 * Created by ruslan on 30.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRippleFoundation} = ripple;

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

export default class Ripple extends PureComponent {

  constructor(props) {
    super(props);
    this.foundation = null;
  }

  foundation_ = () => new MDCRippleFoundation({
    isUnbounded: () => (this.props.unbounded),
    browserSupportsCssVars: () => {
      return supportsCssVariables(window);
    },
    isSurfaceActive: () => this.refs.root[MATCHES](':active'),
    addClass: (className) => {
      if (this.refs.root) {
        return this.refs.root.classList.add(className);
      }
    },
    removeClass: (className) => {
      if (this.refs.root) {
        return this.refs.root.classList.remove(className);
      }
    },
    registerInteractionHandler: (evtType, handler) => {
      if (this.refs.root) {
        return this.refs.root.addEventListener(evtType, handler, {passive: true});
      }
    },
    deregisterInteractionHandler: (evtType, handler) => {
      if (this.refs.root) {
        return this.refs.root.removeEventListener(evtType, handler);
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
        return this.refs.root.style.setProperty(varName, value);
      }
    },
    computeBoundingRect: () => {
      if (this.refs.root) {
        if (this.props.unbounded) {
          const {left, top} = this.refs.root.getBoundingClientRect();
          const DIM = this.props.diameter || 40;
          return {
            top,
            left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM,
          };
        } else {
          return this.refs.root.getBoundingClientRect();
        }
      }
    },
    getWindowPageOffset: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset
    }),
  });

  render() {
    //
    const ownProps = Object.assign({}, this.props);
    delete ownProps.onlyCSS;
    const {
      primary,
      accent,
      unbounded,
      children,
    } = ownProps;

    const isUnbounded = (unbounded) ? true : null;
    const classes = classnames('mdc-ripple-surface', {
      'mdc-ripple-surface--primary': primary,
      'mdc-ripple-surface--accent': accent
    }, children.props.className);
    return (
      React.cloneElement(children, {
        ref: 'root',
        className: classes,
        'data-mdc-ripple-is-unbounded': isUnbounded
      })
    );
  }

  componentDidMount() {
    this.foundation = this.foundation_();
    if (!this.props.onlyCSS) {
      this.foundation.init();
    }
  }

  componentWillUnmount() {
    if (!this.props.onlyCSS) {
      this.foundation.destroy();
    }
  }
}
