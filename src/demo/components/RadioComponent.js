/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';

//import '@material/radio/dist/mdc.radio.css';
//import {default as TestRadio} from './test/Radio'
import {
    Radio,
    RadioInput
} from '../../app/index'
export default class RadioComponent extends React.PureComponent {

    state = {
        checked: false,
        disabled: false,
    }

    render() {
        const {disabled} = this.state;
        return (
            <div >
                <fieldset>
                    <legend>Radio with JS</legend>
                    <div>
                        <Radio
                            ripple
                            disabled={disabled}
                        >
                            <RadioInput
                                id="my-radio-demo"
                                name="radios"
                                disabled={disabled}
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                })}
                            />
                        </Radio>
                        <label id="my-radio-label" htmlFor="my-radio-demo">Radio 1</label>
                        <Radio
                            ripple
                            disabled={disabled}
                        >
                            <RadioInput
                                id="my-radio-demo"
                                name="radios"
                                disabled={disabled}
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                })}
                            />
                        </Radio>
                        <label id="my-radio-label" htmlFor="my-radio-demo">Radio 2</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Only CSS</legend>
                    <div>
                        <Radio disabled={disabled}>
                            <RadioInput
                                id="my-radio-demo"
                                name="radios"
                                disabled={disabled}
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                })}
                            />
                        </Radio>
                        <label id="my-radio-label" htmlFor="my-radio-demo">Radio 1</label>
                        <Radio disabled={disabled}>
                            <RadioInput
                                id="my-radio-demo"
                                name="radios"
                                disabled={disabled}
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                })}
                            />
                        </Radio>
                        <label id="my-radio-label" htmlFor="my-radio-demo">Radio 2</label>
                    </div>
                    <div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Disabled Radio</legend>
                    <div>
                        <Radio disabled>
                            <RadioInput
                                id="my-radio-demo"
                                name="radios"
                                disabled
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                })}
                            />
                        </Radio>
                        <label id="my-radio-label" htmlFor="my-radio-demo">Radio 1</label>
                        <Radio disabled>
                            <RadioInput
                                id="my-radio-demo"
                                name="radios"
                                disabled
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                })}
                            />
                        </Radio>
                        <label id="my-radio-label" htmlFor="my-radio-demo">Radio 2</label>
                    </div>
                </fieldset>
            </div>
        );
    }

}