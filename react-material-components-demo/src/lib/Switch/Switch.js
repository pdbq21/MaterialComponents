/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};
const Switch = ({
    children,
    className,
    elementType,
    disabled,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-switch', {
            'mdc-switch--disabled': disabled
        }, className);
    const ElementType = elementType || 'div';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
            <div className="mdc-switch__background">
                <div className="mdc-switch__knob">
                </div>
            </div>
        </ElementType>);
};

Switch.propTypes = propTypes;
export default Switch;