/**
 * Created by ruslan on 30.03.17.
 */
import React from 'react';

//import RippleSelect from './test/Ripple'

import {Ripple} from '../../app/lib'
import '@material/ripple/dist/mdc.ripple.css';
export default class RippleComponent extends React.PureComponent {

    render() {
        return (
            <div >

                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Ripple Component</legend>
                    <div>
                        <Ripple>
                            <div className="mdc-ripple-surface material-icons"
                                 aria-label="Favorite"
                                 tabIndex="0"
                            >
                                favorite
                            </div>
                        </Ripple>
                    </div>
                    <div>
                        <Ripple>
                            <div
                                className="mdc-ripple-surface mdc-elevation--z2"
                                tabIndex="0"
                            >
                                button
                            </div>
                        </Ripple>
                        <Ripple>
                            <div
                                className="mdc-button test-ripple mdc-elevation--z2"
                                tabIndex="0"
                            >
                                button
                            </div>
                        </Ripple>
                    </div>

                </fieldset>
                <fieldset>
                    <legend>Only CSS</legend>
                    <div>
                        <Ripple>

                        <div className="mdc-ripple-surface mdc-elevation--z2" tabIndex="0">
                            Interact with me!
                        </div>
                        </Ripple>
                    </div>
                </fieldset>
            </div>
        );
    }
}