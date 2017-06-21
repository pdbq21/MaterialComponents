/**
 * Created by ruslan on 29.04.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Header = ({
                    children,
                    className,
                    elementType,
                    ...otherProp
                }) => {
    const ElementType = elementType || 'header';
    const classes = classnames('mdc-dialog__header', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Header.propTypes = propTypes;
export default Header;