/**
 * Created by ruslan on 16.03.17.
 */

import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {toolbar}  from 'material-components-web/dist/material-components-web';
const {util, MDCToolbarFoundation} = toolbar;
const {applyPassive} = util;

export default class Toolbar extends PureComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      classNames: [],
    };
  }

  emit = (root, evtType, evtData) => {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {detail: evtData});
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, false, false, evtData);
    }
    root.dispatchEvent(evt);
  };

  foundation = new MDCToolbarFoundation({
    hasClass: className => {
      if (this.refs.root) {
        return this.refs.root.classList.contains(className);
      }
    },
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),

    registerScrollHandler: handler => {
      return window.addEventListener('scroll', handler, applyPassive());
    },
    deregisterScrollHandler: handler => {
      return window.removeEventListener('scroll', handler, applyPassive());
    },
    registerResizeHandler: handler => {
      return window.addEventListener('resize', handler, {passive: true});
    },
    deregisterResizeHandler: handler => {
      return window.removeEventListener('resize', handler);
    },
    getViewportWidth: () => {
      return window.innerWidth;
    },
    getViewportScrollY: () => {
      return window.pageYOffset;
    },
    getOffsetHeight: () => {
      if (this.refs.root) {
        return this.refs.root.offsetHeight;
      }
    },
    getFirstRowElementOffsetHeight: () => {
      if (this.refs.root) {
        const firstRowElement = this.refs.root.querySelector('.mdc-toolbar__row:first-child');
        if (firstRowElement) {
          return firstRowElement.offsetHeight;
        }
      }
    },
    notifyChange: evtData => {
      if (this.props.onChange !== undefined) {
        this.props.onChange(evtData);
      }
    },
    setStyle: (property, value) => {
      if (this.refs.root) {
        return this.refs.root.style.setProperty(property, value);
      }
    },
    setStyleForTitleElement: (property, value) => {
      if (this.refs.root) {
        const titleElement = this.refs.root.querySelector('.mdc-toolbar__title');
        if (titleElement) {
          return titleElement.style.setProperty(property, value);
        }
      }
    },
    setStyleForFlexibleRowElement: (property, value) => {
      if (this.refs.root) {
        const firstRowElement = this.refs.root.querySelector('.mdc-toolbar__row:first-child');
        if (firstRowElement) {
          return firstRowElement.style.setProperty(property, value);
        }
      }
    },
    setStyleForFixedAdjustElement: (property, value) => {
      if (this.refs.root) {
        const fixedAdjustElement = this.refs.root.parentNode.querySelector('.mdc-toolbar-fixed-adjust');
        if (fixedAdjustElement) {
          return fixedAdjustElement.style.setProperty(property, value);
        }
      }
    },

  });

  componentDidMount() {
    const {waterfall, lastRow, flexible} = this.props;
    if (waterfall || lastRow || flexible){
      this.foundation.init();
    }
  }

  componentWillUnmount() {
    const {waterfall, lastRow, flexible} = this.props;
    if (waterfall || lastRow || flexible){
      this.foundation.destroy();
    }
  }


  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.onChange;
    const {
      elementType,
      className,
      children,
      fixed,
      flexible,
      waterfall,
      lastRow,
      defaultBehavior,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'header';
    const classes = classnames(
      'mdc-toolbar', {
        'mdc-toolbar--fixed': fixed,
        'mdc-toolbar--waterfall': waterfall,
        'mdc-toolbar--fixed-lastrow-only': lastRow,
        'mdc-toolbar--flexible-default-behavior': defaultBehavior,
        'mdc-toolbar--flexible': flexible,
      }, this.state.classNames, className);

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