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

Tiles.propTypes = propTypes;
export default Tiles;