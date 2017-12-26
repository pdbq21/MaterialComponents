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
const Content = ({
                     children,
                     className,
                     elementType,
                     ...otherProp
                 }) => {
    const ElementType =  elementType || 'img';
    const classes = classnames('mdc-grid-tile__primary-content', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Content.propTypes = propTypes;
export default Content;