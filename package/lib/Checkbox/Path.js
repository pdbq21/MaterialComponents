/**
 * Created by ruslan on 04.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Path = ({
                  stroke,
                  fill,
                  d,
                  className,
                  ...otherProp
              }) => {
    const classes = classnames('mdc-checkbox__checkmark__path', className);
    return (
        <path
            className={classes}
            fill={fill || "none"}
            stroke={stroke || "white"}
            d={d || "M1.73,12.91 8.1,19.28 22.79,4.59"}
            {...otherProp}
        />
    );
};

export default Path;