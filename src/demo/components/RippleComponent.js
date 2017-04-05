/**
 * Created by ruslan on 30.03.17.
 */
import React from 'react';

import {default as TestRipple} from './test/Ripple'

export default class RippleComponent extends React.PureComponent {

    render() {
        return (
            <div >
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Ripple Component</legend>
                    <div>
                        <TestRipple />
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