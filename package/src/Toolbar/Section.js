/**
 * Created by ruslan on 16.03.17.
 */

import React from 'react';
import classnames from 'classnames';

export default function Section ({
            elementType,
            className,
            children,
            start,
            end,
            shrink,
            ...otherProps
        }){
        const classes = classnames(
            'mdc-toolbar__section', {
                'mdc-toolbar__section--align-start': start,
                'mdc-toolbar__section--align-end': end,
                'mdc-toolbar__section--shrink-to-fit': shrink,
            }, className);
        const ElementType = elementType || 'section';

        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}