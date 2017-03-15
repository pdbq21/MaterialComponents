/**
 * Created by ruslan on 15.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const ListItem = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-list-item',  className);
    const ElementType =  elementType || 'li';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

ListItem.propTypes = propTypes;
export default ListItem;