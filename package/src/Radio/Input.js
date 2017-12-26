/**
 * Created by ruslan on 29.03.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Input ({
            className,
            ...otherProps
        }){
        const classes = classnames('mdc-radio__native-control', className);
        return (
            <input
                className={classes}
                {...otherProps}
                type="radio"
            />);
}
