/**
 * Created by ruslan on 29.03.17.
 */
import React from 'react';

function Label(props) {
    const {id, children} = props;
    const controlId = props['for'];
    return (
        <label className="mdc-checkbox-label" id={id} htmlFor={controlId}>{children}</label>
    );
}
export default Label