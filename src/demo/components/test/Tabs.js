/**
 * Created by ruslan on 22.05.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/tabs/dist/mdc.tabs.min.css';
import {tabs} from 'material-components-web/dist/material-components-web';

const {MDCTabBarFoundation, /*MDCTabFoundation,*/ MDCTab} = tabs;
//const {* as test} = MDCTabBarFoundation;
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
function getJavaScriptEventName(eventType, map, el) {
    return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

function hasProperShape(windowObj) {
    return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
}
function eventFoundInMaps(eventType) {
    return (eventType in eventTypeMap || eventType in cssPropertyMap);
}
function getAnimationName(windowObj, eventType) {
    if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
        return eventType;
    }

    const map = /** @type {!Object<string, !VendorPropertyMapType>} */ (
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

const getCorrectPropertyName = (windowObj, eventType) => {
    return getAnimationName(windowObj, eventType);
}

export default class TabsTest extends Component {
    state = {
        classNames: [],
        classNamesBars: [],
        foundationTab: [],
        activeTabIndex_: 0,
        isIndicatorShown_: false
    };

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

    layoutIndicator_() {
        const isIndicatorFirstRender = !this.state.isIndicatorShown_;

        // Ensure that indicator appears in the right position immediately for correct first render.
        if (isIndicatorFirstRender) {
            this.foundationBars.adapter_.setStyleForIndicator('transition', 'none');
        }
        const translateAmtForActiveTabLeft = this.foundationBars.adapter_.getComputedLeftForTabAtIndex(this.state.activeTabIndex_);
        const scaleAmtForActiveTabWidth =
            this.foundationBars.adapter_.getComputedWidthForTabAtIndex(this.state.activeTabIndex_) / this.foundationBars.adapter_.getOffsetWidth();

        const transformValue = `translateX(${translateAmtForActiveTabLeft}px) scale(${scaleAmtForActiveTabWidth}, 1)`;
        this.foundationBars.adapter_.setStyleForIndicator(getCorrectPropertyName(window, 'transform'), transformValue);

        if (isIndicatorFirstRender) {
            // Force layout so that transform styles to take effect.
            this.foundationBars.adapter_.getOffsetWidthForIndicator();
            this.foundationBars.adapter_.setStyleForIndicator('transition', '');
            this.foundationBars.adapter_.setStyleForIndicator('visibility', 'visible');
            // this.isIndicatorShown_ = true;
            this.setState({
                isIndicatorShown_: true
            })
        }
    }

    switchToTabAtIndex(index, shouldNotify) {
        if (index === this.state.activeTabIndex_) {
            return;
        }
        if (index < 0 || index >= this.foundationBars.adapter_.getNumberOfTabs()) {
            throw new Error(`Out of bounds index specified for tab: ${index}`);
        }

        const prevActiveTabIndex = this.state.activeTabIndex_;
        this.setState({
            activeTabIndex_: index
        });
        //this.activeTabIndex_ = index;
        requestAnimationFrame(() => {
            if (prevActiveTabIndex >= 0) {
                this.foundationBars.adapter_.setTabActiveAtIndex(prevActiveTabIndex, false);
            }
            this.foundationBars.adapter_.setTabActiveAtIndex(this.state.activeTabIndex_, true);
            this.layoutIndicator_();
            if (shouldNotify) {
                this.foundationBars.adapter_.notifyChange({activeTabIndex: this.state.activeTabIndex_});
            }
        });
    }


    setActiveTab_(activeTab, notifyChange) {
        const tabs = this.tabs_();
        //todo:   const indexOfTab = tabs.indexOf(activeTab); not work
        const indexOfTab = tabs.map(function (tab) {
            return tab.root_;
        }).indexOf(activeTab.root_);
        if (indexOfTab < 0) {
            throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
        }
        this.switchToTabAtIndex(indexOfTab, notifyChange);
    }


    tabSelectedHandler_ = ({detail}) => {
        const {tab} = detail;
        this.setActiveTab_(tab, true);
    };
    /* foundation = new MDCTabFoundation({
     addClass: className => {
     const menuEl = this.menuEl_();
     if (menuEl) {
     return menuEl.classList.add(className);
     }
     },
     removeClass: className => {
     const menuEl = this.menuEl_();
     if (menuEl) {
     return menuEl.classList.remove(className);
     }
     },
     registerInteractionHandler: (type, handler) => {
     if (this.refs.root) {
     return this.refs.root.addEventListener(type, handler)
     }
     },
     deregisterInteractionHandler: (type, handler) => {
     if (this.refs.root) {
     return this.refs.root.removeEventListener(type, handler)
     }
     },
     getOffsetWidth: () => {
     if (this.refs.root) {
     return this.refs.root.offsetWidth;
     }
     },

     getOffsetLeft: () => {
     if (this.refs.root) {
     return this.refs.root.offsetLeft;
     }
     },
     notifySelected: () => {
     if (this.props.onSelected !== null) {
     this.props.onSelected({
     tab: this.refs.root
     }, true);
     }
     if (this.refs.root) {
     return this.emit(this.refs.root, 'MDCTab:selected', {
     tab: this,
     }, true);
     }
     },
     });*/

    indicator_ = () => (this.refs.root.querySelector('.mdc-tab-bar__indicator'));
    tabs_ = () => (this.gatherTabs_(this.tabFactory));

    /* initialize(tabFactory = (el) => new MDCTab(el)) {

     this.tabSelectedHandler_ = ({detail}) => {
     const {tab} = detail;
     this.setActiveTab_(tab, true);
     };
     }*/

    // tabs_ = this.gatherTabs_(tabFactory);

    tabElements = () => ([].slice.call(this.refs.root.querySelectorAll('.mdc-tab')));

    tabFactory = (el) => {
        /*const foundation = new MDCTabFoundation({
            addClass: className => {
                if (el) {
                    return el.classList.add(className);
                }
            },
            removeClass: className => {
                if (el) {
                    return el.classList.remove(className);
                }
            },
            registerInteractionHandler: (type, handler) => {
                if (el) {
                    return el.addEventListener(type, handler)
                }
            },
            deregisterInteractionHandler: (type, handler) => {
                if (el) {
                    return el.removeEventListener(type, handler)
                }
            },
            getOffsetWidth: () => {
                if (el) {
                    return el.offsetWidth;
                }
            },
            getOffsetLeft: () => {
                if (el) {
                    return el.offsetLeft;
                }
            },
            notifySelected: () => {
                if (el) {
                    return this.emit(el, 'MDCTab:selected', {
                        tab: this,
                    }, true);
                }
            },
        });*/
        const foundation = new MDCTab(el);
        //console.dir(foundation);
        return foundation;
    };

    gatherTabs_(tabFactory) {
        const tabElements = this.tabElements();
        return tabElements.map((el) => tabFactory(el));
    }

    foundationBars = new MDCTabBarFoundation({
        addClass: className => this.setState(({classNamesBars}) => ({
            classNamesBars: classNamesBars.concat([className])
        })),
        removeClass: className => this.setState(({classNamesBars}) => ({
            classNamesBars: classNamesBars.filter(cn => cn !== className)
        })),
        registerResizeHandler: handler => {
            return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: handler => {
            return window.removeEventListener('resize', handler);
        },

        getOffsetWidth: () => {
            if (this.refs.root) {
                return this.refs.root.offsetWidth;
            }
        },
        // todo: below

        bindOnMDCTabSelectedEvent: () => {
            if (this.refs.root) {
                return this.refs.root.addEventListener('MDCTab:selected', this.tabSelectedHandler_);
            }
            //return _this3.listen('MDCTab:selected', _this3.tabSelectedHandler_);
        },
        unbindOnMDCTabSelectedEvent: () => {
            if (this.refs.root) {
                return this.refs.root.removeEventListener('MDCTab:selected', this.tabSelectedHandler_);
            }
            // return _this3.unlisten('MDCTab:selected', _this3.tabSelectedHandler_);
        },

        setStyleForIndicator: (propertyName, value) => {
            const indicator = this.indicator_();
            if (indicator) {
                return indicator.style.setProperty(propertyName, value);
            }
        },
        getOffsetWidthForIndicator: () => {
            const indicator = this.indicator_();
            if (indicator) {
                return indicator.offsetWidth;
            }
        },
        notifyChange: evtData => {
            if (this.refs.root) {
                return this.emit(this.refs.root, 'MDCTabBar:change', evtData);
            }
        },
        getNumberOfTabs: () => {
            const tabs = this.tabs_();
            if (tabs) {
                return tabs.length;
            }
        },
        isTabActiveAtIndex: index => {
            const tabs = this.tabs_();
            if (tabs) {
                return tabs[index].isActive;
            }
        },
        setTabActiveAtIndex: (index, isActive) => {
            const tabs = this.tabs_();
            if (tabs) {
                return tabs[index].isActive = isActive;
            }
        },
        isDefaultPreventedOnClickForTabAtIndex: index => {
            const tabs = this.tabs_();
            if (tabs) {
                return tabs[index].preventDefaultOnClick;
            }
        },
        setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
            const tabs = this.tabs_();
            if (tabs) {
                return tabs[index].preventDefaultOnClick = preventDefaultOnClick;
            }
        },
        measureTabAtIndex: index => {
            const tabs = this.tabs_();
            if (tabs) {
                // console.log('measureTabAtIndex', tabs, index);
                console.log(tabs[index]);
                //return tabs[index].measureSelf();
                // todo: width and left save in each foundation Tab, need change it
                tabs[index].foundation_.computedWidth_ = tabs[index].foundation_.adapter_.getOffsetWidth();
                tabs[index].foundation_.computedLeft_ = tabs[index].foundation_.adapter_.getOffsetLeft();
                // console.log(tabs[index-1]);
            }
        },
        getComputedWidthForTabAtIndex: index => {
            const tabs = this.tabs_();
            if (tabs) {
                return tabs[index].foundation_.adapter_.getOffsetWidth();
                //return tabs[index].computedWidth;
            }
        },
        getComputedLeftForTabAtIndex: index => {
            const tabs = this.tabs_();
            if (tabs) {
                //console.log(tabs[index], tabs[index].foundation_.adapter_.getOffsetLeft());
                return tabs[index].foundation_.adapter_.getOffsetLeft();
                //return tabs[index].computedLeft;
            }
        }
    });

    componentDidMount() {
        //const tabs = this.tabs_();
        //tabs.map((tab) => (tab.init()));
        this.foundationBars.init();
    }

    componentWillUnmount() {
        //const tabs = this.tabs_();
        //tabs.map((tab) => (tab.destroy()));

        this.foundationBars.destroy();
    }
    componentDidUpdate(){
        //const tabs = this.tabs_();
       // console.log(tabs, this.state.activeTabIndex_);
        //tabs[this.state.activeTabIndex_].isActive_= true;
        //tabs.map((tab) => (tab.destroy()));
    }

    render() {
        return (
            <div
                className="">
                <nav
                    ref='root'
                    id="my-mdc-tab-bar"
                    className={classnames('mdc-tab-bar', this.state.classNamesBars)}

                >
                    <a className="mdc-tab mdc-tab--active" href="#one">Item One</a>
                    <a className="mdc-tab" href="#two">Item Two</a>
                    <a className="mdc-tab" href="#three">Three</a>
                    <span className="mdc-tab-bar__indicator"/>
                </nav>
            </div>
        );
    }
}
