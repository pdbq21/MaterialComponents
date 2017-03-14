/**
 * Created by ruslan on 14.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    adjustMargin: PropTypes.bool,
};
const Caption = ({
    children,
    className,
    adjustMargin,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'p';
    const classes = classnames(
        'mdc-typography--caption', {
            'adjust-margin': adjustMargin
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Caption.propTypes = propTypes;
export default Caption;