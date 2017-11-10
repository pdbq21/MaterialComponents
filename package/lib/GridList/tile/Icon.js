/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Icon = ({
                       children,
                       className,
                       elementType,
                       icon,
                       ...otherProp
                   }) => {
    const ElementType =  elementType || 'i';
    const classes = classnames('mdc-grid-tile__icon', {
        'material-icons': icon
    }, className);

    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Icon;