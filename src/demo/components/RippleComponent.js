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
                        <Ripple>
                            <div className="mdc-ripple-surface mdc-elevation--z2"
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