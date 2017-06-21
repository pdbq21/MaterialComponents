/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import Highlight from 'react-highlight.js'
import {
    IconToggle,
    Elevation,
    TypographyDisplay,
    TypographyBody,
    TypographyHeadline,
} from '../lib'


export default class IconTogglePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            toggle_1: false,
            toggle_2: false,
            toggle_3: false,
            toggle_4: false,
            toggle_5: false,
            components: [
                {
                    name: 'IconToggle',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'i',
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
                            description: 'кнопка не активна'
                        },{
                            name: 'icon',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'role',
                            type: 'string',
                            required: 'no',
                            defaultValue: `'button'`,
                            description: '-'
                        },{
                            name: 'tabIndex',
                            type: 'string | number',
                            required: 'no',
                            defaultValue: `0`,
                            description: '-'
                        },
                    ]
                }
            ],
            used: `
import React, {Component} from 'react'
import {
    IconToggle,
    Elevation,
    TypographyDisplay,
} from '../lib'

class IconToggleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }    
    render() {
    const { toggle } = this.state;
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <IconToggle
                        icon
                        toggle={toggle}
                        ripple
                        onChange={({isOn}) => this.setState({
                            toggle: isOn,
                        })}
                        aria-pressed="false"
                        aria-label="Add to favorites"
                        tabIndex="0"
                        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    >
                        favorite_border
                    </IconToggle>
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
        const { toggle, toggle_1, toggle_2, toggle_3, toggle_4, toggle_5 } = this.state;
        return (
            <section>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>
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
                    <IconToggle
                        icon
                        toggle={toggle}
                        ripple
                        onChange={({isOn}) => this.setState({
                            toggle: isOn,
                        })}
                        aria-pressed="false"
                        aria-label="Add to favorites"
                        tabIndex="0"
                        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    >
                        favorite_border
                    </IconToggle>
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
                        This component is based on the MDC IconToggle, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-toggle"
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
                    className="demo-page-icon_toggle"
                >
                    <TypographyDisplay size="1">Icon Toggle</TypographyDisplay>
                    <TypographyHeadline>Using material-icons</TypographyHeadline>
                    <IconToggle
                        icon
                        toggle={toggle_1}
                        ripple
                        onChange={({isOn}) => this.setState({
                            toggle_1: isOn,
                        })}
                        aria-pressed="false"
                        aria-label="Add to favorites"
                        tabIndex="0"
                        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    >
                        favorite_border
                    </IconToggle>
                    <p>Favorited? {(toggle_1)? 'yes' : 'no'}</p>
                    <TypographyHeadline>Using Font Awesome</TypographyHeadline>
                    <IconToggle
                        elementType="span"
                        toggle={toggle_2}
                        ripple
                        onChange={({isOn}) => this.setState({
                            toggle_2: isOn,
                        })}
                        aria-pressed="false"
                        aria-label="Star this item"
                        tabIndex="0"
                        data-icon-inner-selector=".fa"
                        data-toggle-on='{"cssClass": "fa-star", "label": "Unstar this item"}'
                        data-toggle-off='{"cssClass": "fa-star-o", "label": "Star this item"}'
                    >
                        <i className="fa fa-star-o" aria-hidden="true"/>
                    </IconToggle>
                    <TypographyHeadline>Primary Colored Icons</TypographyHeadline>
                    <IconToggle
                        icon
                        primary
                        toggle={toggle_3}
                        ripple
                        onChange={({isOn}) => this.setState({
                            toggle_3: isOn,
                        })}
                        aria-pressed="false"
                        aria-label="Add to favorites"
                        tabIndex="0"
                        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    >
                        favorite_border
                    </IconToggle>
                    <TypographyHeadline>Accent Colored Icons</TypographyHeadline>
                    <IconToggle
                        icon
                        accent
                        toggle={toggle_4}
                        ripple
                        onChange={({isOn}) => this.setState({
                            toggle_4: isOn,
                        })}
                        aria-pressed="false"
                        aria-label="Add to favorites"
                        tabIndex="0"
                        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    >
                        favorite_border
                    </IconToggle>
                    <TypographyHeadline>With Ripple</TypographyHeadline>
                    <IconToggle
                        icon
                        toggle={toggle_5}
                        onChange={({isOn}) => this.setState({
                            toggle_5: isOn,
                        })}
                        aria-pressed="false"
                        aria-label="Add to favorites"
                        tabIndex="0"
                        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    >
                        favorite_border
                    </IconToggle>
                    <TypographyHeadline>Disabled Icons</TypographyHeadline>
                    <IconToggle
                        icon
                        disabled
                        toggle={false}
                        ripple
                        aria-pressed="false"
                        aria-label="Add to favorites"
                        tabIndex="0"
                        data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                        data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    >
                        favorite_border
                    </IconToggle>
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
