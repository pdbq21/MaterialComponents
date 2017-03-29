/**
 * Created by ruslan on 29.03.17.
 */
import React from 'react';

export default function RadioLabel(props) {
    const {id, children} = props;
    const controlId = props['for'];
    return (
        <label id={id} htmlFor={controlId}>{children}</label>
    );
}