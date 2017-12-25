/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Content = ({
                     children,
                     className,
                     elementType,
                     ...otherProp
                 }) => {
    const ElementType =  elementType || 'img';
    const classes = classnames('mdc-grid-tile__primary-content', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Content;