/**
 * Created by ruslan on 22.05.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/tabs/dist/mdc.tabs.min.css';
import {tabs} from 'material-components-web/dist/material-components-web';

const {MDCTabBarFoundation, MDCTabFoundation} = tabs;

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
        foundationTab: []
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
        const isIndicatorFirstRender = !this.isIndicatorShown_;

        // Ensure that indicator appears in the right position immediately for correct first render.
        if (isIndicatorFirstRender) {
            this.adapter_.setStyleForIndicator('transition', 'none');
        }

        const translateAmtForActiveTabLeft = this.adapter_.getComputedLeftForTabAtIndex(this.activeTabIndex_);
        const scaleAmtForActiveTabWidth =
            this.adapter_.getComputedWidthForTabAtIndex(this.activeTabIndex_) / this.adapter_.getOffsetWidth();

        const transformValue = `translateX(${translateAmtForActiveTabLeft}px) scale(${scaleAmtForActiveTabWidth}, 1)`;
        this.adapter_.setStyleForIndicator(getCorrectPropertyName(window, 'transform'), transformValue);

        if (isIndicatorFirstRender) {
            // Force layout so that transform styles to take effect.
            this.adapter_.getOffsetWidthForIndicator();
            this.adapter_.setStyleForIndicator('transition', '');
            this.adapter_.setStyleForIndicator('visibility', 'visible');
            this.isIndicatorShown_ = true;
        }
    }

    switchToTabAtIndex(index, shouldNotify) {
        if (index === this.activeTabIndex_) {
            return;
        }

        if (index < 0 || index >= this.adapter_.getNumberOfTabs()) {
            throw new Error(`Out of bounds index specified for tab: ${index}`);
        }

        const prevActiveTabIndex = this.activeTabIndex_;
        this.activeTabIndex_ = index;
        requestAnimationFrame(() => {
            if (prevActiveTabIndex >= 0) {
                this.adapter_.setTabActiveAtIndex(prevActiveTabIndex, false);
            }
            this.adapter_.setTabActiveAtIndex(this.activeTabIndex_, true);
            this.layoutIndicator_();
            if (shouldNotify) {
                this.adapter_.notifyChange({activeTabIndex: this.activeTabIndex_});
            }
        });
    }

    setActiveTabIndex_(activeTabIndex, notifyChange) {
        this.foundation_.switchToTabAtIndex(activeTabIndex, notifyChange);
    }

    setActiveTab_(activeTab, notifyChange) {
        const indexOfTab = this.tabs.indexOf(activeTab);
        if (indexOfTab < 0) {
            throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
        }
        this.setActiveTabIndex_(indexOfTab, notifyChange);
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
        const foundation = new MDCTabFoundation({
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
        });
        this.state.foundationTab.push(
            foundation
        )
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

        /* bindOnMDCTabSelectedEvent: () => {
         if (this.refs.root) {
         return this.refs.root.addEventListener('MDCTab:selected', this.tabSelectedHandler_);
         }
         return _this3.listen('MDCTab:selected', _this3.tabSelectedHandler_);
         },*/
        /* unbindOnMDCTabSelectedEvent: function unbindOnMDCTabSelectedEvent() {
         return _this3.unlisten('MDCTab:selected', _this3.tabSelectedHandler_);
         },


         setStyleForIndicator: function setStyleForIndicator(propertyName, value) {
         return _this3.indicator_.style.setProperty(propertyName, value);
         },
         getOffsetWidthForIndicator: function getOffsetWidthForIndicator() {
         return _this3.indicator_.offsetWidth;
         },
         notifyChange: function notifyChange(evtData) {
         return _this3.emit('MDCTabBar:change', evtData);
         },
         getNumberOfTabs: function getNumberOfTabs() {
         return _this3.tabs.length;
         },
         isTabActiveAtIndex: function isTabActiveAtIndex(index) {
         return _this3.tabs[index].isActive;
         },
         setTabActiveAtIndex: function setTabActiveAtIndex(index, isActive) {
         _this3.tabs[index].isActive = isActive;
         },
         isDefaultPreventedOnClickForTabAtIndex: function isDefaultPreventedOnClickForTabAtIndex(index) {
         return _this3.tabs[index].preventDefaultOnClick;
         },
         setPreventDefaultOnClickForTabAtIndex: function setPreventDefaultOnClickForTabAtIndex(index, preventDefaultOnClick) {
         _this3.tabs[index].preventDefaultOnClick = preventDefaultOnClick;
         },
         measureTabAtIndex: function measureTabAtIndex(index) {
         return _this3.tabs[index].measureSelf();
         },
         getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex(index) {
         return _this3.tabs[index].computedWidth;
         },
         getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex(index) {
         return _this3.tabs[index].computedLeft;
         }*/
    });

    componentDidMount() {

        this.foundationBars.init();
        console.dir(this.state);
    }

    componentWillUnmount() {
        this.foundationBars.destroy();
    }


    render() {
        console.log(MDCTabFoundation, MDCTabBarFoundation);
        return (
            <div

                className="">
                {/*                <section id="dynamic-demo-toolbar">
                 <nav
                 ref="root"
                 id="dynamic-tab-bar"
                 className={classnames('mdc-tab-bar mdc-tab-bar--indicator-accent', this.state.classNamesBars)}
                 role="tablist"
                 >
                 <a role="tab" aria-controls="panel-1"
                 className="mdc-tab mdc-tab--active" href="#panel-1">Item One</a>
                 <a role="tab" aria-controls="panel-2"
                 className="mdc-tab" href="#panel-2">Item Two</a>
                 <a role="tab" aria-controls="panel-3"
                 className="mdc-tab" href="#panel-3">Item Three</a>
                 <span className="mdc-tab-bar__indicator"/>
                 </nav>
                 </section>
                 <section>
                 <div className="panels">
                 <p className="panel active" id="panel-1" role="tabpanel" aria-hidden="false">Item One</p>
                 <p className="panel" id="panel-2" role="tabpanel" aria-hidden="true">Item Two</p>
                 <p className="panel" id="panel-3" role="tabpanel" aria-hidden="true">Item Three</p>
                 </div>
                 <div className="dots">
                 <a className="dot active" data-trigger="panel-1" href="#panel-1"/>
                 <a className="dot" data-trigger="panel-2" href="#panel-2"/>
                 <a className="dot" data-trigger="panel-3" href="#panel-3"/>
                 </div>
                 </section>*/}
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
