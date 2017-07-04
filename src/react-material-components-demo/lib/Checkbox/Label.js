/**
 * Created by ruslan on 29.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
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

Label.propTypes = propTypes;
export default Label;