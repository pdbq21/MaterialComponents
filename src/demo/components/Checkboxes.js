/**
 * Created by ruslan on 08.03.17.
 */
import React from 'react'
import {
    CheckboxLabel,
    Checkbox
} from '../../app/lib'
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
                        <Checkbox id="my-checkbox"
                                  labelId="my-checkbox-label"
                                  disabled={disabled}
                                  indeterminate={indeterminate}
                                  onChange={({target}) => this.setState({
                                      checked: target.checked,
                                      indeterminate: false
                                  })}
                                  ripple
                        />
                        <CheckboxLabel id="my-checkbox-label" htmlFor="my-checkbox">
                            The checkbox is currently
                        </CheckboxLabel>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Only CSS Checkbox</legend>
                    <Checkbox indeterminate={indeterminate} disabled={disabled} />
                </fieldset>
                <fieldset>
                    <legend>Disabled Checkbox</legend>
                    <Checkbox disabled />
                </fieldset>
                /* todo: Dark Theme*/
            </div>
        );
    }
}
