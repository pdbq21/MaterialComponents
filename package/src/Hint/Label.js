/**
 * Created by ruslan on 15.05.17.
 */
import React from 'react';
import {TextFieldLabel} from '../index'

export default function Label ({children, ...otherProps}){
        return (
            <TextFieldLabel
                {...otherProps}
            >
                {children}
            </TextFieldLabel>
        );
}