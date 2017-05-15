/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {Textfield} from '../index'

export default class HintTextfield extends PureComponent {

    render() {
        const {children, ...otherProps} = this.props;
        return (
            <Textfield
                {...otherProps}
            >
                {children}
            </Textfield>
        );
    }
}