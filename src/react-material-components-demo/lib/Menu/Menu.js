/**
 * Created by ruslan on 16.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {menu}  from 'material-components-web/dist/material-components-web';
const {MDCSimpleMenuFoundation} = menu;

let storedTransformPropertyName_;
// Returns the name of the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    storedTransformPropertyName_ = ('transform' in el.style ? 'transform' : 'webkitTransform');
  }

  return storedTransformPropertyName_;
}
export default class Menu extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      classNames: [],
    };
  }

  items_ = () => (this.refs.root.querySelector('.mdc-simple-menu__items.mdc-list'));

  foundation = new MDCSimpleMenuFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
    hasClass: className => {
      if (this.refs.root) {
        return this.refs.root.classList.contains(className);
      }
    },
    hasNecessaryDom: () => {
      const items = this.items_();
      return Boolean(items);
    },
    getInnerDimensions: () => {
      const items = this.items_();
      if (items) {
        return {
          width: items.offsetWidth,
          height: items.offsetHeight
        };
      }
    },
    hasAnchor: () => {
      if (this.refs.root) {
        return this.refs.root.parentElement && this.refs.root.parentElement.classList.contains('mdc-menu-anchor');
      }
    },
    getAnchorDimensions: () => {
      if (this.refs.root) {
        return this.refs.root.parentElement.getBoundingClientRect();
      }
    },
    getWindowDimensions: () => {
      return {width: window.innerWidth, height: window.innerHeight};
    },
    setScale: (x, y) => {
      if (this.refs.root) {
        return this.refs.root.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
      }
    },
    setInnerScale: (x, y) => {
      const items = this.items_();
      if (items) {
        return items.style[getTransformPropertyName(window)] = 'scale(' + x + ', ' + y + ')';
      }
    },
    getNumberOfItems: () => {
      const items = this.items_();
      if (items) {
        const itemsList = [].slice.call(items.querySelectorAll('.mdc-list-item[role]'));
        return itemsList.length;
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
/*    registerDocumentClickHandler: handler => {
      return document.addEventListener('click', handler, {passive: true});
    },
    deregisterDocumentClickHandler: handler => {
      return document.removeEventListener('click', handler);
    },*/
    getYParamsForItemAtIndex: index => {
      const items = this.items_();
      if (items) {
        const itemsList = [].slice.call(items.querySelectorAll('.mdc-list-item[role]'));
        return {
          top: itemsList[index].offsetTop,
          height: itemsList[index].offsetHeight
        };
      }
    },
    setTransitionDelayForItemAtIndex: (index, value) => {
      const items = this.items_();
      if (items) {
        const itemsList = [].slice.call(items.querySelectorAll('.mdc-list-item[role]'));
        return itemsList[index].style.setProperty('transition-delay', value);
      }
    },
    getIndexForEventTarget: target => {
      const items = this.items_();
      if (items) {
        const itemsList = [].slice.call(items.querySelectorAll('.mdc-list-item[role]'));
        return itemsList.indexOf(target);
      }
    },
    notifySelected: evtData => {
      const items = this.items_();
      if (this.props.onSelected !== null) {
        const itemsList = [].slice.call(items.querySelectorAll('.mdc-list-item[role]'));
        this.props.onSelected({
          index: evtData.index,
          item: itemsList[evtData.index]
        });
      }
    },
    notifyCancel: () => {
      if (this.props.onCancel !== null) {
        this.props.onCancel();
      }
    },
    saveFocus: () => {
      this.previousFocus_ = document.activeElement;
    },
    restoreFocus: () => {
      if (this.previousFocus_) {
        this.previousFocus_.focus();
      }
    },
    isFocused: () => {
      if (this.refs.root) {
        return document.activeElement === this.refs.root;
      }
    },
    focus: () => {
      if (this.refs.root) {
        this.refs.root.focus();
      }
    },
    getFocusedItemIndex: () => {
      const items = this.items_();
      if (items) {
        const itemsList = [].slice.call(items.querySelectorAll('.mdc-list-item[role]'));
        return itemsList.indexOf(document.activeElement);
      }
    },
    focusItemAtIndex: index => {
      if (this.child.refs.items) {
        const items = [].slice.call(this.child.refs.items.querySelectorAll('.mdc-list-item[role]'));
        return items[index].focus();
      }
    },
    isRtl: () => {
      if (this.refs.root) {
        return getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl';
      }
    },
    setTransformOrigin: origin => {
      if (this.refs.root) {
        return this.refs.root.style[getTransformPropertyName(window) + '-origin'] = origin;
      }
    },
    setPosition: position => {
      this.refs.root.style.left = 'left' in position ? position.left : null;
      this.refs.root.style.right = 'right' in position ? position.right : null;
      this.refs.root.style.top = 'top' in position ? position.top : null;
      this.refs.root.style.bottom = 'bottom' in position ? position.bottom : null;
    },
    getAccurateTime: () => window.performance.now(),
    getAttributeForEventTarget: (target, attributeName) => target.getAttribute(attributeName),
    registerBodyClickHandler: (handler) => document.body.addEventListener('click', handler),
    deregisterBodyClickHandler: (handler) => document.body.removeEventListener('click', handler),
  });

  componentDidMount() {
    this.foundation.init();
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  componentWillReceiveProps(props) {
    if (props.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.open;
    delete ownProps.onSelected;
    delete ownProps.onCancel;
    const {
      elementType,
      className,
      children,
      tabIndex,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-simple-menu', this.state.classNames, className);

    return (
      <ElementType
        ref='root'
        className={classes}
        tabIndex={tabIndex || "-1"}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}