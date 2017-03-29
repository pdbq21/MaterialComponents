/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';

//import '@material/radio/dist/mdc.radio.css';
//import {default as TestRadio} from './test/Radio'
import {
    Radio,
    RadioInput,
    RadioLabel
} from '../../app/lib'
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
                        <RadioLabel id="my-radio-label" for="my-radio-demo">Radio 1</RadioLabel>
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
                        <RadioLabel id="my-radio-label" for="my-radio-demo">Radio 2</RadioLabel>
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
                        <RadioLabel id="my-radio-label" for="my-radio-demo">Radio 1</RadioLabel>
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
                        <RadioLabel id="my-radio-label" for="my-radio-demo">Radio 2</RadioLabel>
                    </div>
                </fieldset>
            </div>
        );
    }

}