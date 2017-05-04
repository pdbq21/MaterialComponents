/**
 * Created by ruslan on 13.04.17.
 */
import React from 'react';
//import IconToggleComponentTest from './test/IconToggle'
import {IconToggle} from '../../app/lib'

export default class IconToggleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            toggle: !this.state.toggle
        });
        console.log(e);
    }
    render() {
const { toggle } = this.state;
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>

                <fieldset>
                    <legend>Using material-icons</legend>
                    <div>
                        <h2>Using material-icons</h2>
                        <IconToggle
                            icon
                            toggle={toggle}
                            ripple
                            onChange={this.handleChange}
                            aria-pressed="false"
                            aria-label="Add to favorites"
                            tabIndex="0"
                            data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                            data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                        >
                            favorite_border
                        </IconToggle>
                        <p>Favorited? {(toggle)? 'yes' : 'no'}</p>
                    </div>
                    <div>
                        <h2>Using Font Awesome</h2>
                        <IconToggle
                            elementType="span"
                            toggle={toggle}
                            ripple
                            onChange={this.handleChange}
                            aria-pressed="false"
                            aria-label="Star this item"
                            tabIndex="0"
                            data-icon-inner-selector=".fa"
                            data-toggle-on='{"cssClass": "fa-star", "label": "Unstar this item"}'
                            data-toggle-off='{"cssClass": "fa-star-o", "label": "Star this item"}'
                            >
                            <i className="fa fa-star-o" aria-hidden="true"/>
                        </IconToggle>
                    </div>
                    <div>
                        <h2>Primary Colored Icons</h2>
                        <IconToggle
                            icon
                            primary
                            toggle={toggle}
                            ripple
                            onChange={this.handleChange}
                            aria-pressed="false"
                            aria-label="Add to favorites"
                            tabIndex="0"
                            data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                            data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                        >
                            favorite_border
                        </IconToggle>
                    </div>
                    <div>
                        <h2>Accent Colored Icons</h2>
                        <IconToggle
                            icon
                            accent
                            toggle={toggle}
                            ripple
                            onChange={this.handleChange}
                            aria-pressed="false"
                            aria-label="Add to favorites"
                            tabIndex="0"
                            data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                            data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                        >
                            favorite_border
                        </IconToggle>
                    </div>
                    <div>
                        <h2>Disabled Icons</h2>
                        <IconToggle
                            icon
                            disabled
                            toggle={toggle}
                            ripple
                            onChange={this.handleChange}
                            aria-pressed="false"
                            aria-label="Add to favorites"
                            tabIndex="0"
                            data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                            data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                        >
                            favorite_border
                        </IconToggle>
                    </div>
                </fieldset>
            </div>
        );
    }

}
