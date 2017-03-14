/**
 * Created by ruslan on 14.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Primary = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'section';
    const classes = classnames(
        'mdc-card__primary', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Primary.propTypes = propTypes;
export default Primary;