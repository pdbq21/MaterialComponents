/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import classnames from 'classnames';

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

export default Switch;