/**
 * Created by ruslan on 19.06.17.
 */
import React, {Component} from 'react'
//import Highlight from 'react-highlight.js'
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMain,
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../../lib/index'


export default class ToolbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'Toolbar',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'header',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'onChange',
                            type: 'function',
                            required: 'no',
                            defaultValue: '-',
                            description: '-'
                        },{
                            name: 'fixed',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'waterfall',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'lastrowOnly',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'defaultBehavior',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'ToolbarRow',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },
                    ]
                },{
                    name: 'ToolbarSection',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'section',
                            description: 'задає тег елемента'
                        },{
                            name: 'start',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'end',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'shrink',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },{
                    name: 'ToolbarTitle',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'span',
                            description: 'задає тег елемента'
                        }
                    ]
                },{
                    name: 'ToolbarMain',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'main',
                            description: 'задає тег елемента'
                        },{
                            name: 'fixed',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }
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
                        This component is based on the MDC Toolbar, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar"
                    >here</a>.
                    </TypographyBody>
                </Elevation>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Demo code</TypographyDisplay>

                </Elevation>
                <Elevation
                    zSpace="2"
                    className="demo-page-switch"
                >
                    <TypographyDisplay size="1">Toolbar</TypographyDisplay>
                    <TypographyHeadline size="1">Normal Toolbar</TypographyHeadline>
                    <iframe
                        src="/toolbar_normal"
                        frameBorder="0"
                        width='320px'
                        height='420px'
                    />
                    <TypographyHeadline size="1">Fixed Toolbar</TypographyHeadline>
                    <iframe
                        src="/toolbar_fixed"
                        frameBorder="0"
                        width='320px'
                        height='420px'
                    />
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
