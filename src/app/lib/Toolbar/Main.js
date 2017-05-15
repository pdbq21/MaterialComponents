/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,
};
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

Main.propTypes = propTypes;
export default Main;