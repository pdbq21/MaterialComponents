/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
    FAB,
    FABIcon,
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class FABPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'FAB',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'button',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'icon',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'mini',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'plain',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'ripple',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'Ripple ефект'
                        },
                    ]
                },{
                    name: 'FABIcon',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'span',
                            description: 'задає тег елемента'
                        },
                    ]
                }
            ],
            used: `
import React, {Component} from 'react'
import {
    FAB,
    FABIcon,
    Elevation,
    TypographyDisplay,
} from '../lib'

class FABDemo extends Component {

    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <FAB ripple icon>
                        <FABIcon>favorite</FABIcon>
                    </FAB>
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
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
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
                    <FAB ripple icon>
                        <FABIcon>favorite</FABIcon>
                    </FAB>
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
                        This component is based on the MDC FAB, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab"
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
                    className="demo-page-fab"
                >
                    <TypographyDisplay size="1">Normal FABs</TypographyDisplay>
                    <TypographyHeadline size="1">FAB Default</TypographyHeadline>
                    <FAB ripple icon><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB mini</TypographyHeadline>
                    <FAB ripple icon mini><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB plain</TypographyHeadline>
                    <FAB ripple icon plain><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB plain + mini</TypographyHeadline>
                    <FAB ripple icon plain mini><FABIcon>favorite</FABIcon></FAB>
                    <TypographyDisplay size="1">CSS Only FABs</TypographyDisplay>
                    <TypographyHeadline>FAB Default</TypographyHeadline>
                    <FAB icon><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB mini</TypographyHeadline>
                    <FAB icon mini><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB plain</TypographyHeadline>
                    <FAB icon plain><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB plain + mini</TypographyHeadline>
                    <FAB icon plain mini><FABIcon>favorite</FABIcon></FAB>
                    <TypographyDisplay size="1">Disabled FABs</TypographyDisplay>
                    <TypographyHeadline>FAB Default</TypographyHeadline>
                    <FAB icon disabled><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB mini</TypographyHeadline>
                    <FAB icon mini disabled><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB plain</TypographyHeadline>
                    <FAB icon plain disabled><FABIcon>favorite</FABIcon></FAB>
                    <TypographyHeadline>FAB plain + mini</TypographyHeadline>
                    <FAB icon plain mini disabled><FABIcon>favorite</FABIcon></FAB>
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