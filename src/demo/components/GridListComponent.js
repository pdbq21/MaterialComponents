/**
 * Created by ruslan on 24.04.17.
 */
import React from 'react';
//import GridListTest from './test/GridList'
import {
    GridList,
    GridListTiles,
    GridListTile,
    GridListTilePrimary,
    GridListTileContent,
    GridListTileSecondary,
    GridListTileTitle,
    GridListTileSupportText,
    GridListTileIcon
} from '../../app/lib'
export default function GridListComponent() {

    return (
        <div className="demo-grid-list">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <fieldset>
                <legend>Grid List</legend>
                <div>
                    <h2>Grid List (Default): tile aspect ratio 1x1 with oneline footer caption</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 with 1px gutter</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 image only</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 with oneline header caption</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 with twoline footer caption</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at start of the
                        caption</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at start of the
                        caption</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 with oneline footer caption and icon at end of the caption</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 1x1 with twoline footer caption and icon at end of the caption</h2>
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
                </div>
                <div>
                    <h2>Grid List: tile aspect ratio 16x9 with oneline footer caption (Support: 16:9, 4:3, 3:4, 2:3, 3:2
                        as well)</h2>
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
                </div>
            </fieldset>
        </div>
    );
}
