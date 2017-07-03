/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
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
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

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
    };
    this.renderTable = this.renderTable.bind(this);
    this.renderDemo = this.renderDemo.bind(this);
  }

  renderTable() {
    const {components} = this.state;
    return components.map(({name, property}, index) => (
        <Table
          key={`key-table-${index}`}
          name={name}
          property={property}
        />
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
      <section
        className="content"
      >

        <Demo>
          <GridList
            style={{
              'width': '320px',
            }}
          >
            <GridListTiles>
              {this.renderDemo()}
            </GridListTiles>
          </GridList>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Grid List"
          href="mdc-grid-list"
        />
        <Elevation
          zSpace="2"
          className="demo-page-grid_list"
        >
          <TypographyDisplay size="1">Grid List</TypographyDisplay>
          <Example
          title=""
          code={code.gridList.source1}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source2}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source3}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source4}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source5}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source6}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source7}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source8}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source9}
          >
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
          </Example>
          <Example
          title=""
          code={code.gridList.source10}
          >
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
          </Example>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}
