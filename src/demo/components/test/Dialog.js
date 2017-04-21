/**
 * Created by ruslan on 11.04.17.
 */
import React, {Component} from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';
import * as dialog  from 'material-components-web/dist/material-components-web';
//const { * as test } = dialog;



export default class DialogComponentTest extends Component {

    render() {
         console.log(dialog);
        return (
            <div
                ref="root"
            >
            </div>
        );
    }
}
