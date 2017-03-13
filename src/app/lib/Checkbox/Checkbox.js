/**
 * Created by ruslan on 13.03.17.
 */
import React, {PropTypes} from 'react';

const propTypes = {};

const Checkbox = ({
    ...otherProp
}) => {

    return (
        <div className={`mdc-checkbox`}
             {...otherProp}
        >
            <input
                type="checkbox"
                className="mdc-checkbox__native-control"
            />
            <div className="mdc-checkbox__background">
                <svg version="1.1"
                     className="mdc-checkbox__checkmark"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                    <path className="mdc-checkbox__checkmark__path"
                          fill="none"
                          stroke="white"
                          d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                </svg>
                <div className="mdc-checkbox__mixedmark"></div>
            </div>
        </div>);
};

Checkbox.propTypes = propTypes;
export default Checkbox;