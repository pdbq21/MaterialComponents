/**
 * Created by ruslan on 12.05.17.
 */
import React, {Component} from 'react';
import {
    Elevation,
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    List,
    ListItem,
} from '../../../app/lib'

const testValidatorUrl = (data, text) => data.indexOf(text);

export default class HintComponentTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            widthInput: 0,
            data: [],
            classes: [],
            value: '',
            open: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handelItem = this.handelItem.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }


    handleInput({currentTarget}) {
        const {url, list} = this.props;
        if (typeof url !== 'undefined'){
           // this.fetchData(url, currentTarget.value);
           this.fetchData(url);
        } else if (typeof list !== 'undefined'){
            this.setState({data: list});
        } else {
            console.error('Not data');
        }

        this.setState({
            widthInput: currentTarget.clientWidth,
            value: currentTarget.value,
        });
    }

    fetchData(url, value) {
        //fetch(url + encodeURIComponent(value))
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setState({
                    data: Object.keys(res),
                    open: true,
                });
            });
    }
    handelItem({currentTarget}){
        this.setState({
            open: false,
            value: currentTarget.textContent,
        });
    }
    render() {
        const ownProps = Object.assign({}, this.props);


        const {widthInput, data, value, open} = this.state;
        return (
            <div
                style={{
                    'minHeight': '20em',
                    'padding': '3em'
                }}
            >
                <Textfield
                    style={{
                        'width': '80%'
                    }}
                >
                    <TextfieldInput
                        type="text"
                        onChange={this.handleInput}
                        value={value}
                        style={{
                            'width': '100%'
                        }}
                    />
                    <TextfieldLabel>Label float above</TextfieldLabel>
                </Textfield>
                <Elevation
                    zSpace={2}
                    style={{
                        'width': widthInput,
                        'visibility': (value.length && open) ? 'visible' : 'hidden'
                    }}
                >
                    <List
                        style={{
                            'overflow': 'hidden',
                        }}
                    >
                        {
                            data.map((item, index) => (testValidatorUrl(item, value) !== -1 && value.length) ?
                                <ListItem
                                    onClick={this.handelItem}
                                    key={`key-${index}`}
                                >
                                    {item}
                                </ListItem> :
                                null
                            )
                        }
                    </List>
                </Elevation>
            </div>
        );
    }
}