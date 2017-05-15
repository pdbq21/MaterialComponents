/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {TextfieldLabel} from '../index'

export default class Label extends PureComponent {
    render() {
        const {children, ...otherProps} = this.props;
        return (
            <TextfieldLabel
                {...otherProps}
            >
                {children}
            </TextfieldLabel>
        );
    }
}