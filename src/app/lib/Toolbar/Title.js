/**
 * Created by ruslan on 16.03.17.
 */
import React, {PropTypes} from 'react';
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
    const classes = classnames(
        'mdc-toolbar__title', className);
    const ElementType = elementType || 'span';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Title.propTypes = propTypes;
export default Title;