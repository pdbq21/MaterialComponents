/**
 * Created by ruslan on 16.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
/*
const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Simple = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-simple-menu', className);
    const ElementType =  elementType || 'div';
    return (
        <ElementType
            className={classes}
            tabindex='-1'
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Simple.propTypes = propTypes;
export default Simple;*/

class Menu extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {
            elementType, children, className, tabIndex,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={
                    classnames(
                        'mdc-simple-menu',
                        className
                    )}
                tabIndex={tabIndex || '-1'}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default Menu;