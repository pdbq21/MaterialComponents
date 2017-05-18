/**
 * Created by ruslan on 16.03.17.
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {toolbar}  from 'material-components-web/dist/material-components-web';
const { util, MDCToolbarFoundation } = toolbar;
const {applyPassive} = util;
const {
    strings: {
        FLEXIBLE_ROW_SELECTOR: FLEXIBLE_ROW_SELECTOR_CLASS_NAME
    }
} = MDCToolbarFoundation;
export default class Toolbar extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
        };
    }

    foundation = new MDCToolbarFoundation({
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
        registerScrollHandler: handler => {
            return window.addEventListener('scroll', handler, applyPassive());
        },
        deregisterScrollHandler: handler => {
            return window.removeEventListener('scroll', handler, applyPassive());
        },
        registerResizeHandler: handler => {
            return window.addEventListener('resize', handler);
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
        getFlexibleRowElementOffsetHeight: () => {
            if (this.refs.root) {
                const  flexibleRowElement_ = this.refs.root.querySelector(FLEXIBLE_ROW_SELECTOR_CLASS_NAME);
                return flexibleRowElement_.offsetHeight;
            }
        },
        notifyChange: evtData => {
            if (this.props.onChange !== null) {
                this.props.onChange(this, evtData);
            }
        },
        setStyle: (property, value) => {
            if (this.refs.root) {
                return this.refs.root.style.setProperty(property, value);
            }
        },
        setStyleForTitleElement: (property, value) => {
            if (this.refs.root) {
                const  titleElement = this.refs.root.querySelector('.mdc-toolbar__title');
                if (titleElement){
                    return titleElement.style.setProperty(property, value);
                }
            }
        },
        setStyleForFlexibleRowElement: (property, value) => {
            if (this.refs.root) {
                const  flexibleRowElement_ = this.refs.root.querySelector(FLEXIBLE_ROW_SELECTOR_CLASS_NAME);
                return flexibleRowElement_.style.setProperty(property, value);
            }
        },
        setStyleForFixedAdjustElement: (property, value) => {
            let fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
            if (fixedAdjustElement) {
                return fixedAdjustElement.style.setProperty(property, value);
            }
        }
    });
    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
       this.foundation.destroy();
    }

    componentWillReceiveProps(props) {

    }

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onChange;
        const {
            elementType,
            className,
            children,
            fixed,
            waterfall,
            lastrowOnly,
            defaultBehavior,
            ...otherProp
        } = ownProps;
        const ElementType = elementType || 'header';
        const classes = classnames(
            'mdc-toolbar', {
                'mdc-toolbar--fixed': fixed,
                'mdc-toolbar--waterfall': waterfall,
                'mdc-toolbar--fixed-lastrow-only': lastrowOnly,
                'mdc-toolbar--flexible-default-behavior': defaultBehavior,
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