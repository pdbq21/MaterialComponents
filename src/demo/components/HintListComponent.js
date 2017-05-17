/**
 * Created by ruslan on 12.05.17.
 */
import React from 'react';

//import HintComponentTest from './test/Hint'
import {
    Hint,
    HintElevation,
    HintTextfield,
    HintInput,
    HintLabel,
    HintList,
    HintTags,
} from '../../app/index'

export default class HintListComponent extends React.Component {

    render() {
        return (
<div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    <h2>Multiselect</h2>
    <div>
        <Hint
            url="http://localhost:4021/api/search?q="
            style={{
                'minHeight': '20em',
                'padding': '3em',

            }}
            multiselect
        >
            <HintTags
                dense
                style={{
                    'display': 'flex',
                    'flexDirection': 'row',
                    'padding': 0,
                    'color': 'white',
                    'flexWrap': 'wrap'
                }}
            />
            <HintTextfield
                style={{
                    'width': '80%',
                    'marginTop': 0
                }}
            >
                <HintInput
                    style={{
                        'width': '100%'
                    }}
                />
                <HintLabel>Label</HintLabel>
            </HintTextfield>
            <HintElevation>
                <HintList/>
            </HintElevation>
        </Hint>
    </div>
    <h2>Hint</h2>
    <div>
        <Hint
            url="http://localhost:4021/api/search?q="
            style={{
                'minHeight': '20em',
                'padding': '3em'
            }}
        >
            <HintTextfield
                style={{
                    'width': '80%',
                    'marginTop': 0
                }}
            >
                <HintInput
                    style={{
                        'width': '100%'
                    }}
                />
                <HintLabel>Label</HintLabel>
            </HintTextfield>
            <HintElevation>
                <HintList/>
            </HintElevation>
        </Hint>
    </div>
</div>
        );
    }
}