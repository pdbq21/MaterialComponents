/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Tiles = ({
                  children,
                  className,
                  elementType,
                  ...otherProp
              }) => {
    const ElementType =  elementType || 'ul';
    const classes = classnames('mdc-grid-list__tiles', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Tiles;