/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
    Icon,
    Elevation,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class IconPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'Icon',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'i',
                            description: 'задає тег елемента'
                        }
                    ]
                }
            ],
            used: `
import React, {Component} from 'react'
import {
    Icon,
    Elevation,
    TypographyDisplay,
} from '../lib'

class IconDemo extends Component {
    render() {
        return (
            <section>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Icons</TypographyDisplay>
                    <Icon>favorite</Icon>
                    <Icon>favorite_border</Icon>
                    <Icon>menu</Icon>
                    <Icon>star_border</Icon>
                    <Icon>star</Icon>
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
                    <Icon>favorite</Icon>
                    <Icon>menu</Icon>
                    <Icon>star_border</Icon>
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
                        This component is based on the Material-Icons, you can refer to its documentation <a
                        href="https://google.github.io/material-design-icons/"
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
                    className="demo-page-icon"
                >
                    <TypographyDisplay size="1">Icons</TypographyDisplay>
                    <Icon>favorite</Icon>
                    <Icon>favorite_border</Icon>
                    <Icon>menu</Icon>
                    <Icon>star_border</Icon>
                    <Icon>star</Icon>
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