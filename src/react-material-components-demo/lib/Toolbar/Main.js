/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Main = ({
                  children,
                  className,
                  elementType,
                  fixed,
                  ...otherProp
              }) => {
    const classes = classnames({'mdc-toolbar-fixed-adjust': fixed}, className);
    const ElementType = elementType || 'main';
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Main;