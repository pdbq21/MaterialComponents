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
const Anchor = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-menu-anchor', className);
    const ElementType =  elementType || 'div';
    return (
        <ElementType className={classes}
                     tabindex='-1'
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Anchor.propTypes = propTypes;
export default Anchor;*/


class Anchor extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {
            elementType, children, className,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={
                    classnames(
                        'mdc-menu-anchor',
                        className
                    )}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default Anchor;