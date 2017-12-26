/**
 * Created by ruslan on 30.04.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    className: PropTypes.string,
};
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

Input.propTypes = propTypes;
export default Input;