/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {tabs}  from 'material-components-web/dist/material-components-web';
const {MDCTabBarFoundation, MDCTab, MDCTabFoundation} = tabs;

const {
  strings: {
    TAB_SELECTOR: TAB_SELECTOR_NAME,
    INDICATOR_SELECTOR: INDICATOR_SELECTOR_NAME,
    CHANGE_EVENT: CHANGE_EVENT_NAME
  }
} = MDCTabBarFoundation;
const {
  strings: {
    SELECTED_EVENT: SELECTED_EVENT_NAME,
  }
} = MDCTabFoundation;
export default class TabBar extends PureComponent {
  state = {
    classNames: [],
  };

  tabSelectedHandler_ = ({detail}) => {
    const {tab} = detail;
    this.setActiveTab_(tab, true);
  };

  setActiveTab_(activeTab, notifyChange) {
    const tabs = this.tabs();

    const indexOfTab = tabs.map(function (tab) {
      return tab.root_;
    }).indexOf(activeTab.root_);

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
    this.foundation.switchToTabAtIndex(activeTabIndex, notifyChange);
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
      if (this.refs.root) {
        return this.refs.root.offsetWidth
      }
    },

    bindOnMDCTabSelectedEvent: () => {
      if (this.refs.root) {
        return this.refs.root.addEventListener(SELECTED_EVENT_NAME, this.tabSelectedHandler_);
      }
    },
    unbindOnMDCTabSelectedEvent: () => {
      if (this.refs.root) {
        return this.refs.root.removeEventListener(SELECTED_EVENT_NAME, this.tabSelectedHandler_);
      }
    },

    setStyleForIndicator: (propertyName, value) => {
      const indicator = this.indicator_();
      if (indicator) {
        return indicator.style.setProperty(propertyName, value)
      }
    },
    getOffsetWidthForIndicator: () => {
      const indicator = this.indicator_();
      if (indicator) {
        return indicator.offsetWidth
      }
    },
    getNumberOfTabs: () => {
      const tabs = this.tabs();
      if (tabs) {
        return tabs.length;
      }
    },

    isTabActiveAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        return tabs[index].isActive;
      }
    },
    setTabActiveAtIndex: (index, isActive) => {
      const tabs = this.tabs();
      if (tabs) {
        return tabs[index].isActive = isActive;
      }
    },
    isDefaultPreventedOnClickForTabAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        return tabs[index].preventDefaultOnClick;
      }
    },
    setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
      const tabs = this.tabs();
      if (tabs) {
        return tabs[index].preventDefaultOnClick = preventDefaultOnClick;
      }
    },
    measureTabAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        tabs[index].foundation_.computedWidth_ = tabs[index].foundation_.adapter_.getOffsetWidth();
        tabs[index].foundation_.computedLeft_ = tabs[index].foundation_.adapter_.getOffsetLeft();
      }
    },
    getComputedWidthForTabAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        return tabs[index].foundation_.adapter_.getOffsetWidth();
      }
    },

    getComputedLeftForTabAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        return tabs[index].foundation_.adapter_.getOffsetLeft();
      }
    },
    notifyChange: evtData => {
      if (this.refs.root) {
        return this.emit(this.refs.root, CHANGE_EVENT_NAME, evtData);
      }
    },
  });

  componentDidMount() {
    this.tabs_ = this.gatherTabs_((el) => new MDCTab(el));
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
      iconTab,
      iconText,
      accent,
      scroll,
      children
    } = ownProps;
    const ElementType = elementType || 'nav';
    const classes = classnames('mdc-tab-bar', {
      'mdc-tab-bar--icon-tab-bar': iconTab,
      'mdc-tab-bar--icons-with-text': iconText,
      'mdc-tab-bar--indicator-accent': accent,
      'mdc-tab-bar-scroller__scroll-frame__tabs': scroll
    }, this.state.classNames, className);
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
