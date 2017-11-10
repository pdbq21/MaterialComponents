/**
 * Created by ruslan on 29.04.17.
 */
import React from 'react';
import classnames from 'classnames';

const Body = ({
                  children,
                  className,
                  scrollable,
                  elementType,
                  ...otherProp
              }) => {
    const ElementType = elementType || 'section';
    const classes = classnames('mdc-dialog__body', {
        'mdc-dialog__body--scrollable': scrollable
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Body;