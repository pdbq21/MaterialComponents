/**
 * Created by ruslan on 30.04.17.
 */
import React from 'react';
import classnames from 'classnames';

const Input = ({
                   id,
                   disabled,
                   className,
                   ...otherProp
               }) => {
    const classes = classnames('mdc-switch__native-control', className);
    return (
        <input
            type="checkbox"
            id={id}
            className={classes}
            disabled={disabled}
            {...otherProp}
        />);
};

export default Input;