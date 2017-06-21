/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Label extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            children,
            elementType,
            className,
            floatAbove,
            ...otherProps
        } = ownProps;

        const classes = classnames(
            'mdc-textfield__label', {
                'mdc-textfield__label--float-above': floatAbove
            },
            className
        );
        const ElementType = elementType || 'label';
        return (
            <ElementType
                className={classes}
                         {...otherProps}
            >
                {children}
            </ElementType>);
    }
}
