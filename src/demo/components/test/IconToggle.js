/**
 * Created by ruslan on 13.04.17.
 */
/**
 * Created by ruslan on 12.04.17.
 */
import React, {Component} from 'react';
import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';
import {iconToggle}  from 'material-components-web/dist/material-components-web';
const {MDCIconToggleFoundation} = iconToggle;
import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRipple, MDCRippleFoundation} = ripple;

export default class IconToggleComponentTest extends Component {

    state = {
        classNameMenu: []
    };

    foundation = new MDCIconToggleFoundation();
    foundation_ = new MDCRippleFoundation(MDCRipple.createAdapter(this.refs));

    componentDidMount() {
        console.log(this)
        this.foundation.init();
        this.foundation_.init();

    }

    componentWillUnmount() {
        this.foundation_.destroy();
        this.foundation.destroy();
    }

    componentDidUpdate() {

    }

    render() {
        return (
                <i
                    ref='root'
                    className="mdc-icon-toggle material-icons" role="button" aria-pressed="false"
                   aria-label="Add to favorites" tabIndex="0"
                   data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                   data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'>
                    favorite_border
                </i>
        );
    }
}