/**
 * Created by ruslan on 20.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    floatAbove: PropTypes.bool,
};
const Label = ({
    children,
    className,
    elementType,
    floatAbove,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-textfield__label', {
            'mdc-textfield__label--float-above': floatAbove
        }, className);
    const ElementType = elementType || 'label';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Label.propTypes = propTypes;
export default Label;