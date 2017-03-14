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
            'adjust-margin': adjustMargin,
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