/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {TextfieldInput} from '../index'

export default class Input extends PureComponent {

    render() {
        const {
            children,
            handleInput,
            onChange,
            value,
            onClick,
            handleClickInput,
            valueInput,
            ...otherProps} = this.props;
        return (
            <TextfieldInput
                onClick={onClick || handleClickInput}
                onChange={onChange || handleInput}
                value={value || valueInput}
                {...otherProps}
            >
                {children}
            </TextfieldInput>
        );
    }
}