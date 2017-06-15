/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import Highlight from 'react-highlight.js'
import {
    Elevation,
    Typography,
    TypographyDisplay,
    TypographyHeadline,
    TypographyTitle,
    TypographySubheading,
    TypographyBody,
    TypographyCaption
} from '../lib'


export default class TypographyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'Typography',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'section',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'adjustMargin',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'TypographyDisplay',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'h1',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'size',
                            type: 'string | number',
                            required: 'no',
                            defaultValue: '1 | 2 | 3 | 4',
                            description: '-'
                        },{
                            name: 'adjustMargin',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'TypographyHeadline',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'h1',
                            description: 'задає тег елемента'
                        },{
                            name: 'adjustMargin',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'TypographyTitle',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'h2',
                            description: 'задає тег елемента'
                        },{
                            name: 'adjustMargin',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'TypographySubheading',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'h4 | h3',
                            description: 'задає тег елемента'
                        },{
                            name: 'size',
                            type: 'string | number',
                            required: 'no',
                            defaultValue: '1 | 2',
                            description: '-'
                        },{
                            name: 'adjustMargin',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'TypographyBody',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'p | span',
                            description: 'задає тег елемента'
                        },{
                            name: 'size',
                            type: 'string | number',
                            required: 'no',
                            defaultValue: '1 | 2',
                            description: '-'
                        },{
                            name: 'adjustMargin',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'TypographyCaption',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'span',
                            description: 'задає тег елемента'
                        },{
                            name: 'adjustMargin',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },
            ],
            used: `
import React, {Component} from 'react'
import {
    Elevation,
    Typography,
    TypographyDisplay,
    TypographyHeadline,
    TypographyTitle,
    TypographySubheading,
    TypographyBody,
    TypographyCaption
} from '../lib'

class TypographyDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <Typography >
                        <TypographyDisplay size="4">Display 4</TypographyDisplay>
                        <TypographyDisplay size="3">Display 3</TypographyDisplay>
                        <TypographyDisplay size="2">Display 2</TypographyDisplay>
                        <TypographyDisplay size="1">Display 1</TypographyDisplay>
                        <TypographyHeadline>Headline</TypographyHeadline>
                        <TypographyTitle>
                            Title
                            <TypographyCaption> Caption</TypographyCaption>
                        </TypographyTitle>
                        <TypographySubheading size="2">Subheading 2</TypographySubheading>
                        <TypographySubheading size="1">Subheading 1</TypographySubheading>
                        <TypographyBody size='1'>
                            Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </TypographyBody>
                        <TypographyBody size='2'>Body 2 text, calling something out.</TypographyBody>
                    </Typography>
                    <TypographyDisplay size="1">Typography with margin adjustments</TypographyDisplay>
                    <Typography>
                        <TypographyDisplay size="4" adjustMargin>Display 4</TypographyDisplay>
                        <TypographyDisplay size="3" adjustMargin>Display 3</TypographyDisplay>
                        <TypographyDisplay size="2" adjustMargin>Display 2</TypographyDisplay>
                        <TypographyDisplay size="1" adjustMargin>Display 1</TypographyDisplay>
                        <TypographyHeadline adjustMargin>Headline</TypographyHeadline>
                        <TypographyTitle adjustMargin>
                            Title
                            <TypographyCaption adjustMargin> Caption</TypographyCaption>
                        </TypographyTitle>
                        <TypographySubheading size="2" adjustMargin>Subheading 2</TypographySubheading>
                        <TypographySubheading size="1" adjustMargin>Subheading 1</TypographySubheading>
                        <TypographyBody size='1' adjustMargin>
                            Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </TypographyBody>
                        <TypographyBody size='2' adjustMargin>Body 2 text, calling something out.</TypographyBody>
                    </Typography>
                </Elevation>
            </section>
        )
    }
}`
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
                    <TypographyDisplay size="1">Typography</TypographyDisplay>
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
                    <TypographyDisplay size="1">Original documentation</TypographyDisplay>
                    <TypographyBody>
                        This component is based on the MDC Elevation, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation"
                    >here</a>.
                    </TypographyBody>
                </Elevation>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Demo code</TypographyDisplay>
                    <Highlight language={'javascript'}>
                        {this.state.used}
                    </Highlight>
                </Elevation>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Typography</TypographyDisplay>
                    <Typography >
                        <TypographyDisplay size="4">Display 4</TypographyDisplay>
                        <TypographyDisplay size="3">Display 3</TypographyDisplay>
                        <TypographyDisplay size="2">Display 2</TypographyDisplay>
                        <TypographyDisplay size="1">Display 1</TypographyDisplay>
                        <TypographyHeadline>Headline</TypographyHeadline>
                        <TypographyTitle>
                            Title
                            <TypographyCaption> Caption</TypographyCaption>
                        </TypographyTitle>
                        <TypographySubheading size="2">Subheading 2</TypographySubheading>
                        <TypographySubheading size="1">Subheading 1</TypographySubheading>
                        <TypographyBody size='1'>
                            Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </TypographyBody>
                        <TypographyBody size='2'>Body 2 text, calling something out.</TypographyBody>
                    </Typography>
                    <TypographyDisplay size="1">Typography with margin adjustments</TypographyDisplay>
                    <Typography>
                        <TypographyDisplay size="4" adjustMargin>Display 4</TypographyDisplay>
                        <TypographyDisplay size="3" adjustMargin>Display 3</TypographyDisplay>
                        <TypographyDisplay size="2" adjustMargin>Display 2</TypographyDisplay>
                        <TypographyDisplay size="1" adjustMargin>Display 1</TypographyDisplay>
                        <TypographyHeadline adjustMargin>Headline</TypographyHeadline>
                        <TypographyTitle adjustMargin>
                            Title
                            <TypographyCaption adjustMargin> Caption</TypographyCaption>
                        </TypographyTitle>
                        <TypographySubheading size="2" adjustMargin>Subheading 2</TypographySubheading>
                        <TypographySubheading size="1" adjustMargin>Subheading 1</TypographySubheading>
                        <TypographyBody size='1' adjustMargin>
                            Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </TypographyBody>
                        <TypographyBody size='2' adjustMargin>Body 2 text, calling something out.</TypographyBody>
                    </Typography>
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