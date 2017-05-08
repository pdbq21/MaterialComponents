/**
 * Created by ruslan on 30.03.17.
 */
import React from 'react';

//import RippleSelect from './test/Ripple'

import {Ripple} from '../../app/lib'
export default class RippleComponent extends React.PureComponent {

    render() {
        return (
            <div >

                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Ripple Component</legend>
                    <div>
                        <h2>Bounded</h2>
                        <Ripple>

                            <div className="mdc-elevation--z2"
                                 tabIndex="0"
                                 style={{
                                     'height': '10em',
                                     'width': '10em'
                                 }}
                            >
                                Interact with me!
                            </div>
                        </Ripple>
                    </div>
<h2>Unbounded</h2>
                    <div>
                        <Ripple
                            unbounded
                        >
                            <div className="material-icons demo-surface"
                                 aria-label="Favorite"
                                 tabIndex="0"
                            >
                                favorite
                            </div>
                        </Ripple>
                    </div>
                    <h2>Theme Styles</h2>
                    <div>
                        <Ripple
                            unbounded
                        >
                            <div className="demo-surface material-icons"
                                 tabIndex="0"
                                 aria-label="Favorite"
                            >
                                favorite
                            </div>
                        </Ripple>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Only CSS</legend>
                    <div>

                    </div>
                </fieldset>
            </div>
        );
    }
}