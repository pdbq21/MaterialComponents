/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';

const propTypes = {};

const Radio = ({
    ...otherProp
}) => {

    return (
        <div
             {...otherProp}
        >

        </div>);
};

Radio.propTypes = propTypes;
export default Radio;