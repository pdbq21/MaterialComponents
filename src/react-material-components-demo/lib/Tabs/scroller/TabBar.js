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
        //return tabs[index].measureSelf();
        // todo: width and left save in each foundation Tab, need change it
        tabs[index].foundation_.computedWidth_ = tabs[index].foundation_.adapter_.getOffsetWidth();
        tabs[index].foundation_.computedLeft_ = tabs[index].foundation_.adapter_.getOffsetLeft();
        console.log('width', tabs[index].foundation_.computedWidth_, tabs[index].foundation_.adapter_.getOffsetWidth());
      }
    },
    getComputedWidthForTabAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        console.log('width', tabs[index].computedWidth, tabs[index].foundation_.adapter_.getOffsetWidth());
        //return tabs[index].computedWidth
        return tabs[index].foundation_.adapter_.getOffsetWidth();
        //return tabs[index].computedWidth;
      }
    },

    getComputedLeftForTabAtIndex: index => {
      const tabs = this.tabs();
      if (tabs) {
        //console.log(tabs[index].computedLeft, tabs[index].foundation_.adapter_.getOffsetLeft());
        return tabs[index].foundation_.adapter_.getOffsetLeft();
        //return tabs[index].computedLeft;
      }
    },
    notifyChange: evtData => {
      if (this.refs.root) {
        return this.emit(this.refs.root, CHANGE_EVENT_NAME, evtData);
      }
    },
//todo below

    /*bindOnMDCTabSelectedEvent: () => this.listen(
     MDCTabFoundation.strings.SELECTED_EVENT, this.tabSelectedHandler_),
     unbindOnMDCTabSelectedEvent: () => this.unlisten(
     MDCTabFoundation.strings.SELECTED_EVENT, this.tabSelectedHandler_),*/



    //notifyChange: (evtData) => this.emit(MDCTabBarFoundation.strings.CHANGE_EVENT, evtData),

    //measureTabAtIndex: (index) => this.tabs[index].measureSelf(),
    //getComputedWidthForTabAtIndex: (index) => this.tabs[index].computedWidth,
    //getComputedLeftForTabAtIndex: (index) => this.tabs[index].computedLeft,
  });

  componentDidMount() {
    //this.tabs_ = this.gatherTabs_((el) => new MDCTab(el));
    //this.indicator_ = this.refs.root.querySelector(INDICATOR_SELECTOR_NAME);
    /*this.tabSelectedHandler_ = ({detail}) => {
     const {tab} = detail;
     this.setActiveTab_(tab, true);
     };*/
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