/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {tabs}  from 'material-components-web/dist/material-components-web';
const {MDCTabBarScrollerFoundation, MDCTabBarFoundation} = tabs;
const {
  strings: {
    TAB_SELECTOR: TAB_SELECTOR_NAME
  }
} = MDCTabBarFoundation;
const {
  strings: {
    FRAME_SELECTOR: FRAME_SELECTOR_NAME,
    TABS_SELECTOR: TABS_SELECTOR_NAME,
    INDICATOR_FORWARD_SELECTOR: INDICATOR_FORWARD_SELECTOR_NAME,
    INDICATOR_BACK_SELECTOR: INDICATOR_BACK_SELECTOR_NAME
  }
} = MDCTabBarScrollerFoundation;
const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation',
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation',
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation',
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition',
  },
};

const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation',
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform',
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition',
  },
};

function eventFoundInMaps(eventType) {
  return (eventType in eventTypeMap || eventType in cssPropertyMap);
}

function hasProperShape(windowObj) {
  return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
}
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map = (
    eventType in eventTypeMap ? eventTypeMap : cssPropertyMap
  );
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

export default class TabBar extends PureComponent {
  state = {
    classNames: [],
  };


  scrollFrame_ = () => this.refs.root.querySelector(FRAME_SELECTOR_NAME);
  tabBarEl_ = () => this.refs.root.querySelector(TABS_SELECTOR_NAME);
  forwardIndicator_ = () => this.refs.root.querySelector(INDICATOR_FORWARD_SELECTOR_NAME);
  backIndicator_ = () => this.refs.root.querySelector(INDICATOR_BACK_SELECTOR_NAME);

  tabBar = () => this.tabBar_;

  foundation = new MDCTabBarScrollerFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),

    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
    eventTargetHasClass: (target, className) => target.classList.contains(className),
    addClassToForwardIndicator: (className) => {
      const forwardIndicator = this.forwardIndicator_();
      if (forwardIndicator) {
        return forwardIndicator.classList.add(className)
      }
    },
    removeClassFromForwardIndicator: (className) => {
      const forwardIndicator = this.forwardIndicator_();
      if (forwardIndicator) {
        return forwardIndicator.classList.remove(className)
      }
    },
    addClassToBackIndicator: (className) => {
      const backIndicator = this.backIndicator_();
      if (backIndicator) {
        return backIndicator.classList.add(className)
      }
    },
    removeClassFromBackIndicator: (className) => {
      const backIndicator = this.backIndicator_();
      if (backIndicator) {
        return backIndicator.classList.remove(className)
      }
    },
    registerBackIndicatorClickHandler: (handler) => {
      const backIndicator = this.backIndicator_();
      if (backIndicator) {
        return backIndicator.addEventListener('click', handler)
      }
    },
    deregisterBackIndicatorClickHandler: (handler) => {
      const backIndicator = this.backIndicator_();
      if (backIndicator) {
        return backIndicator.removeEventListener('click', handler)
      }
    },
    registerForwardIndicatorClickHandler: (handler) => {
      const forwardIndicator = this.forwardIndicator_();
      if (forwardIndicator) {
        return forwardIndicator.addEventListener('click', handler)
      }
    },
    deregisterForwardIndicatorClickHandler: (handler) => {
      const forwardIndicator = this.forwardIndicator_();
      if (forwardIndicator) {
        return forwardIndicator.removeEventListener('click', handler)
      }
    },
    registerCapturedInteractionHandler: (evt, handler) => {
      if (this.refs.root) {
        return this.refs.root.addEventListener(evt, handler, true)
      }
    },
    deregisterCapturedInteractionHandler: (evt, handler) => {
      if (this.refs.root) {
        return this.refs.root.removeEventListener(evt, handler, true)
      }
    },
    registerWindowResizeHandler: (handler) =>
      window.addEventListener('resize', handler),
    deregisterWindowResizeHandler: (handler) =>
      window.removeEventListener('resize', handler),
    getNumberOfTabs: () => {
      const tabBar = this.tabBar();
      if (tabBar) {
        return tabBar.length;
      }
    },
    getComputedWidthForTabAtIndex: index => {
      const tabBar = this.tabBar();
      if (tabBar) {
        return tabBar[index].offsetWidth;
      }
    },
    getComputedLeftForTabAtIndex: index => {
      const tabBar = this.tabBar();
      if (tabBar) {
        return tabBar[index].offsetLeft;
      }
    },
    getOffsetWidthForScrollFrame: () => {
      const scrollFrame = this.scrollFrame_();
      if (scrollFrame) {
        return scrollFrame.offsetWidth;
      }
    },
    getScrollLeftForScrollFrame: () => {
      const scrollFrame = this.scrollFrame_();
      if (scrollFrame) {
        return scrollFrame.scrollLeft;
      }
    },
    setScrollLeftForScrollFrame: scrollLeftAmount => {
      const scrollFrame = this.scrollFrame_();
      if (scrollFrame) {
        return scrollFrame.scrollLeft = scrollLeftAmount;
      }
    },
    getOffsetWidthForTabBar: () => {
      const tabBarEl = this.tabBarEl_();
      if (tabBarEl) {
        return tabBarEl.offsetWidth;
      }
    },
    setTransformStyleForTabBar: value => {
      const tabBarEl = this.tabBarEl_();
      if (tabBarEl) {
        return tabBarEl.style.setProperty(getCorrectPropertyName(window, 'transform'), value);
      }
    },
    isRTL: () =>
    getComputedStyle(this.refs.root).getPropertyValue('direction') === 'rtl',
    getOffsetLeftForEventTarget: (target) => target.offsetLeft,
    getOffsetWidthForEventTarget: (target) => target.offsetWidth,
  });

  componentDidMount() {
    this.tabBar_ = [].slice.call(this.tabBarEl_().querySelectorAll(TAB_SELECTOR_NAME));
    this.foundation.init();
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-tab-bar-scroller', this.state.classNames, className);
    return (
      <ElementType
        ref='root'
        className={classes}
      >
        {children}
      </ElementType>
    );
  }
}