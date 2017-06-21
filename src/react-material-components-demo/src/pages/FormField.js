/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
    FormField,
    Elevation,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class FormFieldPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'FormField',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        }, {
                            name: 'alignEnd',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                }
            ],
            used: `
import React, {Component} from 'react'
import {
    FormField,
    Elevation,
    TypographyDisplay,
} from '../lib'

class FormFieldDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">FormField</TypographyDisplay>
                    <FormField>
                        <input type="checkbox"/>
                        <label>Input Label</label>
                    </FormField>
                    <TypographyDisplay size="1">Form Field Align End</TypographyDisplay>
                    <FormField alignEnd>
                        <input type="checkbox"/>
                        <label>Input Label</label>
                    </FormField>
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
                    <FormField>
                        <input type="checkbox" id="input"/>
                        <label htmlFor="input">Input Label</label>
                    </FormField>
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
                        This component is based on the MDC Form Field, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-form-field"
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
                    className="demo-page-form_field"

                >
                    <TypographyDisplay size="1">FormField</TypographyDisplay>
                    <FormField>
                        <input type="checkbox"/>
                        <label>Input Label</label>
                    </FormField>
                    <TypographyDisplay size="1">Form Field Align End</TypographyDisplay>
                    <FormField alignEnd>
                        <input type="checkbox"/>
                        <label>Input Label</label>
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