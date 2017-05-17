/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {Textfield} from '../../index'

export default class HintTextfield extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            valueInput,
            handleInput,
            handleClickInput,
            children,
            ...otherProps
        } = ownProps;

        const childElement = child => {
            if (child.type.name === 'Input') {
                return React.cloneElement(child, {
                    valueInput: valueInput,
                    handleInput: handleInput,
                    handleClickInput: handleClickInput,
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);

        return (
            <Textfield
                {...otherProps}
            >
                {renderChildren}
            </Textfield>
        );
    }
}