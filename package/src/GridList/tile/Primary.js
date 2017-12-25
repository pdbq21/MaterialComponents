/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Primary = ({
                  children,
                  className,
                  elementType,
                  ...otherProp
              }) => {
    const ElementType =  elementType || 'div';
    const classes = classnames('mdc-grid-tile__primary', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Primary;