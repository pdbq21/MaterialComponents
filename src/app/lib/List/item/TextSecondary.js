/**
 * Created by ruslan on 15.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const TextSecondary = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-list-item__text__secondary',  className);
    const ElementType =  elementType || 'span';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

TextSecondary.propTypes = propTypes;
export default TextSecondary;