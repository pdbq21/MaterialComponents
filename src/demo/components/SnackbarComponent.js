/**
 * Created by ruslan on 27.03.17.
 */
import React from 'react';
import {default as TestComponent} from './test/testSnackbar'
import '@material/snackbar/dist/mdc.snackbar.min.css';
export default class SnackbarComponent extends React.Component {
    render() {
        return (
            <div >
                <h3>Snackbar</h3>
                {/*<div>
                    <label htmlFor="message">Message Text</label>
                    <input type="text" id="message" value="Message deleted"/>
                </div>
                <div>
                    <label htmlFor="action">Action Text</label>
                    <input type="text" id="action" value="Undo"/>
                </div>
                <button>Show</button>
                <div className="mdc-snackbar mdc-snackbar--active">
                    <div className="mdc-snackbar__text">fgfdgf</div>
                    <div className="mdc-snackbar__action-wrapper">
                        <button type="button" className="mdc-button mdc-snackbar__action-button">dgfd</button>
                    </div>
                </div>*/}

                <TestComponent />
            </div>
        );
    }
}