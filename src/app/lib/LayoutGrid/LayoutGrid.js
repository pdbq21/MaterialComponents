/**
 * Created by ruslan on 15.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const LayoutGrid = ({
    children,
    className,
    elementType,
    margin,
    gutter,
    style,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-layout-grid', className);
    const ElementType =  elementType || 'div';
    let styles = {
        '--mdc-layout-grid-margin': '16px',
        '--mdc-layout-grid-gutter': '16px'
    };


    if (margin){
        styles = {
            ...styles,
            '--mdc-layout-grid-margin': margin
        };
    }

    if (gutter){
        styles = {
            ...styles,
            '--mdc-layout-grid-gutter': gutter
        };
    }


    return (
        <ElementType className={classes}
                     style={{...style, styles}}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

LayoutGrid.propTypes = propTypes;
export default LayoutGrid;