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
const Body = ({
                  children,
                  className,
                  scrollable,
                  elementType,
                  ...otherProp
              }) => {
    const ElementType = elementType || 'section';
    const classes = classnames('mdc-dialog__body', {
        'mdc-dialog__body--scrollable': scrollable
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Body.propTypes = propTypes;
export default Body;