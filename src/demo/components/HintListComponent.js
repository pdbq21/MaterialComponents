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
    List,
    ListItem,
    ListItemDetail
} from '../../app/lib'

export default class HintListComponent extends React.Component {

    render() {
        return (
<div>
    <Hint
        url="http://localhost:4021/api/search?q="
        style={{
            'minHeight': '20em',
            'padding': '3em'
        }}
        multiselect
    >
        <List
            dense
            style={{
                'display': 'flex',
                'flexDirection': 'row',
                'padding': 0,
            }}
        >
            <ListItem>tag 1<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>tag 2<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>tag 3<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>tag 4<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>tag 5<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
        </List>
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
        );
    }
}