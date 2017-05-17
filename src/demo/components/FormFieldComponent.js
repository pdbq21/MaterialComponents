/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react'
import {
    FormField
} from '../../app/index'
export default class FormFieldComponent extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Form Field</legend>
                    <FormField>
                        <input type="checkbox" id="input"/>
                        <label htmlFor="input">Input Label</label>
                    </FormField>
                </fieldset>
                <fieldset>
                    <legend>Form Field Align End</legend>
                    <FormField alignEnd>
                        <input type="checkbox" id="input1"/>
                        <label htmlFor="input1">Input Label</label>
                    </FormField>
                </fieldset>
            </div>
        );
    }
}