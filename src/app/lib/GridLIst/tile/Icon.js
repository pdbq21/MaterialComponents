/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.bool,
};
const Icon = ({
                       children,
                       className,
                       elementType,
                       icon,
                       ...otherProp
                   }) => {
    const ElementType =  elementType || 'i';
    const classes = classnames('mdc-grid-tile__icon', {
        'material-icons': icon
    }, className);

    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Icon.propTypes = propTypes;
export default Icon;