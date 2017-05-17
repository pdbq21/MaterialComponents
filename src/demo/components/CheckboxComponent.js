/**
 * Created by ruslan on 08.03.17.
 */
import React from 'react'
import {
    Checkbox,
    CheckboxLabel,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxInput,
    CheckboxMixedmark,
    CheckboxPath
} from '../../app/index'
export default class Checkboxes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            disabled: false,
            indeterminate: false
        };
        this.handelIndeterminate = this.handelIndeterminate.bind(this);
        this.handelDisabled = this.handelDisabled.bind(this);
    }

    handelIndeterminate() {
        this.setState({
            indeterminate: true
        })
    }

    handelDisabled() {
        this.setState({
            disabled: !this.state.disabled
        })
    }

    render() {
        const {disabled, indeterminate} = this.state;
        return (
            <div>
                <fieldset>
                    <legend>Checkbox</legend>
                    <button onClick={this.handelIndeterminate}>Make indeterminate</button>
                    <button onClick={this.handelDisabled}>Toggle Disabled</button>
                    <div>
                        <Checkbox
                            ripple
                            disabled={disabled}
                        >
                            <CheckboxInput
                                id="my-checkbox"
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                    indeterminate: false
                                })}
                                aria-labelledby="my-checkbox-label"
                                disabled={disabled}
                                indeterminate={indeterminate}
                            />
                            <CheckboxBackground>
                                <CheckboxCheckmark>
                                    <CheckboxPath/>
                                </CheckboxCheckmark>
                                <CheckboxMixedmark/>
                            </CheckboxBackground>
                        </Checkbox>

                        <CheckboxLabel id="my-checkbox-label" htmlFor="my-checkbox">
                            The checkbox is currently
                        </CheckboxLabel>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Only CSS Checkbox</legend>
                    <Checkbox
                        disabled={disabled}
                    >
                        <CheckboxInput
                            onChange={({target}) => this.setState({
                                checked: target.checked,
                                indeterminate: false
                            })}
                            disabled={disabled}
                            indeterminate={indeterminate}
                        />
                        <CheckboxBackground>
                            <CheckboxCheckmark>
                                <CheckboxPath/>
                            </CheckboxCheckmark>
                            <CheckboxMixedmark/>
                        </CheckboxBackground>
                    </Checkbox>
                </fieldset>
                <fieldset>
                    <legend>Disabled Checkbox</legend>
                    <Checkbox
                        disabled
                    >
                        <CheckboxInput
                            onChange={({target}) => this.setState({
                                checked: target.checked,
                                indeterminate: false
                            })}
                            disabled={true}
                        />
                        <CheckboxBackground>
                            <CheckboxCheckmark>
                                <CheckboxPath/>
                            </CheckboxCheckmark>
                            <CheckboxMixedmark/>
                        </CheckboxBackground>
                    </Checkbox>
                </fieldset>
                /* todo: Dark Theme*/
            </div>
        );
    }
}
