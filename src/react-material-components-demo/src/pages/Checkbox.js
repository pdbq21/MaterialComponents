/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import {
    Checkbox,
    CheckboxLabel,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxInput,
    CheckboxMixedmark,
    CheckboxPath,
    Elevation,
    Button,
    FormField,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class CheckboxPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            disabled: false,
            indeterminate: false,
            components: [
                {
                    name: 'Checkbox',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        }, {
                            name: 'ripple',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'додає Ripple ефект'
                        }, {
                            name: 'disabled',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'стає не активний'
                        },
                    ]
                },{
                    name: 'CheckboxLabel',
                    property: [
                        {
                            description: 'no specific props'
                        },
                    ]
                },{
                    name: 'CheckboxBackground',
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
                    name: 'CheckboxCheckmark',
                    property: [
                        {
                            name: 'viewBox',
                            type: 'string',
                            required: 'no',
                            defaultValue: `'0 0 24 24'`,
                            description: 'svg option'
                        },{
                            name: 'xmlns',
                            type: 'string',
                            required: 'no',
                            defaultValue: `'http://www.w3.org/2000/svg'`,
                            description: 'svg option'
                        },
                    ]
                },{
                    name: 'CheckboxInput',
                    property: [
                        {
                            name: 'disabled',
                            type: 'bool',
                            required: 'no',
                            defaultValue: `false`,
                            description: 'стає не активним'
                        },{
                            name: 'checked',
                            type: 'bool',
                            required: 'no',
                            defaultValue: `false`,
                            description: 'checkbox option'
                        },{
                            name: 'indeterminate',
                            type: 'bool',
                            required: 'no',
                            defaultValue: `false`,
                            description: 'checkbox option'
                        },{
                            name: 'onChange',
                            type: 'function',
                            required: 'no',
                            defaultValue: `no`,
                            description: 'зміна стану checkbox'
                        },
                    ]
                },{
                    name: 'CheckboxMixedmark',
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
                    name: 'CheckboxPath',
                    property: [
                        {
                            name: 'fill',
                            type: 'string',
                            required: 'no',
                            defaultValue: `'none'`,
                            description: 'svg option'
                        },{
                            name: 'stroke',
                            type: 'string',
                            required: 'no',
                            defaultValue: `'white'`,
                            description: 'svg option'
                        },{
                            name: 'd',
                            type: 'string',
                            required: 'no',
                            defaultValue: `'M1.73,12.91 8.1,19.28 22.79,4.59'`,
                            description: 'svg option'
                        },
                    ]
                },
            ],
            used: `
import React, {Component} from 'react'
import {
    Checkbox,
    CheckboxLabel,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxInput,
    CheckboxMixedmark,
    CheckboxPath,
    Elevation,
} from '../lib'

class CheckboxDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                   <Checkbox
                        ripple
                    >
                        <CheckboxInput
                            onChange={({target}) => this.setState({
                                checked: target.checked,
                            })}
                        />
                        <CheckboxBackground>
                            <CheckboxCheckmark>
                                <CheckboxPath/>
                            </CheckboxCheckmark>
                            <CheckboxMixedmark/>
                        </CheckboxBackground>
                    </Checkbox>
                    <CheckboxLabel>
                        Checkbox
                    </CheckboxLabel>
                </Elevation>
            </section>
        )
    }
}`
        };
        this.renderTable = this.renderTable.bind(this);

        this.handelIndeterminate = this.handelIndeterminate.bind(this);
        this.handelDisabled = this.handelDisabled.bind(this);
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

    handelIndeterminate() {
        this.setState({
            indeterminate: true
        })
    }

    handelDisabled() {
        this.setState({
            disabled: !this.state.disabled
        })
    }
    render() {
        const {disabled, indeterminate} = this.state;
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
                    <Checkbox
                        ripple
                    >
                        <CheckboxInput
                            onChange={({target}) => this.setState({
                                checked: target.checked,
                            })}
                        />
                        <CheckboxBackground>
                            <CheckboxCheckmark>
                                <CheckboxPath/>
                            </CheckboxCheckmark>
                            <CheckboxMixedmark/>
                        </CheckboxBackground>
                    </Checkbox>
                    <CheckboxLabel>
                        Checkbox
                    </CheckboxLabel>
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
                        This component is based on the MDC Checkbox, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox"
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
                >
                    <Button primary raised ripple onClick={this.handelIndeterminate}>Make indeterminate</Button>
                    <Button primary raised ripple onClick={this.handelDisabled}>Toggle Disabled</Button>
                    <TypographyDisplay size="1">With Javascript</TypographyDisplay>

                        <FormField>
                            <Checkbox
                                ripple
                                disabled={disabled}
                            >
                                <CheckboxInput
                                    id="my-checkbox"
                                    onChange={({target}) => this.setState({
                                        checked: target.checked,
                                        indeterminate: false
                                    })}
                                    aria-labelledby="my-checkbox-label"
                                    disabled={disabled}
                                    indeterminate={indeterminate}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>

                            <CheckboxLabel id="my-checkbox-label" htmlFor="my-checkbox">
                                The checkbox is currently
                            </CheckboxLabel>
                        </FormField>

                    <TypographyDisplay size="1">CSS Only</TypographyDisplay>
                    <FormField>
                    <Checkbox
                        disabled={disabled}
                    >
                        <CheckboxInput
                            onChange={({target}) => this.setState({
                                checked: target.checked,
                                indeterminate: false
                            })}
                            disabled={disabled}
                            indeterminate={indeterminate}
                        />
                        <CheckboxBackground>
                            <CheckboxCheckmark>
                                <CheckboxPath/>
                            </CheckboxCheckmark>
                            <CheckboxMixedmark/>
                        </CheckboxBackground>
                    </Checkbox>
                    <CheckboxLabel>
                        The checkbox is currently
                    </CheckboxLabel>
                    </FormField>
                    <TypographyDisplay size="1">CSS Only - Disabled</TypographyDisplay>
                    <FormField>
                        <Checkbox
                            disabled
                        >
                            <CheckboxInput
                                onChange={({target}) => this.setState({
                                    checked: target.checked,
                                    indeterminate: false
                                })}
                                disabled={true}
                            />
                            <CheckboxBackground>
                                <CheckboxCheckmark>
                                    <CheckboxPath/>
                                </CheckboxCheckmark>
                                <CheckboxMixedmark/>
                            </CheckboxBackground>
                        </Checkbox>
                    <CheckboxLabel>
                        The checkbox is disabled
                    </CheckboxLabel>
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
