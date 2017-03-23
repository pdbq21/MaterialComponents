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
import {textfield as test}  from 'material-components-web/dist/material-components-web';
const {MDCTextfield, MDCTextfieldFoundation} = test;

import {default as TestFoundation} from './testFoundation'

export default class TextfieldComponent extends React.Component {
    componentDidMount() {
        //MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
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
                        <h3>Label float above</h3>
                        <Textfield>
                            <TextfieldInput id="demo-label-above" type="text"/>
                            <TextfieldLabel htmlFor="demo-label-above">Label float above</TextfieldLabel>
                        </Textfield>
                    </div>

                    /*test*/
                    {/*
                    <div>
                        <div className="mdc-textfield">
                            <input type="text" id="my-textfield-1" className="mdc-textfield__input" />
                            <label className="mdc-textfield__label" htmlFor="my-textfield-1">Hint text</label>
                        </div>
                    </div>

                    <div>
                        <div className="mdc-textfield mdc-textfield--focused">
                            <input type="text" id="my-textfield-2" className="mdc-textfield__input" />
                            <label className="mdc-textfield__label mdc-textfield__label--float-above" htmlFor="my-textfield-2">Hint text</label>
                        </div>
                    </div>
                     */}
                    <div>
                        <TestFoundation >
                            <TestFoundation />
                        </TestFoundation>
                    </div>
                    <div>
                        <TestFoundation />
                    </div>
                </fieldset>
            </div>
        );
    }
}