/**
 * Created by ruslan on 14.03.17.
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
};
const Typography = ({
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
        'mdc-typography', {
            'mdc-button--accent': accent,
            'mdc-button--compact': compact,
            'mdc-button--dense': dense,
            'mdc-button--primary': primary,
            'mdc-button--raised': raised,
            'adjust-margin': adjustMargin,
        }, className);
    const ElementType =  elementType || 'div';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Typography.propTypes = propTypes;
export default Typography;