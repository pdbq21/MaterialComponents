/**
 * Created by ruslan on 16.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Simple = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-simple-menu', className);
    const ElementType =  elementType || 'div';
    return (
        <ElementType className={classes}
                     tabindex='-1'
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Simple.propTypes = propTypes;
export default Simple;