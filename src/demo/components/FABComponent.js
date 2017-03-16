/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';

import {
    FAB
} from '../../app/lib'

export default function FABComponent() {

    return (
        <div >
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <fieldset>
                <legend>FAB only CSS</legend>
                <h3>FAB Default</h3>
                <FAB icon>favorite</FAB>
                <h3>FAB mini</h3>
                <FAB icon mini>favorite</FAB>
                <h3>FAB plain</h3>
                <FAB icon plain>favorite</FAB>
                <h3>FAB plain + mini</h3>
                <FAB icon plain mini>favorite</FAB>
            </fieldset>
            <fieldset>
                <legend>FAB Disabled</legend>
                <h3>FAB Default</h3>
                <FAB icon disabled>favorite</FAB>
                <h3>FAB mini</h3>
                <FAB icon mini disabled>favorite</FAB>
                <h3>FAB plain</h3>
                <FAB icon plain disabled>favorite</FAB>
                <h3>FAB plain + mini</h3>
                <FAB icon plain mini disabled>favorite</FAB>
            </fieldset>
            <fieldset>
                <legend>FAB Ripple</legend>
                <h3>Coming...</h3>

            </fieldset>
        </div>
    );
}