/**
 * Created by ruslan on 15.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    inset: PropTypes.bool,
};
const Divider = ({
    children,
    className,
    elementType,
    inset,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-list-divider', {
            'mdc-list-divider--inset': inset
        }, className);
    const ElementType =  elementType || 'li';
    return (
        <ElementType className={classes}
                     role="separator"
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Divider.propTypes = propTypes;
export default Divider;