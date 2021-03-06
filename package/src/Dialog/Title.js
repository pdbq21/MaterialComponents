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
const Title = ({
                   children,
                   className,
                   elementType,
                   ...otherProp
               }) => {
    const ElementType = elementType || 'h2';
    const classes = classnames('mdc-dialog__header__title', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Title.propTypes = propTypes;
export default Title;