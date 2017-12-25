/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const List = ({
                  children,
                  className,
                  dense,
                  twoLine,
                  avatar,
                  itemsRef,
                  elementType,
                  ...otherProp
              }) => {
    const classes = classnames(
        'mdc-list', {
            'mdc-list--dense': dense,
            'mdc-list--two-line': twoLine,
            'mdc-list--avatar-list': avatar,
        }, className);
    const ElementType = elementType || 'ul';
    return (
        <ElementType
            ref={itemsRef || null}
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default List;