/**
 * Created by ruslan on 08.03.17.
 */

import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    elementType: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
};
const Button = ({
    accent,
    children,
    className,
    compact,
    dense,
    primary,
    raised,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-button', {
            'mdc-button--accent': accent,
            'mdc-button--compact': compact,
            'mdc-button--dense': dense,
            'mdc-button--primary': primary,
            'mdc-button--raised': raised,
        }, className);
    const ElementType =  elementType || 'button';
    return (
        <ElementType className={classes}
                {...otherProp}
        >
            {children}
        </ElementType>);
};

Button.propTypes = propTypes;
export default Button;