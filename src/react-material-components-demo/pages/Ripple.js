/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
    Ripple,
    Elevation,
    TypographyDisplay,
    TypographyBody,
    TypographyHeadline,
} from '../lib'


export default class RipplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'Ripple',
                    property: [
                        {
                            name: 'primary',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'з кольором primary'
                        }, {
                            name: 'accent',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'з кольором accent'
                        }, {
                            name: 'unbounded',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'data-no-js',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'only CSS'
                        },
                    ]
                }
            ],
            used: `
import React, {Component} from 'react'
import {
    Ripple,
    Elevation,
    TypographyDisplay,
} from '../lib'

class RippleDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <Ripple>
                        <div
                            className="mdc-elevation--z2"
                            tabIndex="0"
                            style={{
                                'backgroundColor': 'white',
                                'height': '10em',
                                'width': '10em'
                            }}
                        />
                    </Ripple>
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
                    <Ripple>
                        <div
                            className="mdc-elevation--z2"
                            tabIndex="0"
                            style={{
                                'backgroundColor': 'white',
                                'height': '10em',
                                'width': '10em'
                            }}
                        />
                    </Ripple>
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
                        This component is based on the MDC Ripple, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-ripple"
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
                    className="demo-page-ripple"

                >
                    <TypographyDisplay size="1">Ripple</TypographyDisplay>
                    <TypographyHeadline size="1">Bounded</TypographyHeadline>
                        <Ripple>

                            <div className="mdc-elevation--z2"
                                 tabIndex="0"
                                 style={{
                                     'height': '10em',
                                     'width': '10em',
                                     'display': 'flex',
                                     'alignItems': 'center',
                                     'justifyContent': 'center',
                                 }}
                            >
                                Interact with me!
                            </div>
                        </Ripple>
                    <TypographyHeadline>Unbounded</TypographyHeadline>

                        <Ripple
                            unbounded
                        >
                            <div className="material-icons demo-surface"
                                 aria-label="Favorite"
                                 tabIndex="0"
                            >
                                favorite
                            </div>
                        </Ripple>

                    <TypographyHeadline>Theme Styles</TypographyHeadline>

                        <Ripple
                            primary
                        >
                            <div className="mdc-elevation--z2"
                                 tabIndex="0"
                                 style={{
                                     'height': '10em',
                                     'width': '10em',
                                     'display': 'flex',
                                     'alignItems': 'center',
                                     'justifyContent': 'center',
                                 }}
                            >
                                Primary
                            </div>
                        </Ripple>


                        <Ripple
                            accent
                        >
                            <div className="mdc-elevation--z2"
                                 tabIndex="0"
                                 style={{
                                     'height': '10em',
                                     'width': '10em',
                                     'display': 'flex',
                                     'alignItems': 'center',
                                     'justifyContent': 'center',
                                 }}
                            >
                                Accent
                            </div>
                        </Ripple>

                    <TypographyDisplay size="1">Ripple only CSS</TypographyDisplay>

                        <TypographyHeadline>Bounded</TypographyHeadline>
                        <Ripple
                            data-no-js
                        >
                            <div className="mdc-elevation--z2"
                                 tabIndex="0"
                                 style={{
                                     'height': '10em',
                                     'width': '10em',
                                     'display': 'flex',
                                     'alignItems': 'center',
                                     'justifyContent': 'center',
                                 }}
                            >
                                Interact with me!
                            </div>
                        </Ripple>

                    <TypographyHeadline>Unbounded</TypographyHeadline>

                        <Ripple
                            data-no-js
                            unbounded
                        >
                            <div className="material-icons demo-surface"
                                 aria-label="Favorite"
                                 tabIndex="0"
                            >
                                favorite
                            </div>
                        </Ripple>
                    <TypographyHeadline>Theme Styles</TypographyHeadline>

                        <Ripple
                            data-no-js
                            primary
                        >
                            <div className="mdc-elevation--z2"
                                 tabIndex="0"
                                 style={{
                                     'height': '10em',
                                     'width': '10em',
                                     'display': 'flex',
                                     'alignItems': 'center',
                                     'justifyContent': 'center',
                                 }}
                            >
                                Primary
                            </div>
                        </Ripple>


                        <Ripple
                            data-no-js
                            accent
                        >
                            <div className="mdc-elevation--z2"
                                 tabIndex="0"
                                 style={{
                                     'height': '10em',
                                     'width': '10em',
                                     'display': 'flex',
                                     'alignItems': 'center',
                                     'justifyContent': 'center',
                                 }}
                            >
                                Accent
                            </div>
                        </Ripple>

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