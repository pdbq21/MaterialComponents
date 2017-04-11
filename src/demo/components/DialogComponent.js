/**
 * Created by ruslan on 11.04.17.
 */
import React from 'react';
import '@material/dialog/dist/mdc.dialog.min.css';

import DialogComponentTest from './test/Dialog'
export default function DialogComponent() {

    return (
        <div className="dialog">
            <fieldset>
                <legend>Web Dialog</legend>
                <div>
                    <DialogComponentTest />
                </div>

            </fieldset>
        </div>
    );
}