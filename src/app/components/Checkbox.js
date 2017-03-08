/**
 * Created by ruslan on 08.03.17.
 */

import React, {PureComponent} from 'react';

//import '@material/checkbox/dist/mdc.checkbox.css';
//import {checkbox as mdcCheckbox} from 'material-components-web';
//const {MDCCheckbox, MDCCheckboxFoundation} = mdcCheckbox;
import '@material/checkbox/dist/mdc.checkbox.css';
//dist/mdc.COMPONENT.min.js.
export default class Checkbox extends PureComponent {


    render() {
        return (
            <div className={`mdc-checkbox`}>
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
            </div>
        );
    }
}
