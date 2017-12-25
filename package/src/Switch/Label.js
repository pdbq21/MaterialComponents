/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Label = ({
                   children,
                   className,
                   elementType,
                   ...otherProp
               }) => {
    const classes = classnames('mdc-switch-label', className);
    const ElementType = elementType || 'label';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Label;