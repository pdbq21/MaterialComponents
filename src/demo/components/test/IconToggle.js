/**
 * Created by ruslan on 13.04.17.
 */
/**
 * Created by ruslan on 12.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';

import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';
import {iconToggle}  from 'material-components-web/dist/material-components-web';
const {MDCIconToggleFoundation} = iconToggle;


export default class IconToggleComponentTest extends Component {

    state = {
        classes: [],
    };

    foundation = new MDCIconToggleFoundation({
        addClass: className => this.setState(({classes}) => ({
            classes: classes.concat([className])
        })),
        removeClass: className => this.setState(({classes}) => ({
            classes: classes.filter(cn => cn !== className)
        })),
        registerInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.addEventListener(type, handler);
            }
        },
        deregisterInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(type, handler);
            }
        },
        setText: text => {
            if (this.refs.root) {
                this.refs.root.textContent = text;
            }
        },
        getTabIndex: () => {
            if (this.refs.root) {
                return this.refs.root.tabIndex;
            }
        },
        setTabIndex: tabIndex => {
            if (this.refs.root) {
                this.refs.root.tabIndex = tabIndex;
            }
        },
        getAttr: name => {
            if (this.refs.root) {
                this.refs.root.getAttribute(name);
            }
        },
        setAttr: (name, value) => {
            if (this.refs.root) {
                this.refs.root.setAttribute(name, value);
            }
        },
        rmAttr: name => {
            if (this.refs.root) {
                this.refs.root.removeAttribute(name);
            }
        },
        notifyChange: evtData => {
            if (this.refs.root) {
                this.refs.root.removeAttribute(name);
            }
        },

 /*
        notifyChange: function notifyChange(evtData) {
            return _this3.emit('MDCIconToggle:change', evtData);
        }*/
    });

    componentDidMount() {
        console.log(this.refs);
        this.foundation.init();

    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate() {

    }

    render() {
        console.log(iconToggle);
        const ownProps = Object.assign({}, this.props);
        delete ownProps.ripple;
        const {
            className,
            ...otherProp
        } = ownProps;
        return (
                <i
                    ref='root'
                    className={
                        classnames(
                            'mdc-icon-toggle material-icons',
                            this.state.classes,
                            this.state.classNamesRipple,
                            className
                        )}
                     role="button" aria-pressed="false"
                   aria-label="Add to favorites" tabIndex="0"
                   data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                   data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    {...otherProp}
                >
                    favorite_border
                </i>
        );
    }
}