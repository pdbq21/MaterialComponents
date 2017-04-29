/**
 * Created by ruslan on 29.04.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
};
const Footer = ({
                  children,
                  className,
                  id,
                  elementType,
                  ...otherProp
              }) => {
    const ElementType = elementType || 'footer';
    const classes = classnames('mdc-dialog__footer', className);
    return (
        <ElementType
            className={classes}
            id={id}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Footer.propTypes = propTypes;
export default Footer;