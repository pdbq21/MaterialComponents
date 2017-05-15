/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {TextfieldInput} from '../index'

export default class Input extends PureComponent {

    render() {
        const {children, handleInput, onChange, value, valueInput, ...otherProps} = this.props;
        return (
            <TextfieldInput
                onChange={onChange || handleInput}
                value={value || valueInput}
                {...otherProps}
            >
                {children}
            </TextfieldInput>
        );
    }
}