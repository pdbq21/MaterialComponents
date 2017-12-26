/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
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

Tile.propTypes = propTypes;
export default Tile;