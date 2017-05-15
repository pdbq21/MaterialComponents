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
    HintList
} from '../../app/lib'
export default class HintListComponent extends React.Component {

    render() {
        return (
<div>
    <Hint
        list={['qwerty','asdfgh','zxcvbn','qazwsx','edcrfv','tgbyhn','ytrewq','hgfdsa']}
        style={{
            'minHeight': '20em',
            'padding': '3em'
        }}
    >
        <HintTextfield
            style={{
                'width': '80%'
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
        );
    }
}