/**
 * Created by ruslan on 30.03.17.
 */
import React from 'react';

import RippleSelect from './test/Ripple'
import {Elevation} from '../../app/lib'
export default class RippleComponent extends React.PureComponent {

    render() {
        return (
            <div >
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <legend>Ripple Component</legend>
                    <div>
                        <RippleSelect>
                            <Elevation zSpace="2" style={{'wight': '20em', 'height': '20em'}} />
                        </RippleSelect>
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