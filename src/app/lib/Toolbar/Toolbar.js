/**
 * Created by ruslan on 16.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,
};
const Toolbar = ({
    children,
    className,
    elementType,
    fixed,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-toolbar', {
            'mdc-toolbar--fixed': fixed
        }, className);
    const ElementType = elementType || 'header';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
                {children}
        </ElementType>);
};

Toolbar.propTypes = propTypes;
export default Toolbar;