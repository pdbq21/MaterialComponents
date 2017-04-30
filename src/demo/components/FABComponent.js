/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';

import {
    FAB,
    FABIcon
} from '../../app/lib'

export default function FABComponent() {

    return (
        <div >
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <fieldset>
                <legend>FAB Ripple</legend>
                <h3>FAB Default</h3>
                <FAB ripple icon><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB mini</h3>
                <FAB ripple icon mini><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB plain</h3>
                <FAB ripple icon plain><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB plain + mini</h3>
                <FAB ripple icon plain mini><FABIcon>favorite</FABIcon></FAB>
            </fieldset>
            <fieldset>
                <legend>FAB only CSS</legend>
                <h3>FAB Default</h3>
                <FAB icon><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB mini</h3>
                <FAB icon mini><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB plain</h3>
                <FAB icon plain><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB plain + mini</h3>
                <FAB icon plain mini><FABIcon>favorite</FABIcon></FAB>
            </fieldset>
            <fieldset>
                <legend>FAB Disabled</legend>
                <h3>FAB Default</h3>
                <FAB icon disabled><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB mini</h3>
                <FAB icon mini disabled><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB plain</h3>
                <FAB icon plain disabled><FABIcon>favorite</FABIcon></FAB>
                <h3>FAB plain + mini</h3>
                <FAB icon plain mini disabled><FABIcon>favorite</FABIcon></FAB>
            </fieldset>
        </div>
    );
}