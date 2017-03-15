/**
 * Created by ruslan on 15.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Text = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-list-item__text',  className);
    const ElementType =  elementType || 'span';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Text.propTypes = propTypes;
export default Text;