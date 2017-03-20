/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';

import {FormField} from '../../app/lib'
import {
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    TextfieldHelprext
} from '../../app/lib'
export default function DrawerComponent() {

    return (
        <div >
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <fieldset>
                <legend>Textfield</legend>
                <div>
                    <h3>Only CSS</h3>
                    <FormField alignEnd>
                        <label style={{'alignSelf': 'flex-start'}} htmlFor="textfield-only-css">Hint text: </label>
                        <Textfield>
                            <TextfieldInput id="textfield-only-css" placeholder="Hint text" />
                        </Textfield>
                    </FormField>
                </div>

                <div>
                    <h3>Multi-line Textfields - CSS Only</h3>
                    <label htmlFor="css-only-multiline">About you:</label>
                    <Textfield multiline>
                        <TextfieldInput
                            elementType="textarea"
                            id="css-only-multiline"
                            rows="8"
                            cols="40"
                            placeholder="Tell the world something about yourself!"
                        />
                    </Textfield>
                </div>
                <div>
                    <div className="mdc-textfield">
                        <input type="text" id="my-textfield" className="mdc-textfield__input" />
                            <label className="mdc-textfield__label" htmlFor="my-textfield">Hint text</label>
                    </div>
                    <label className="mdc-textfield">
                        <input type="text" className="mdc-textfield__input" />
                            <span className="mdc-textfield__label">Hint Text</span>
                    </label>
                    <label htmlFor="textfield-no-js">Textfield with no JS: </label>
                    <div className="mdc-textfield">
                        <input type="text" id="textfield-no-js" className="mdc-textfield__input" placeholder="Hint text" />
                    </div>
                </div>
            </fieldset>
        </div>
    );
}