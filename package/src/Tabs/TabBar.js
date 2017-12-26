/**
 * Created by ruslan on 27.06.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import {tabs} from 'material-components-web/dist/material-components-web';

const {MDCTabBarFoundation, MDCTabFoundation} = tabs;

const {
  strings: {
    TAB_SELECTOR: TAB_SELECTOR_NAME,
    INDICATOR_SELECTOR: INDICATOR_SELECTOR_NAME,
    CHANGE_EVENT: CHANGE_EVENT_NAME
  }
} = MDCTabBarFoundation;
const {
  cssClasses: {
    ACTIVE: ACTIVE_NAME
  },
  strings: {
    SELECTED_EVENT: SELECTED_EVENT_NAME,
  }
} = MDCTabFoundation;
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


export default class TabBar extends Component {
  state = {
    classNames: [],
    activeTabIndex: 0,
  };

  tabSelectedHandler_ = ({detail}) => {
    const {tab} = detail;
    this.setActiveTab_(tab, true);
  };

  setActiveTab_(activeTab, notifyChange) {
    const tabs = this.tabs();
    const indexOfTab = tabs.indexOf(activeTab.refs.root);
    if (indexOfTab < 0) {
      throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
    }
    this.setActiveTabIndex_(indexOfTab, notifyChange);
  }

  tabs = () => this.tabs_;

  gatherTabs_(tabFactory) {
    const tabElements = [].slice.call(this.refs.root.querySelectorAll(TAB_SELECTOR_NAME));
    return tabElements.map((el) => tabFactory(el));
  }

  setActiveTabIndex_(activeTabIndex, notifyChange) {
    this.switchToTabAtIndex(activeTabIndex, notifyChange);
  }

  switchToTabAtIndex(index, shouldNotify) {
    const {activeTabIndex} = this.state;
    if (index === activeTabIndex) {
      return;
    }

    if (index < 0 || index >= this.foundation.adapter_.getNumberOfTabs()) {
      throw new Error(`Out of bounds index specified for tab: ${index}`);
    }
    const prevActiveTabIndex = activeTabIndex;
    requestAnimationFrame(() => {
      if (prevActiveTabIndex >= 0) {
        this.foundation.adapter_.setTabActiveAtIndex(prevActiveTabIndex, false);
      }
      this.foundation.adapter_.setTabActiveAtIndex(index, true);
      this.layoutIndicator_();
      if (shouldNotify) {
        this.foundation.adapter_.notifyChange({activeTabIndex: index});
      }
    });
    this.setState({
      activeTabIndex: index
    });
  };

  layoutIndicator_() {
    const {activeTabIndex} = this.state;
    //const isIndicatorFirstRender = !isIndicatorShown;

    // Ensure that indicator appears in the right position immediately for correct first render.
    /*if (isIndicatorFirstRender) {
      this.foundation.adapter_.setStyleForIndicator('transition', 'none');
    }*/

    const translateAmtForActiveTabLeft = this.foundation.adapter_.getComputedLeftForTabAtIndex(activeTabIndex);
    const scaleAmtForActiveTabWidth =
      this.foundation.adapter_.getComputedWidthForTabAtIndex(activeTabIndex) / this.foundation.adapter_.getOffsetWidth();

    const transformValue = `translateX(${translateAmtForActiveTabLeft}px) scale(${scaleAmtForActiveTabWidth}, 1)`;
    this.foundation.adapter_.setStyleForIndicator(getCorrectPropertyName(window, 'transform'), transformValue);

    /*if (isIndicatorFirstRender) {
      // Force layout so that transform styles to take effect.
      this.foundation.adapter_.getOffsetWidthForIndicator();
      this.foundation.adapter_.setStyleForIndicator('transition', '');
      this.foundation.adapter_.setStyleForIndicator('visibility', 'visible');
      //this.isIndicatorShown_ = true;
      this.setState({
        isIndicatorShown: true
      })
    }*/
  }


  indicator_ = () => this.refs.root.querySelector(INDICATOR_SELECTOR_NAME);

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

  foundation = new MDCTabBarFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),

    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
    registerResizeHandler: (handler) => window.addEventListener('resize', handler),
    deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),

    getOffsetWidth: () => {
      if (!!this.refs.root) {
        return this.refs.root.offsetWidth
      }
    },

    bindOnMDCTabSelectedEvent: () => {
      if (!!this.refs.root) {
        return this.refs.root.addEventListener(SELECTED_EVENT_NAME, this.tabSelectedHandler_);
      }
    },
    unbindOnMDCTabSelectedEvent: () => {
      if (!!this.refs.root) {
        return this.refs.root.removeEventListener(SELECTED_EVENT_NAME, this.tabSelectedHandler_);
      }
    },

    setStyleForIndicator: (propertyName, value) => {
      const indicator = this.indicator_();
      if (!!indicator) {
        return indicator.style.setProperty(propertyName, value)
      }
    },
    getOffsetWidthForIndicator: () => {
      const indicator = this.indicator_();
      if (!!indicator) {
        return indicator.offsetWidth
      }
    },
    getNumberOfTabs: () => {
      const tabs = this.tabs();
      if (!!tabs) {
        return tabs.length;
      }
    },

    isTabActiveAtIndex: index => {
      const tabs = this.tabs();
      if (!!tabs) {
        return tabs[index].classList.contains(ACTIVE_NAME)
      }
    },
    setTabActiveAtIndex: (index, isActive) => {
      const tabs = this.tabs();
      if (!!tabs) {
        if (isActive) {
          tabs[index].classList.add(ACTIVE_NAME);
        } else {
          tabs[index].classList.remove(ACTIVE_NAME);
        }
      }
    },
    isDefaultPreventedOnClickForTabAtIndex: index => {
      const tabs = this.tabs();
      if (!!tabs) {
        return tabs[index].preventDefaultOnClick;
      }
    },
    setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
      const tabs = this.tabs();
      if (!!tabs) {
        return tabs[index].preventDefaultOnClick = preventDefaultOnClick;
      }
    },
    /*measureTabAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        //console.log(tabs[index].offsetWidth);
        //tabs[index].foundation_.computedWidth_ = tabs[index].foundation_.adapter_.getOffsetWidth();
       // tabs[index].foundation_.computedWidth_ = tabs[index].offsetWidth;
        //tabs[index].foundation_.computedLeft_ = tabs[index].foundation_.adapter_.getOffsetLeft();
        //tabs[index].foundation_.computedLeft_ = tabs[index].offsetLeft;
      }
    },*/
    getComputedWidthForTabAtIndex: index => {
      const tabs = this.tabs();
      if (!!tabs) {
        //return tabs[index].foundation_.adapter_.getOffsetWidth();
        return tabs[index].offsetWidth;
      }
    },

    getComputedLeftForTabAtIndex: index => {
      const tabs = this.tabs();
      if (!!tabs) {
        //return tabs[index].foundation_.adapter_.getOffsetLeft();
        return tabs[index].offsetLeft;
      }
    },
    notifyChange: evtData => {
      if (this.refs.root) {
        if (typeof this.props.onSelected !== 'undefined') {
          this.props.onSelected(evtData);
        }
        return this.emit(this.refs.root, CHANGE_EVENT_NAME, evtData);
      }
    },
  });

  componentDidMount() {

    if (!this.props.cssOnly) {
      this.tabs_ = [].slice.call(this.refs.root.querySelectorAll(TAB_SELECTOR_NAME));
      //this.tabs_ = this.gatherTabs_((el) => new MDCTab(el));
      //this.isActive = this.root_.classList.contains(ACTIVE_NAME);
      //this.gatherTabs_((el) => new MDCTab(el));
      this.foundation.init();
    }

  }

  componentWillUnmount() {
    if (!this.props.cssOnly) {
      this.foundation.destroy();
    }
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.cssOnly;
    delete ownProps.onSelected;
    const {
      elementType,
      className,
      iconTab,
      iconText,
      accent,
      primary,
      scroll,
      children,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'nav';
    const classes = classnames('mdc-tab-bar', {
      'mdc-tab-bar--icon-tab-bar': iconTab,
      'mdc-tab-bar--icons-with-text': iconText,
      'mdc-tab-bar--indicator-accent': accent,
      'mdc-tab-bar--indicator-primary': primary,
      'mdc-tab-bar-scroller__scroll-frame__tabs': scroll
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
