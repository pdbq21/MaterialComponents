/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Subheader = ({
                       children,
                       className,
                       elementType,
                       ...otherProp
                   }) => {
    const classes = classnames('mdc-list-group__subheader', className);
    const ElementType = elementType || 'h3';
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Subheader;