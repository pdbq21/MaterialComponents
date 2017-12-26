/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';
import classnames from 'classnames';

function Permanent ({elementType, children, className, ...otherProps}){
        const ElementType = elementType || 'nav';
        const classes = classnames('mdc-permanent-drawer', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}

export default Permanent;