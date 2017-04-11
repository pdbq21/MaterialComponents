/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dense: PropTypes.bool,
    twoLine: PropTypes.bool,
    avatar: PropTypes.bool,
};
const List = ({
    children,
    className,
    dense,
    twoLine,
    avatar,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-list', {
           'mdc-list--dense': dense,
           'mdc-list--two-line': twoLine,
           'mdc-list--avatar-list': avatar,
        }, className);
    const ElementType =  elementType || 'ul';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

List.propTypes = propTypes;
export default List;