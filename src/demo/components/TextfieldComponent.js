/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';

import {FormField} from '../../app/lib'
import {
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    TextfieldHelptext
} from '../../app/lib'

//import {default as TestFoundation} from './testFoundation'

export default class TextfieldComponent extends React.Component {

    render() {
        return (
            <div >
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

                <fieldset>
                    <legend>Textfield Only CSS</legend>
                    <div>
                        <h3>Only CSS</h3>
                        <FormField alignEnd>
                            <label style={{'alignSelf': 'flex-start'}} htmlFor="textfield-only-css">Hint text: </label>
                            <Textfield data-only-css>
                                <TextfieldInput id="textfield-only-css" placeholder="Hint text"/>
                            </Textfield>
                        </FormField>
                    </div>

                    <div>
                        <h3>Multi-line Textfields - CSS Only</h3>
                        <label htmlFor="css-only-multiline">About you:</label>
                        <Textfield
                            multiline
                            data-only-css
                        >
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
                        <h3>Full-Width Textfields</h3>
                        <Textfield upgraded fullwidth data-only-css>
                            <TextfieldInput
                                type="text"
                                placeholder="Subject"
                                aria-label="Subject"
                            />
                        </Textfield>
                        <Textfield multiline upgraded fullwidth data-only-css>
                            <TextfieldInput
                                elementType="textarea"
                                rows="8"
                                cols="40"
                                placeholder="Message"
                                aria-label="Message"
                            />
                        </Textfield>
                    </div>

                </fieldset>

                <fieldset>
                    <legend>Textfield JS</legend>

                    <div>
                        <h2>Full Functionality JS Component (Floating Label, Validation, Autocomplete)</h2>
                        <Textfield upgraded>
                            <TextfieldInput
                            id="demo-full-textfield"
                            name="email"
                            aria-controls="my-textfield-helptext"
                            required
                            />
                            <TextfieldLabel
                            htmlFor="demo-full-textfield"
                            >
                                Email Address
                            </TextfieldLabel>
                        </Textfield>
                        <TextfieldHelptext
                            aria-hidden="true"
                            persistent
                            validation
                        >
                            Help Text (possibly validation message)
                        </TextfieldHelptext>
                    </div>
                    <div>
                        <h3>Label float above</h3>
                        <Textfield>
                            <TextfieldInput id="demo-label-above" type="text"/>
                            <TextfieldLabel htmlFor="demo-label-above">Label float above</TextfieldLabel>
                        </Textfield>
                    </div>

                    <div>
                        <h3>Multi-line Textfields</h3>
                        <Textfield
                            multiline
                            upgraded
                        >
                            <TextfieldInput
                                elementType="textarea"
                                rows="8"
                                cols="40"
                                id="multi-line-demo"
                            />
                            <TextfieldLabel htmlFor="multi-line-demo">Multi-line Label</TextfieldLabel>
                        </Textfield>
                    </div>
                    <div>
                        <h3>Password field with validation</h3>
                        <Textfield
                            upgraded
                        >
                            <TextfieldInput
                                type="password"
                                id="password-validation-demo"
                                aria-controls="pw-validation-msg"
                                required
                                pattern=".{8,}"
                            />
                            <TextfieldLabel htmlFor="password-validation-demo">Choose password</TextfieldLabel>
                        </Textfield>
                        <TextfieldHelptext
                            persistent
                            validation
                            id="pw-validation-msg"
                        >
                            Must be at least 8 characters long
                        </TextfieldHelptext>
                    </div>
                </fieldset>
            </div>
        );
    }
}