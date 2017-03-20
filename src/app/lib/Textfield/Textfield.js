/**
 * Created by ruslan on 20.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    upgraded: PropTypes.bool,
    multiline: PropTypes.bool,
    fullwidth: PropTypes.bool,
};
const Textfield = ({
    children,
    className,
    elementType,
    disabled,
    upgraded,
    multiline,
    fullwidth,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-textfield', {
            'mdc-textfield--disabled': disabled,
            'mdc-textfield--upgraded': upgraded,
            'mdc-textfield--multiline': multiline,
            'mdc-textfield--fullwidth': fullwidth
        }, className);
    const ElementType = elementType || 'div';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Textfield.propTypes = propTypes;
export default Textfield;