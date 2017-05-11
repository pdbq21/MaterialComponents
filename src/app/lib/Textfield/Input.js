/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Input extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            className,
            children,
            elementType,
            ...otherProps
        } = ownProps;


        const classes = classnames('mdc-textfield__input', className);
        const ElementType = elementType || 'input';
        return (

            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>);
    }

}
