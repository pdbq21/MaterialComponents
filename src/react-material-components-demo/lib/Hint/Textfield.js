/**
 * Created by ruslan on 15.05.17.
 */
import React from 'react';
import {TextField} from '../index'

export default function HintTextfield ({
            valueInput,
            handleInput,
            handleClickInput,
            handleInputBlur,
            children,
            ...otherProps
        }){
        const childElement = child => {
            if (child.type.name === 'Input') {
                return React.cloneElement(child, {
                    valueInput: valueInput,
                    handleInput: handleInput,
                    handleClickInput: handleClickInput,
                    handleInputBlur: handleInputBlur,
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);

        return (
            <TextField
                {...otherProps}
            >
                {renderChildren}
            </TextField>
        );
}