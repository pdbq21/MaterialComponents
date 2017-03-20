/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';

import {textfield as test}  from 'material-components-web/dist/material-components-web';
const {MDCTextfield, MDCTextfieldFoundation} = test;

import {FormField} from '../../app/lib'
import {
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    TextfieldHelprext
} from '../../app/lib'
export default class DrawerComponent extends React.Component {
    componentDidMount() {
        MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
    }

    render() {
        return (
            <div >
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                {/*
                <fieldset>
                    <legend>Textfield Only CSS</legend>
                    <div>
                        <h3>Only CSS</h3>
                        <FormField alignEnd>
                            <label style={{'alignSelf': 'flex-start'}} htmlFor="textfield-only-css">Hint text: </label>
                            <Textfield>
                                <TextfieldInput id="textfield-only-css" placeholder="Hint text"/>
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
                        <h3>Full-Width Textfields</h3>
                        <Textfield upgraded fullwidth>
                            <TextfieldInput
                                type="text"
                                placeholder="Subject"
                                aria-label="Subject"
                            />
                        </Textfield>
                        <Textfield multiline upgraded fullwidth>
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
*/}
                <fieldset>
                    <legend>Textfield JS</legend>
                    <div>
                        <div className="mdc-textfield">
                            <input type="text" id="my-textfield" className="mdc-textfield__input" />
                            <label className="mdc-textfield__label" htmlFor="my-textfield">Hint text</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
}