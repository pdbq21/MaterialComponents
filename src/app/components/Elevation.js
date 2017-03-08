/**
 * Created by ruslan on 08.03.17.
 */
import React, {PureComponent} from 'react';

//import '@material/checkbox/dist/mdc.checkbox.css';
//import {checkbox as mdcCheckbox} from 'material-components-web';
//const {MDCCheckbox, MDCCheckboxFoundation} = mdcCheckbox;
import '@material/elevation/dist/mdc.elevation.css';
//dist/mdc.COMPONENT.min.js.
export default class Elevation extends PureComponent {

//0-24 z-space

    render() {
        const ElementType = this.props.elementTyps || 'div';
        const zSpace = this.props.zSpace || '0';
        const className = this.props.className || '';
        const id = this.props.id || '';
        return (
            <ElementType
                className={`mdc-elevation--z${zSpace} ${className}`}
                id={id}
            >
                {this.props.children}
            </ElementType>
        );
    }
}

