/**
 * Created by ruslan on 14.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    large: PropTypes.bool,
};
const Title = ({
    children,
    className,
    large,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'h1';
    const classes = classnames(
        'mdc-card__title', {
            'mdc-card__title--large': large
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