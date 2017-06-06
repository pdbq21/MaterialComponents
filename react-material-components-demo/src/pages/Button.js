/**
 * Created by ruslan on 05.06.17.
 */
import React, {Component} from 'react'
import Highlight from 'react-highlight.js'
import {
    Button,
    Elevation,
    TypographyDisplay,
} from '../lib'


export default class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'Button',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'primary',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'кнопка з кольором primary'
                        }, {
                            name: 'accent',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'кнопка з кольором accent'
                        }, {
                            name: 'compact',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'кнопка з типом compact'
                        }, {
                            name: 'dense',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'кнопка з типом dense'
                        }, {
                            name: 'raised',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'кнопка з типом raised'
                        }, {
                            name: 'ripple',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'додає Ripple ефект для кнопки'
                        },
                    ]
                }
            ],
            used: `
import {h, Component} from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

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
                    <Button
                        ripple
                        style={{
                            'marginRight': '15px',
                        }}
                    >Flat</Button>
                    <Button
                        ripple
                        raised
                        primary
                        style={{
                            'marginLeft': '15px',
                        }}
                    >Raised</Button>
                </Elevation>
                {this.renderTable()}

                <Elevation
                    zSpace="2"
                    style={{
                        'minHeight': '100px',
                        'display': 'flex',
                        'alignItems': 'center',
                        'justifyContent': 'center',
                        'flexFlow': 'row nowrap',
                        'height': '100px',
                    }}
                >
                    Original documentation
                </Elevation>
                <Elevation
                    zSpace="2"
                    style={{
                        'minHeight': '360px',
                        'display': 'flex',
                        'alignItems': 'center',
                        'justifyContent': 'center',
                        'flexFlow': 'row nowrap',
                        'height': '360px',
                    }}
                >
                    <Highlight language={'javascript'}>
                        {this.state.used}
                    </Highlight>
                </Elevation>
                <Elevation
                    zSpace="2"
                    style={{
                        'minHeight': '360px',
                        'display': 'flex',
                        'alignItems': 'center',
                        'justifyContent': 'center',
                        'flexFlow': 'row nowrap',
                        'height': '360px',
                    }}
                >
                    demo
                </Elevation>

            </section>
        )
    }
}
