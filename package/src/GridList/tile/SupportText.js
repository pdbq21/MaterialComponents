/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const SupportText = ({
                   children,
                   className,
                   elementType,
                   ...otherProp
               }) => {
    const ElementType =  elementType || 'span';
    const classes = classnames('mdc-grid-tile__support-text', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default SupportText;