/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Divider = ({
                     children,
                     className,
                     elementType,
                     inset,
                     role,
                     ...otherProp
                 }) => {
    const classes = classnames(
        'mdc-list-divider', {
            'mdc-list-divider--inset': inset
        }, className);
    const ElementType = elementType || 'li';
    return (
        <ElementType
            className={classes}
            role={role || "separator"}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Divider;