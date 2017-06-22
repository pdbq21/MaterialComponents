/**
 * Created by ruslan on 22.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

import {slider} from 'material-components-web/dist/material-components-web';
const {MDCSliderFoundation} = slider;
const {
  strings: {
    THUMB_CONTAINER_SELECTOR: THUMB_CONTAINER_SELECTOR_CLASS_NAME,
    TRACK_SELECTOR: TRACK_SELECTOR_CLASS_NAME,
  }
} = MDCSliderFoundation;

export default class Slider extends PureComponent {

  state = {
    classNames: [],
  };

  thumbContainer_ = () => this.refs.root.querySelector(THUMB_CONTAINER_SELECTOR_CLASS_NAME);
  track_ = () => this.refs.root.querySelector(TRACK_SELECTOR_CLASS_NAME);

  foundation = new MDCSliderFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),


    getAttribute: (name) => {
      if (this.refs.root) {
        return this.refs.root.getAttribute(name);
      }
    },
    setAttribute: (name, value) => {
      if (this.refs.root) {
        return this.refs.root.setAttribute(name, value);
      }
    },

    removeAttribute: (name) => {
      if (this.refs.root) {
        return this.refs.root.removeAttribute(name);
      }
    },
    computeBoundingRect: () => {
      if (this.refs.root) {
        return this.refs.root.getBoundingClientRect();
      }
    },
    getTabIndex: () => {
      if (this.refs.root) {
        return this.refs.root.tabIndex;
      }
    },
    registerInteractionHandler: (type, handler) => {
      if (this.refs.root) {
        return this.refs.root.addEventListener(type, handler, {passive: true});
      }
    },
    deregisterInteractionHandler: (type, handler) => {
      if (this.refs.root) {
        return this.refs.root.removeEventListener(type, handler);
      }
    },

    registerThumbContainerInteractionHandler: (type, handler) => {
      const thumbContainer = this.thumbContainer_();
      if (thumbContainer) {
        return thumbContainer.addEventListener(type, handler, {passive: true});
      }
    },
    deregisterThumbContainerInteractionHandler: (type, handler) => {
      const thumbContainer = this.thumbContainer_();
      if (thumbContainer) {
        return thumbContainer.removeEventListener(type, handler);
      }
    },
    registerBodyInteractionHandler: (type, handler) => {
      document.body.addEventListener(type, handler);
    },
    deregisterBodyInteractionHandler: (type, handler) => {
      document.body.removeEventListener(type, handler);
    },
    registerResizeHandler: (handler) => {
      window.addEventListener('resize', handler, {passive: true});
    },
    deregisterResizeHandler: (handler) => {
      window.removeEventListener('resize', handler);
    },

    notifyInput: () => {
      if (this.props.onSliderInput !== null) {
        return this.props.onSliderInput(this.foundation.value_);
      }
    },
    notifyChange: () => {
      if (this.props.onSliderChange !== null) {
        return this.props.onSliderChange(this.foundation.value_);
      }


    },
    setThumbContainerStyleProperty: (propertyName, value) => {
      const thumbContainer = this.thumbContainer_();
      if (thumbContainer) {
        return thumbContainer.style.setProperty(propertyName, value);
      }
    },
    setTrackStyleProperty: (propertyName, value) => {
      const track = this.track_();
      if (track) {
        return track.style.setProperty(propertyName, value);
      }
    },
    isRTL: () => {
      if (this.refs.root) {
        return getComputedStyle(this.refs.root).direction === 'rtl'
      }
    }
  });


  componentDidMount() {
    this.foundation.init();

  }

  componentWillUnmount() {
    this.foundation.destroy();
  }


  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.onSliderInput;
    delete ownProps.onSliderChange;
    const {
      elementType,
      className,
      tabIndex,
      role,
      children
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-slider',
      this.state.classNames,
      className
    );
    return (
      <ElementType
        ref="root"
        className={classes}
        tabIndex={tabIndex || "0"}
        role={role || "slider"}
      >
        {children}
      </ElementType>
    );
  }
}