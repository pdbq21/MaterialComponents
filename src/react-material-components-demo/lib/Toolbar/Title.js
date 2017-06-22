/**
 * Created by ruslan on 16.03.17.
 */

import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Title extends PureComponent {
    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            children,
            elementType,
            className,
            ...otherProp
        } = ownProps;
        const classes = classnames('mdc-toolbar__title', className);
        const ElementType = elementType || 'span';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}