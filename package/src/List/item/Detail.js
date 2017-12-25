/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const StartDetail = ({
    children,
    className,
    elementType,
    icon,
    start,
    end,
    ...otherProp
}) => {
    const classes = classnames({
        'material-icons': icon,
        'mdc-list-item__start-detail': start,
        'mdc-list-item__end-detail': end
    }, className);
    const ElementType = elementType || 'span';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

export default StartDetail;