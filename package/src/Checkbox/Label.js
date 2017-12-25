/**
 * Created by ruslan on 29.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Label = ({
                  children,
                  className,
                  ...otherProp
              }) => {
    const classes = classnames('mdc-checkbox-label', className);
    return (
        <label
            className={classes}
            {...otherProp}
        >
            {children}
        </label>);
};

export default Label;