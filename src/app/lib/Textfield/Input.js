/**
 * Created by ruslan on 20.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Input = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-textfield__input', className);
    const ElementType = elementType || 'input';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Input.propTypes = propTypes;
export default Input;