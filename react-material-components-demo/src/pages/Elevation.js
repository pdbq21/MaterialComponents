/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import Highlight from 'react-highlight.js'
import {
    Elevation,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseIn: false,
            components: [
                {
                    name: 'Elevation',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: '',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'zSpace',
                            type: 'string | number',
                            required: 'no',
                            defaultValue: '0 | 0 - 24',
                            description: 'задає розбір підйому'
                        },{
                            name: 'transition',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'при наведені піднімається'
                        },
                    ]
                }
            ],
            used: `
import React, {Component} from 'react'
import {
    Elevation,
} from '../lib'

class ElevationDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <Elevation zSpace={2}
                               style={{
                                   'backgroundColor': 'white',
                                   'height': '10em',
                                   'width': '10em',
                                   'display': 'flex',
                                   'alignItems': 'center',
                                   'justifyContent': 'center',
                               }}
                    >Elevation 2dp</Elevation>
                </Elevation>
            </section>
        )
    }
}`
        };
        this.renderTable = this.renderTable.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
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






setMouseIn(mouseIn) {
    this.setState({mouseIn});
}

handleMouseEnter() {
    this.setMouseIn(true);
}

handleMouseOut() {
    this.setMouseIn(false);
}
    render() {
        const {mouseIn} = this.state;
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
                    <Elevation zSpace={2}
                               style={{
                                   'backgroundColor': 'white',
                                   'height': '10em',
                                   'width': '10em',
                                   'display': 'flex',
                                   'alignItems': 'center',
                                   'justifyContent': 'center',
                               }}
                    >Elevation 2dp</Elevation>
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
                    <TypographyDisplay size="1">Elevation</TypographyDisplay>
                    {(function (blocks, i, len) {
                            while (++i <= len) {
                                blocks.push(<Elevation
                                    key={`key-${i}`}
                                    zSpace={i}
                                    style={{
                                        'height': '10em',
                                        'width': '12em',
                                        'display': 'flex',
                                        'alignItems': 'center',
                                        'justifyContent': 'center',
                                        'margin': '2em',
                                    }}
                                >{`${i}dp (mdc-elevation--z${i})`}</Elevation>)
                            }
                            return blocks;
                        })([], -1, 24)}

                    <TypographyDisplay size="1">Elevation with transition</TypographyDisplay>
                    <Elevation
                        zSpace={(mouseIn)? 8 : 2}
                        transition
                        onMouseEnter={this.handleMouseEnter}
                        onMouseOut={this.handleMouseOut}
                        style={{
                            'height': '10em',
                            'width': '12em',
                            'display': 'flex',
                            'alignItems': 'center',
                            'justifyContent': 'center',
                            'margin': '2em',
                        }}
                    > 2dp (mdc-elevation--z2) | 8dp (mdc-elevation--z8) </Elevation>
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
