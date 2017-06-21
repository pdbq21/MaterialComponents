/**
 * Created by ruslan on 04.05.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Background = ({
                    children,
                    className,
                    elementType,
                    ...otherProp
                }) => {
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-checkbox__background', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};
Background.propTypes = propTypes;
export default Background;