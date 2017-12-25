/**
 * Created by ruslan on 04.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Checkmark = ({
                       children,
                       viewBox,
                       className,
                       xmlns,
                       ...otherProp
                   }) => {
    const classes = classnames('mdc-checkbox__checkmark', className);
    return (
        <svg

            version="1.1"
            className={classes}
            xmlns={ xmlns || "http://www.w3.org/2000/svg"}
            viewBox={viewBox || "0 0 24 24"}
            {...otherProp}
        >
            {children}
        </svg>);
};

export default Checkmark;