/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../../lib/index'
/*    DrawerListItemDetail,
 ,
 ,
 ,
 ,
 ,
 ,
 ,*/
export default class DrawerPersistentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'DrawerPersistent',
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
                    name: 'PersistentContent',
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
                    name: 'PersistentListItem',
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
                    name: 'PersistentDrawer',
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
                    name: 'PersistentHeader',
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
                    name: 'PersistentHeaderContent',
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
                    name: 'PersistentToolbarSpacer',
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
                    <TypographyDisplay size="1">Persistent Drawer</TypographyDisplay>
                    <TypographyHeadline size="1">Persistent with ToolbarSpacer</TypographyHeadline>
                    <iframe
                        src="/drawer/persistent_toolbar_spacer"
                        frameBorder="0"
                        width='640px'
                        height='420px'
                    />
                    <TypographyHeadline size="1">Persistent with Header</TypographyHeadline>
                    <iframe
                        src="/drawer/persistent_header"
                        frameBorder="0"
                        width='640px'
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