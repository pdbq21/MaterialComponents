/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Cell = ({
                  children,
                  className,
                  elementType,
                  columns,// 1-12
                  desktop,// 1-12
                  tablet,// 1-12
                  phone,// 1-12
                  order,//1-12
                  position,// top, middle or bottom
                  ...otherProp
              }) => {
    const ElementType = elementType || 'div';
    const classNameColumns = (columns) ? `mdc-layout-grid__cell--span-${columns}` : '';
    const classNameDesktop = (desktop) ? `mdc-layout-grid__cell--span-${desktop}-desktop` : '';
    const classNameTablet = (tablet) ? `mdc-layout-grid__cell--span-${tablet}-tablet` : '';
    const classNamePhone = (phone) ? `mdc-layout-grid__cell--span-${phone}-phone` : '';
    const classNameOrder = (order) ? `mdc-layout-grid__cell--order-${order}` : '';
    const classNamePosition = (position) ? `mdc-layout-grid__cell--align-${position}` : '';

    return (
        <ElementType
            className={
                `mdc-layout-grid__cell
${classNameColumns}
${classNameDesktop}
${classNameTablet}
${classNamePhone}
${classNameOrder}
${classNamePosition}
${className}`
            }
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Cell.propTypes = propTypes;
export default Cell;