/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import Highlight from 'react-highlight.js'
import {
    GridList,
    GridListTiles,
    GridListTile,
    GridListTilePrimary,
    GridListTileContent,
    GridListTileSecondary,
    GridListTileTitle,
    GridListTileSupportText,
    GridListTileIcon,
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class GridListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'GridList',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'gutter',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'header',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'twoline',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'alignStart',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'alignEnd',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'aspect',
                            type: 'string',
                            required: 'no',
                            defaultValue: 'null | 1x1 | 16x9 | 2x3 | 3x2 | 4x3 | 3x4',
                            description: '-'
                        },
                    ]
                }, {
                    name: 'GridListTiles',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'ul',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'GridListTile',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'li',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'GridListTilePrimary',
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
                    name: 'GridListTileContent',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'img',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'GridListTileSecondary',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'span',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'GridListTileTitle',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'span',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'GridListTileSupportText',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'span',
                            description: 'задає тег елемента'
                        }
                    ]
                }, {
                    name: 'GridListTileIcon',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'i',
                            description: 'задає тег елемента'
                        }, {
                            name: 'icon',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }
                    ]
                },
            ],
            used: `
import React, {Component} from 'react'
import {
    GridList,
    GridListTiles,
    GridListTile,
    GridListTilePrimary,
    GridListTileContent,
    GridListTileSecondary,
    GridListTileTitle,
    Elevation,
    TypographyDisplay,
    TypographyHeadline,
} from '../lib'

class ButtonDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Grid List</TypographyDisplay>
                    <TypographyHeadline>
                        Grid List (Default): tile aspect ratio 1x1 with oneline footer caption
                    </TypographyHeadline>
                    <GridList>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                </GridListTileSecondary>
                            </GridListTile>
                            <GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        <GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        <GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>
                </Elevation>
            </section>
        )
    }
}`
        };
        this.renderTable = this.renderTable.bind(this);
        this.renderDemo = this.renderDemo.bind(this);
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

    renderDemo() {
        let grid = [];
        for (let i = 0; i < 15; i++) {
            grid.push(
                <GridListTile
                    key={`key-grid-${i}`}
                    style={{
                        'width': '60px',
                    }}
                >
                    <GridListTilePrimary/>
                </GridListTile>
            )
        }
        return grid;
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
                    <GridList
                        style={{
                            'width': '320px',
                        }}
                    >
                        <GridListTiles>
                            {this.renderDemo()}
                        </GridListTiles>
                    </GridList>
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
                        This component is based on the MDC Grid List, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-grid-list"
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
                    className="demo-page-grid_list"
                >
                    <TypographyDisplay size="1">Grid List</TypographyDisplay>

                    <TypographyHeadline>Grid List (Default): tile aspect ratio 1x1 with oneline footer
                        caption</TypographyHeadline>
                    <GridList>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 with 1px gutter</TypographyHeadline>
                    <GridList gutter>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 image only</TypographyHeadline>
                    <GridList>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 with oneline header
                        caption</TypographyHeadline>
                    <GridList header>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 with twoline footer
                        caption</TypographyHeadline>
                    <GridList twoline>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                    <GridListTileSupportText>
                                        Support text
                                    </GridListTileSupportText>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at start
                        of the
                        caption</TypographyHeadline>
                    <GridList alignStart>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileIcon icon>
                                        star_border
                                    </GridListTileIcon>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at start
                        of the
                        caption</TypographyHeadline>
                    <GridList twoline alignStart>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileIcon icon>
                                        star_border
                                    </GridListTileIcon>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                    <GridListTileSupportText>
                                        Support Text
                                    </GridListTileSupportText>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at end of
                        the caption</TypographyHeadline>
                    <GridList alignEnd>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileIcon icon>
                                        star_border
                                    </GridListTileIcon>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at end of
                        the caption</TypographyHeadline>
                    <GridList twoline alignEnd>
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/1-1.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileIcon icon>
                                        star_border
                                    </GridListTileIcon>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                    <GridListTileSupportText>
                                        Support Text
                                    </GridListTileSupportText>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                                />
                            </GridListTilePrimary>
                            <GridListTileSecondary>
                                <GridListTileIcon icon>
                                    star_border
                                </GridListTileIcon>
                                <GridListTileTitle>
                                    Single Very Long Grid Title Line
                                </GridListTileTitle>
                                <GridListTileSupportText>
                                    Support Text
                                </GridListTileSupportText>
                            </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>


                    <TypographyHeadline>Grid List: tile aspect ratio 16x9 with oneline footer caption (Support: 16:9,
                        4:3, 3:4, 2:3, 3:2
                        as well)</TypographyHeadline>
                    <GridList aspect="16x9">
                        <GridListTiles>
                            <GridListTile>
                                <GridListTilePrimary>
                                    <GridListTileContent
                                        src="https://material-components-web.appspot.com/images/16-9.jpg"
                                    />
                                </GridListTilePrimary>
                                <GridListTileSecondary>
                                    <GridListTileTitle>
                                        Single Very Long Grid Title Line
                                    </GridListTileTitle>
                                </GridListTileSecondary>
                            </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/16-9.jpg"
                                />
                            </GridListTilePrimary><GridListTileSecondary>
                            <GridListTileTitle>
                                Single Very Long Grid Title Line
                            </GridListTileTitle>
                        </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/16-9.jpg"
                                />
                            </GridListTilePrimary><GridListTileSecondary>
                            <GridListTileTitle>
                                Single Very Long Grid Title Line
                            </GridListTileTitle>
                        </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/16-9.jpg"
                                />
                            </GridListTilePrimary><GridListTileSecondary>
                            <GridListTileTitle>
                                Single Very Long Grid Title Line
                            </GridListTileTitle>
                        </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/16-9.jpg"
                                />
                            </GridListTilePrimary><GridListTileSecondary>
                            <GridListTileTitle>
                                Single Very Long Grid Title Line
                            </GridListTileTitle>
                        </GridListTileSecondary>
                        </GridListTile><GridListTile>
                            <GridListTilePrimary>
                                <GridListTileContent
                                    src="https://material-components-web.appspot.com/images/16-9.jpg"
                                />
                            </GridListTilePrimary><GridListTileSecondary>
                            <GridListTileTitle>
                                Single Very Long Grid Title Line
                            </GridListTileTitle>
                        </GridListTileSecondary>
                        </GridListTile>
                        </GridListTiles>
                    </GridList>

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
