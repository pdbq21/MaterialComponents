import React, {Component} from 'react'
import {
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../../lib/index'

export default class DrawerTemporaryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'DrawerTemporary',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'aside',
                            description: 'задає тег елемента'
                        }, {
                            name: 'onOpen',
                            type: 'function',
                            required: 'no',
                            defaultValue: '-',
                            description: '-'
                        }, {
                            name: 'onClose',
                            type: 'function',
                            required: 'no',
                            defaultValue: '-',
                            description: '-'
                        },
                    ]
                }, {
                    name: 'TemporaryContent',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'nav',
                            description: 'задає тег елемента'
                        },
                    ]
                }, {
                    name: 'TemporaryListItem',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'a',
                            description: 'задає тег елемента'
                        }, {
                            name: 'selected',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                }, {
                    name: 'DrawerListItemDetail',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'a',
                            description: 'задає тег елемента'
                        }, {
                            name: 'icon',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'start',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'end',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                }, {
                    name: 'TemporaryDrawer',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'nav',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'TemporaryHeader',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'header',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'TemporaryHeaderContent',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'TemporaryToolbarSpacer',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        }
                    ]
                },
            ],
            used: ``
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
                        This component is based on the MDC Drawer, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer"
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
                    className="demo-page-drawer_temporary"
                >
                    <TypographyDisplay size="1">Drawer Temporary</TypographyDisplay>
                    <TypographyHeadline size="1">Temporary with ToolbarSpacer</TypographyHeadline>
                    <iframe
                        src="/drawer/temporary_toolbar_spacer"
                        frameBorder="0"
                        width='320px'
                        height='420px'
                    />
                    <TypographyHeadline size="1">Temporary with Header</TypographyHeadline>
                    <iframe
                        src="/drawer/temporary_header"
                        frameBorder="0"
                        width='320px'
                        height='420px'
                    />
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