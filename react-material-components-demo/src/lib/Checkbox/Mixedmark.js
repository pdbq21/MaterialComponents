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
const Mixedmark = ({
                        children,
                        className,
                        elementType,
                        ...otherProp
                    }) => {
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-checkbox__mixedmark', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};
Mixedmark.propTypes = propTypes;
export default Mixedmark;