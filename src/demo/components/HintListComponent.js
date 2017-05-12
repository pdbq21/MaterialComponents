/**
 * Created by ruslan on 12.05.17.
 */
import React from 'react';
import {
    Elevation,
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    List,
    ListItem,
} from '../../app/lib'
//import HintComponentTest from './test/Hint'

const testValidator = text => {
    if (text.length === 1)  return [
        'hint 1',
        'hint 2',
        'hint 3',
        'hint 4',
        'hint 5',
    ];
    else if (text.length === 2) return [
        'hint 1',
        'hint 2',
        'hint 3',
        'hint 4',
    ];
    else if (text.length === 3) return [
        'hint 1',
        'hint 2',
        'hint 3',
    ];
    else if (text.length === 4) return [
        'hint 1',
        'hint 2',
    ];
    else if (text.length === 5) return [
        'hint 1',
    ];
    else return [];
};

export default class HintListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widthInput: 0,
            data: []
        };

        this.handleInput = this.handleInput.bind(this);
    }


    handleInput({currentTarget}) {
        //fetch();

        this.setState({
            widthInput: currentTarget.clientWidth,
            data: testValidator(currentTarget.value)
        });
        console.dir(currentTarget);
    }


    render() {
        const {widthInput, data} = this.state;
        return (
            <div
                style={{
                    'minHeight': '20em',
                    'padding': '3em'
                }}
            >
                <Textfield>
                    <TextfieldInput
                        id="demo-label-above"
                        type="text"
                        onChange={this.handleInput}
                    />
                    <TextfieldLabel
                        htmlFor="demo-label-above"
                    >Label float above</TextfieldLabel>
                </Textfield>
                <Elevation
                    zSpace={2}
                    style={{
                        'width': widthInput,
                    }}
                >
                    <List
                        style={{
                            'width': widthInput,
                            'display': (data.length) ? 'block' : 'none'
                        }}
                    >
                        {
                            data.map((item, index) => (
                                <ListItem
                                    key={`key-${index}`}
                                >
                                    {item}
                                </ListItem>
                            ))
                        }
                    </List>
                </Elevation>
            </div>
        );
    }
}