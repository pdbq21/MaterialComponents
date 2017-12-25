/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Tile = ({
                   children,
                   className,
                   elementType,
                   ...otherProp
               }) => {
    const ElementType =  elementType || 'li';
    const classes = classnames('mdc-grid-tile', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Tile;