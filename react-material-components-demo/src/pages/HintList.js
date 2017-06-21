/**
 * Created by ruslan on 21.06.17.
 */
import React, {Component} from 'react'
import {
    Hint,
    HintElevation,
    HintTextfield,
    HintInput,
    HintLabel,
    HintList,
    HintTags,
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class HintListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hintList: [
                'Lorem',
                'Ipsum',
                'is',
                'simply',
                'dummy',
                'text',
                'of',
                'the',
                'printing',
                'and',
                'typesetting',
                'industry'
            ],
            components: [
                {
                    name: 'Hint',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'url',
                            type: 'string',
                            required: 'no',
                            defaultValue: 'null',
                            description: '-'
                        },
                        {
                            name: 'list',
                            type: 'array',
                            required: 'no',
                            defaultValue: 'null',
                            description: '-'
                        },
                        {
                            name: 'multiselect',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                }, {
                    name: 'HintElevation',
                    property: [
                        {
                            name: 'zSpace',
                            type: 'string | number',
                            required: 'no',
                            defaultValue: '2',
                            description: '-'
                        },
                    ]
                }, {
                    name: 'HintTextfield',
                    property: [
                        {
                            name: '',
                            type: '',
                            required: '',
                            defaultValue: '',
                            description: 'props як у Textfield'
                        },
                    ]
                },{
                    name: 'HintInput',
                    property: [
                        {
                            name: '',
                            type: '',
                            required: '',
                            defaultValue: '',
                            description: 'props як у TextfieldInput'
                        },
                    ]
                },{
                    name: 'HintLabel',
                    property: [
                        {
                            name: '',
                            type: '',
                            required: '',
                            defaultValue: '',
                            description: 'props як у TextfieldLabel'
                        },
                    ]
                },{
                    name: 'HintList',
                    property: [
                        {
                            name: '',
                            type: '',
                            required: '',
                            defaultValue: '',
                            description: 'props як у List'
                        },
                    ]
                },{
                    name: 'HintTags',
                    property: [
                        {
                            name: '',
                            type: '',
                            required: '',
                            defaultValue: '',
                            description: 'props як у List | no specific props'
                        },
                    ]
                },
            ],
            used: ``
        };
        this.renderTable = this.renderTable.bind(this);
    }

    renderTable() {
        const {components} = this.state;
        return components.map((item, index) => (<Elevation
                    zSpace="2"
                    key={`key-table-${index}`}
                >
                    <TypographyDisplay size="1">{item.name}</TypographyDisplay>
                    <table className="table-props">
                        <thead>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Required</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {item.property.map((prop, index) => (
                            <tr key={`key-table-tr-${index}`}>
                                <td><code>{prop.name}</code></td>
                                <td><code>{prop.type}</code></td>
                                <td>{prop.defaultValue}</td>
                                <td>{prop.required}</td>
                                <td>{prop.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Elevation>
            )
        )
    }

    render() {
        const {hintList} = this.state;
        return (
            <section>
                <Elevation
                    zSpace="2"
                    style={{
                        'backgroundColor': 'rgba(0, 0, 0, 0.05)',
                        'minHeight': '360px',
                        'display': 'flex',
                        'alignItems': 'center',
                        'justifyContent': 'center',
                        'flexFlow': 'row nowrap',
                        'height': '360px',
                    }}
                >
                    <Hint
                        //url=""
                        list={hintList}
                    >
                        <HintTextfield
                            style={{
                                'marginTop': 0
                            }}
                        >
                            <HintInput />
                            <HintLabel>Hint Label</HintLabel>
                        </HintTextfield>
                        <HintElevation
                        style={{
                            'position': 'absolute',
                            'backgroundColor': 'white',
                            'zIndex': 1
                        }}
                        >
                            <HintList/>
                        </HintElevation>
                    </Hint>
                </Elevation>
                {this.renderTable()}

                <Elevation
                    zSpace="2"
                    style={{
                        'minHeight': '10em',
                        'display': 'flex',
                        'alignItems': 'center',
                        'flexDirection': 'column'
                    }}
                >
                    <TypographyDisplay size="1">Documentation</TypographyDisplay>

                </Elevation>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Demo code</TypographyDisplay>

                </Elevation>
                <Elevation
                    zSpace="2"
                    className="demo-page-hint"
                >
                    <TypographyDisplay size="1">Hint List</TypographyDisplay>
                    <TypographyHeadline size="1">Hint List</TypographyHeadline>
                    <Hint
                        //url=""
                        list={hintList}
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
                            <HintLabel>Hint Label</HintLabel>
                        </HintTextfield>
                        <HintElevation
                            style={{
                                'position': 'absolute',
                                'backgroundColor': 'white',
                                'zIndex': 1
                            }}
                        >
                            <HintList/>
                        </HintElevation>
                    </Hint>
                    <TypographyHeadline size="1">Hint List with Multiselect</TypographyHeadline>
                    <Hint
                        list={hintList}
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
                            <HintLabel>Hint Label</HintLabel>
                        </HintTextfield>
                        <HintElevation
                            style={{
                                'position': 'absolute',
                                'backgroundColor': 'white',
                                'zIndex': 1
                            }}
                        >
                            <HintList/>
                        </HintElevation>
                    </Hint>
                </Elevation>
                <Elevation
                    zSpace="2"
                    style={{
                        'backgroundColor': 'rgba(0, 0, 0, 0.05)',
                        'minHeight': '50px',
                        'display': 'flex',
                        'alignItems': 'center',
                        'justifyContent': 'center',
                        'marginTop': '1em'
                    }}
                >
                    github
                </Elevation>
            </section>
        )
    }
}