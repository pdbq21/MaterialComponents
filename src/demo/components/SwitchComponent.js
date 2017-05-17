/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';

import '@material/switch/dist/mdc.switch.min.css';
import {
    Switch,
    SwitchInput,
    SwitchLabel
} from '../../app/index'
export default function SwitchComponent() {

    return (
        <div>
            <fieldset>
                <legend>Only CSS Switch</legend>
                <section>
                    <Switch>
                        <SwitchInput id="basic-switch"/>
                    </Switch>
                    <SwitchLabel htmlFor="basic-switch">off/on</SwitchLabel>
                </section>

            </fieldset>
            <fieldset>
                <legend>Disabled Switch</legend>
                <section>
                    <Switch disabled>
                        <SwitchInput id="another-basic-switch" disabled />
                    </Switch>
                    <SwitchLabel htmlFor="another-basic-switch">off/on</SwitchLabel>
                </section>

            </fieldset>
        </div>
    );
}