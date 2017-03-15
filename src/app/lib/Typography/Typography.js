/**
 * Created by ruslan on 14.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    adjustMargin: PropTypes.bool,
};
const Typography = ({
    children,
    className,
    adjustMargin,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-typography', {
            'adjust-margin': adjustMargin,
        }, className);
    const ElementType =  elementType || 'section';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Typography.propTypes = propTypes;
export default Typography;