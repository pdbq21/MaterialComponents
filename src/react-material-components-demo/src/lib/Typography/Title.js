/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    adjustMargin: PropTypes.bool,

};
const Title = ({
    children,
    className,
    adjustMargin,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'h2';
    const classes = classnames(
        'mdc-typography--title', {
            'mdc-typography--adjust-margin': adjustMargin,
        }, className);
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