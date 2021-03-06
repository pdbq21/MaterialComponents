/**
 * Created by ruslan on 22.06.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';

import {slider} from 'material-components-web/dist/material-components-web';
const {MDCSliderFoundation} = slider;
const {
  strings: {
    THUMB_CONTAINER_SELECTOR: THUMB_CONTAINER_SELECTOR_CLASS_NAME,
    TRACK_SELECTOR: TRACK_SELECTOR_CLASS_NAME,
    PIN_VALUE_MARKER_SELECTOR: PIN_VALUE_MARKER_SELECTOR_CLASS_NAME,
    TRACK_MARKER_CONTAINER_SELECTOR: TRACK_MARKER_CONTAINER_SELECTOR_CLASS_NAME,
    LAST_TRACK_MARKER_SELECTOR: LAST_TRACK_MARKER_SELECTOR_CLASS_NAME
  }
} = MDCSliderFoundation;

export default class Slider extends Component {

  state = {
    classNames: [],
  };

  thumbContainer_ = () => this.refs.root.querySelector(THUMB_CONTAINER_SELECTOR_CLASS_NAME);
  track_ = () => this.refs.root.querySelector(TRACK_SELECTOR_CLASS_NAME);
  pinValueMarker_ = () => this.refs.root.querySelector(PIN_VALUE_MARKER_SELECTOR_CLASS_NAME);
  trackMarkerContainer_ = () => this.refs.root.querySelector(TRACK_MARKER_CONTAINER_SELECTOR_CLASS_NAME);
  lastTrackMarker_ = () => this.refs.root.querySelector(LAST_TRACK_MARKER_SELECTOR_CLASS_NAME);

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
        //todo: {passive: true} - error for events key
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
      if (!!thumbContainer) {
        return thumbContainer.addEventListener(type, handler, {passive: true});
      }
    },
    deregisterThumbContainerInteractionHandler: (type, handler) => {
      const thumbContainer = this.thumbContainer_();
      if (!!thumbContainer) {
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
      if (typeof this.props.onSliderInput !== 'undefined') {
        return this.props.onSliderInput(this.foundation.value_);
      }
    },
    notifyChange: () => {
      if (typeof this.props.onSliderChange !== 'undefined') {
        return this.props.onSliderChange(this.foundation.value_);
      }
    },
    setThumbContainerStyleProperty: (propertyName, value) => {
      const thumbContainer = this.thumbContainer_();
      if (!!thumbContainer) {
        return thumbContainer.style.setProperty(propertyName, value);
      }
    },
    setTrackStyleProperty: (propertyName, value) => {
      const track = this.track_();
      if (!!track) {
        return track.style.setProperty(propertyName, value);
      }
    },
    isRTL: () => {
      if (this.refs.root) {
        return getComputedStyle(this.refs.root).direction === 'rtl'
      }
    },


    hasClass: (className) => {
      if (this.refs.root) {
        return this.refs.root.classList.contains(className)
      }
    },
    setMarkerValue: (value) => {
      const pinValueMarker = this.pinValueMarker_();
      if (!!pinValueMarker) {
        return pinValueMarker.innerText = value;
      }
    },

    appendTrackMarkers: (numMarkers) => {
      const trackMarkerContainer = this.trackMarkerContainer_();
      if (!!trackMarkerContainer) {
        const frag = document.createDocumentFragment();
        for (let i = 0; i < numMarkers; i++) {
          const marker = document.createElement('div');
          marker.classList.add('mdc-slider__track-marker');
          frag.appendChild(marker);
        }
        return trackMarkerContainer.appendChild(frag);
      }
    },
    removeTrackMarkers: () => {
      const trackMarkerContainer = this.trackMarkerContainer_();
      if (!!trackMarkerContainer) {
        while (trackMarkerContainer.firstChild) {
          trackMarkerContainer.removeChild(trackMarkerContainer.firstChild);
        }
      }
    },
    setLastTrackMarkersStyleProperty: (propertyName, value) => {
      // We remove and append new nodes, thus, the last track marker must be dynamically found.
      const lastTrackMarker = this.lastTrackMarker_();
      if (!!lastTrackMarker) {
        return lastTrackMarker.style.setProperty(propertyName, value);
      }
    },
  });


  componentDidMount() {
    this.foundation.init();
//initial / 0 - false - default === 0
    if (this.props['data-step']) {
      this.foundation.setStep(Number(this.props['data-step']))
    }
    if (this.props['aria-valuemin']) {
      this.foundation.setMin(Number(this.props['aria-valuemin']));
    }
    if (this.props['aria-valuemax']) {
      this.foundation.setMax(Number(this.props['aria-valuemax']));
    }
    if (this.props['aria-valuenow']) {
      this.foundation.setValue(Number(this.props['aria-valuenow']));
    }
    if (this.props.disabled) {
      this.foundation.setDisabled(Boolean(this.props.disabled))
    }
  }

  componentWillReceiveProps(props) {
    if (props['data-step'] !== this.props['data-step']) {
      this.foundation.setStep(Number(props['data-step']))
    }
    if (props['aria-valuemin'] !== this.props['aria-valuemin']) {
      this.foundation.setMin(Number(props['aria-valuemin']));
    }
    if (props['aria-valuemax'] !== this.props['aria-valuemax']) {
      this.foundation.setMax(Number(props['aria-valuemax']));
    }
    if (props['aria-valuenow'] !== this.props['aria-valuenow']) {
      this.foundation.setValue(Number(props['aria-valuenow']));
    }
    if (props.disabled !== this.props.disabled) {
      this.foundation.setDisabled(Boolean(props.disabled))
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }


  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.onSliderInput;
    delete ownProps.onSliderChange;
    delete ownProps.disabled;
    const {
      elementType,
      className,
      tabIndex,
      role,
      discrete,
      markers,
      children,
      ...otherProps
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-slider',
      {
        'mdc-slider--discrete': discrete,
        'mdc-slider--display-markers': markers,
      },
      this.state.classNames,
      className
    );

    return (
      <ElementType
        ref="root"
        className={classes}
        tabIndex={tabIndex || "0"}
        role={role || "slider"}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
  }
}