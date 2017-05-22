/**
 * Created by ruslan on 22.05.17.
 */
import React from 'react';
import Tabs from './test/Tabs'
export default class TabsComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(e, bool) {
        console.log(e, bool);
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>

                <fieldset>
                    <legend>Tabs</legend>

                    <Tabs
                        onSelected={this.handleSelected}
                    />

                </fieldset>
                <fieldset>
                    <legend>Tab Bar with text labels</legend>
                    <div>
                        <nav id="basic-tab-bar" className="mdc-tab-bar">
                            <a className="mdc-tab mdc-tab--active" href="#one">Home</a>
                            <a className="mdc-tab" href="#two">Merchandise</a>
                            <a className="mdc-tab" href="#three">About Us</a>
                            <span className="mdc-tab-bar__indicator"/>
                        </nav>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tab Bar with icon labels</legend>
                    <div>
                        <nav className="mdc-tab-bar mdc-tab-bar--icon-tab-bar">
                            <a className="mdc-tab mdc-tab--active" href="#recents">
                                <i className="material-icons mdc-tab__icon" aria-label="Recents">phone</i>
                            </a>
                            <a className="mdc-tab" href="#favorites">
                                <i className="material-icons mdc-tab__icon" aria-label="Favorites">favorite</i>
                            </a>
                            <a className="mdc-tab" href="#nearby">
                                <i className="material-icons mdc-tab__icon" aria-label="nearby">person_pin</i>
                            </a>
                            <span className="mdc-tab-bar__indicator"/>
                        </nav>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tab Bar with icon and text labels</legend>
                    <div>
                        <nav id="icon-text-tab-bar" className="mdc-tab-bar mdc-tab-bar--icons-with-text">
                            <a className="mdc-tab mdc-tab--with-icon-and-text mdc-tab--active" href="#recents">
                                <i className="material-icons mdc-tab__icon" aria-hidden="true">phone</i>
                                <span className="mdc-tab__icon-text">Recents</span>
                            </a>
                            <a className="mdc-tab mdc-tab--with-icon-and-text" href="#favorites">
                                <i className="material-icons mdc-tab__icon" aria-hidden="true">favorite</i>
                                <span className="mdc-tab__icon-text">Favorites</span>
                            </a>
                            <a className="mdc-tab mdc-tab--with-icon-and-text" href="#nearby">
                                <i className="material-icons mdc-tab__icon" aria-hidden="true">person_pin</i>
                                <span className="mdc-tab__icon-text">Nearby</span>
                            </a>
                            <span className="mdc-tab-bar__indicator"/>
                        </nav>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>RTL Support</legend>

                </fieldset>
            </div>
        );
    }
}