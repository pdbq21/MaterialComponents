/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';

import '@material/switch/dist/mdc.switch.min.css';
import {
    Switch,
    SwitchLabel
} from '../../app/lib'
export default function SwitchComponent() {

    return (
        <div>
            <fieldset>
                <legend>Only CSS Switch</legend>
                <section>
                    <Switch forId="basic-switch"/>
                    <SwitchLabel htmlFor="basic-switch">off/on</SwitchLabel>
                </section>

            </fieldset>
            <fieldset>
                <legend>Disabled Switch</legend>
                <section>
                    <Switch forId="another-basic-switch" disabled/>
                    <SwitchLabel htmlFor="another-basic-switch">off/on</SwitchLabel>
                </section>

            </fieldset>
        </div>
    );
}