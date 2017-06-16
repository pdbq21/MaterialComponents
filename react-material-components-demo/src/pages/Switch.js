/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import Highlight from 'react-highlight.js'
import {
    Switch,
    SwitchInput,
    SwitchLabel,
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false,
            components: [
                {
                    name: 'Switch',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'disabled',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'стає не активним'
                        },
                    ]
                },{
                    name: 'SwitchInput',
                    property: [
                        {
                            name: 'disabled',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'стає не активним'
                        },
                    ]
                },{
                    name: 'SwitchLabel',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'label',
                            description: 'задає тег елемента'
                        },
                    ]
                },
            ],
            used: `
import React, {Component} from 'react'
import {
    Switch,
    SwitchInput,
    SwitchLabel,,
    Elevation,
    TypographyDisplay,
} from '../lib'

class ButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false,
        }
    }
    render() {
    const { isSwitch } = this.state;
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Switch</TypographyDisplay>
                    <TypographyHeadline size="1">Switch only CSS</TypographyHeadline>
                    <Switch>
                        <SwitchInput
                            onChange={() => this.setState({
                                isSwitch: !isSwitch,
                            })}
                        />
                    </Switch>
                    <SwitchLabel>{(isSwitch)? 'On' : 'Off'}</SwitchLabel>
                    <TypographyHeadline size="1">Switch only CSS - Disabled</TypographyHeadline>
                    <Switch disabled>
                        <SwitchInput disabled />
                    </Switch>
                    <SwitchLabel>disabled</SwitchLabel>
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
const { isSwitch } = this.state;
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
                    <Switch>
                        <SwitchInput />
                    </Switch>
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
                        This component is based on the MDC Button, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button"
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
                    className="demo-page-switch"
                >
                    <TypographyDisplay size="1">Switch</TypographyDisplay>
                    <TypographyHeadline size="1">Switch only CSS</TypographyHeadline>
                    <Switch>
                        <SwitchInput
                            onChange={() => this.setState({
                                isSwitch: !isSwitch,
                            })}
                        />
                    </Switch>
                    <SwitchLabel>{(isSwitch)? 'On' : 'Off'}</SwitchLabel>
                    <TypographyHeadline size="1">Switch only CSS - Disabled</TypographyHeadline>
                    <Switch disabled>
                        <SwitchInput disabled />
                    </Switch>
                    <SwitchLabel>disabled</SwitchLabel>
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
