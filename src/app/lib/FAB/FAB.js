/**
 * Created by ruslan on 16.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.bool,
    mini: PropTypes.bool,
    plain: PropTypes.bool,
};
const FAB = ({
    children,
    className,
    elementType,
    icon,
    mini,
    plain,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-fab', {
            'material-icons': icon,
            'mdc-fab--mini': mini,
            'mdc-fab--plain': plain,
        }, className);
    const ElementType = elementType || 'button';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            <span className="mdc-fab__icon">
                {children}
            </span>
        </ElementType>);
};

FAB.propTypes = propTypes;
export default FAB;