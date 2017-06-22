/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
    Radio,
    RadioInput,
    Elevation,
    FormField,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class RadioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            checked_1: true,
            checked_2: true,
            components: [
                {
                    name: 'Radio',
                    property: [
                        {
                            name: 'ripple',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'додає Ripple ефект'
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
                    name: 'RadioInput',
                    property: [
                        {
                            description: 'no specific props'
                        },
                    ]
                },
            ],
            used: `
import React, {Component} from 'react'
import {
    Radio,
    RadioInput,
    Elevation,
    TypographyDisplay,
} from '../lib'

class RadioDemo extends Component {

    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <Radio
                        ripple
                    >
                        <RadioInput
                            name="radios"
                        />
                    </Radio>
                    <Radio
                        ripple
                    >
                        <RadioInput
                            name="radios"
                        />
                    </Radio>
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
        //const { checked, checked_1, checked_2 } = this.state;
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
                    <Radio
                        ripple
                    >
                        <RadioInput
                            name="radios"
                        />
                    </Radio>
                    <Radio
                        ripple
                    >
                        <RadioInput
                            name="radios"
                        />
                    </Radio>
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
                        This component is based on the MDC Radio, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio"
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
                    <TypographyDisplay size="1">Radio</TypographyDisplay>
                    <TypographyHeadline size="1">Radio with Ripple</TypographyHeadline>
                    <FormField>
                    <Radio
                        ripple
                    >
                        <RadioInput
                            id="my-radio-demo1"
                            name="radios1"
                            onChange={({target}) => this.setState({
                                checked_1: target.checked,
                            })}
                        />
                    </Radio>
                    <label id="my-radio-label1" htmlFor="my-radio-demo1">Radio 1</label>
                    </FormField>
                    <FormField>
                    <Radio
                        ripple
                    >
                        <RadioInput
                            id="my-radio-demo2"
                            name="radios1"
                            onChange={({target}) => this.setState({
                                checked_1: target.checked,
                            })}
                        />
                    </Radio>
                    <label id="my-radio-label2" htmlFor="my-radio-demo2">Radio 2</label>
                    </FormField>
                    <TypographyHeadline size="1">Radio only CSS</TypographyHeadline>
                    <FormField>
                    <Radio>
                        <RadioInput
                            id="my-radio-demo3"
                            name="radios2"

                        />
                    </Radio>
                    <label id="my-radio-label3" htmlFor="my-radio-demo3">Radio 1</label>
                    <Radio>
                        <RadioInput
                            id="my-radio-demo4"
                            name="radios2"
                        />
                    </Radio>
                    <label id="my-radio-label4" htmlFor="my-radio-demo4">Radio 2</label>
                    </FormField>
                    <TypographyHeadline size="1">Radio only CSS - Disable</TypographyHeadline>
                    <FormField>
                    <Radio disabled>
                        <RadioInput
                            id="my-radio-demo5"
                            name="radios3"
                            disabled
                            checked
                        />
                    </Radio>
                    <label id="my-radio-label5" htmlFor="my-radio-demo5">Radio 1</label>
                    <Radio disabled>
                        <RadioInput
                            id="my-radio-demo6"
                            name="radios3"
                            disabled
                        />
                    </Radio>
                    <label id="my-radio-label6" htmlFor="my-radio-demo6">Radio 2</label>
                    </FormField>
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