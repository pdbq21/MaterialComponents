/**
 * Created by ruslan on 12.05.17.
 */
import React from 'react';

import HintComponentTest from './test/Hint'
import {
    Hint
} from '../../app/lib'
export default class HintListComponent extends React.Component {

    render() {
        return (
<div>
                <HintComponentTest
                    url='https://api.github.com/'
                    list={['qwerty','asdfgh','zxcvbn','qazwsx','edcrfv','tgbyhn','ytrewq','hgfdsa']}
                />
    <Hint
        style={{
            'minHeight': '20em',
            'padding': '3em'
        }}
        url='https://api.github.com/'
    />
</div>
        );
    }
}