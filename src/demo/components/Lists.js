/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';

import {
    List,
    ListGroup,
    ListItem,
    ListGroupSubheader,
    ListDivider,
    ListItemText,
    ListItemTextPrimary,
    ListItemTextSecondary,
    ListItemDetail
} from '../../app/index'

export default function Lists() {

    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <fieldset>
                <legend>Single-Line List</legend>
                <section>
                    <h2>Text only</h2>
                    <List>
                        <ListItem>Single-line item</ListItem>
                        <ListItem>Single-line item</ListItem>
                        <ListItem>Single-line item</ListItem>
                    </List>
                    <h2>Text (dense)</h2>
                    <List dense>
                        <ListItem>Single-line item</ListItem>
                        <ListItem>Single-line item</ListItem>
                        <ListItem>Single-line item</ListItem>
                    </List>
                    <h2>Start Detail</h2>
                    <List>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                    </List>
                    <h2>Start Detail (dense)</h2>
                    <List dense>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                    </List>
                    <h2>Start Detail Example - Icon with Text</h2>
                    <List>
                        <ListItem>
                            <ListItemDetail start icon aria-hidden='true'>
                                network_wifi
                            </ListItemDetail>Single-line item</ListItem>
                        <ListItem>
                            <ListItemDetail start icon aria-hidden='true'>
                                bluetooth
                            </ListItemDetail>Single-line item</ListItem>
                        <ListItem>
                            <ListItemDetail start icon aria-hidden='true'>
                                data_usage
                            </ListItemDetail>Single-line item</ListItem>
                    </List>
                    <h2>Avatar List</h2>
                    <List avatar>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                    </List>
                    <h2>Avatar List (dense)</h2>
                    <List avatar dense>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
                    </List>
                    <h2>Example - Avatar with Text</h2>
                    <List avatar>
                        <ListItem>
                            <ListItemDetail
                                start
                                elementType="img"
                                src="http://material-components-web.appspot.com/images/animal2.svg"
                            />Single-line item</ListItem>
                        <ListItem>
                            <ListItemDetail
                                start
                                elementType="img"
                                src="http://material-components-web.appspot.com/images/animal3.svg"
                            />Single-line item</ListItem>
                        <ListItem>
                            <ListItemDetail
                                start
                                elementType="img"
                                src="http://material-components-web.appspot.com/images/animal1.svg"
                            />
                            Single-line item
                        </ListItem>
                    </List>

                    <h2>End Detail</h2>
                    <List>
                        <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                    </List>

                    <h2>End Detail (dense)</h2>
                    <List dense>
                        <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                    </List>
                    <h2>Avatar List + End</h2>
                    <List avatar>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
                        </ListItem>
                    </List>
                    <h2>Avatar List + End (dense)</h2>
                    <List avatar dense>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
                        </ListItem>
                    </List>
                    <h2>Example - Avatar with Text and icon</h2>
                    <List avatar dense>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail
                                end
                                icon
                                elementType='a'
                                href='#'
                                style={{'textDecoration': 'none', 'color': '#ff4081'}}
                            >
                                favorite_border
                            </ListItemDetail>
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail
                                end
                                icon
                                elementType='a'
                                href='#'
                                style={{'textDecoration': 'none', 'color': '#ff4081'}}
                            >
                                favorite_border
                            </ListItemDetail>
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item
                            <ListItemDetail
                                end
                                icon
                                elementType='a'
                                href='#'
                                style={{'textDecoration': 'none', 'color': '#ff4081'}}
                            >
                                favorite
                            </ListItemDetail>
                        </ListItem>
                    </List>
                </section>
            </fieldset>

            <fieldset>
                <legend>Two-line List</legend>
                <section>
                    <h2>Text only</h2>
                    <List twoLine>
                        <ListItem>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Two-line item
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Secondary text
                                </ListItemTextSecondary>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Two-line item
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Secondary text
                                </ListItemTextSecondary>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Two-line item
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Secondary text
                                </ListItemTextSecondary>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <h2>Text (dense)</h2>
                    <List twoLine dense>
                        <ListItem>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Two-line item
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Secondary text
                                </ListItemTextSecondary>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Two-line item
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Secondary text
                                </ListItemTextSecondary>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Two-line item
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Secondary text
                                </ListItemTextSecondary>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <h2>Start Detail</h2>
                    <List twoLine>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                    </List>
                    <h2>Start Detail (dense)</h2>
                    <List dense twoLine>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                    </List>
                    <h2>Start Detail Example - Icon with Text</h2>
                    <List>
                        <ListItem>
                            <ListItemDetail start icon aria-hidden='true'>
                                network_wifi
                            </ListItemDetail>Single-line item</ListItem>
                        <ListItem>
                            <ListItemDetail start icon aria-hidden='true'>
                                bluetooth
                            </ListItemDetail>Single-line item</ListItem>
                        <ListItem>
                            <ListItemDetail start icon aria-hidden='true'>
                                data_usage
                            </ListItemDetail>Single-line item</ListItem>
                    </List>
                    <h2>Avatar List</h2>
                    <List avatar>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                    </List>
                    <h2>Avatar List (dense)</h2>
                    <List avatar dense>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Two-line item
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Secondary text
                                </ListItemTextSecondary>
                            </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                        <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                        </ListItem>
                    </List>
                    <h2>End Detail</h2>
                    <List>
                        <ListItem> <ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem> <ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem> <ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                    </List>
                    <h2>End Detail (dense)</h2>
                    <List dense>
                        <ListItem> <ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem> <ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                        <ListItem> <ListItemText>
                            <ListItemTextPrimary>
                                Two-line item
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Secondary text
                            </ListItemTextSecondary>
                        </ListItemText>
                            <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
                    </List>
                    <h2>Example - Two-line avatar + text + icon</h2>
                    <List avatar twoLine>
                        <ListItem>
                            <ListItemDetail
                                start
                                role="presentation"
                                style={{
                                    'backgroundColor': 'grey',
                                    'display': 'inline-flex',
                                    'alignItems': 'center',
                                    'justifyContent': 'center',
                                    'color': 'white'
                                }}>
                                <i className="material-icons" aria-hidden="true">folder</i>
                            </ListItemDetail>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Photos
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Jan 13, 2017
                                </ListItemTextSecondary>
                            </ListItemText>
                            <ListItemDetail
                                end
                                icon
                                elementType='a'
                                href='#'
                                style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                            >
                                info
                            </ListItemDetail>
                        </ListItem>
                        <ListItem>
                            <ListItemDetail
                                start
                                role="presentation"
                                style={{
                                    'backgroundColor': 'grey',
                                    'display': 'inline-flex',
                                    'alignItems': 'center',
                                    'justifyContent': 'center',
                                    'color': 'white'
                                }}>
                                <i className="material-icons" aria-hidden="true">folder</i>
                            </ListItemDetail>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Photos
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Jan 13, 2017
                                </ListItemTextSecondary>
                            </ListItemText>
                            <ListItemDetail
                                end
                                icon
                                elementType='a'
                                href='#'
                                style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                            >
                                info
                            </ListItemDetail>
                        </ListItem><ListItem>
                        <ListItemDetail
                            start
                            role="presentation"
                            style={{
                                'backgroundColor': 'grey',
                                'display': 'inline-flex',
                                'alignItems': 'center',
                                'justifyContent': 'center',
                                'color': 'white'
                            }}>
                            <i className="material-icons" aria-hidden="true">folder</i>
                        </ListItemDetail>
                        <ListItemText>
                            <ListItemTextPrimary>
                                Photos
                            </ListItemTextPrimary>
                            <ListItemTextSecondary>
                                Jan 13, 2017
                            </ListItemTextSecondary>
                        </ListItemText>
                        <ListItemDetail
                            end
                            icon
                            elementType='a'
                            href='#'
                            style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                        >
                            info
                        </ListItemDetail>
                    </ListItem>
                    </List>
                </section>
            </fieldset>
            <fieldset>
                <legend>List Dividers</legend>
                <section>
                    <h2>Full-Width Dividers</h2>
                    <List>
                        <ListItem>Single-line item - section 1</ListItem>
                        <ListItem>Single-line item - section 1</ListItem>
                        <ListItem>Single-line item - section 1</ListItem>
                        <ListDivider />
                        <ListItem>Single-line item - section 2</ListItem>
                        <ListItem>Single-line item - section 2</ListItem>
                    </List>
                    <h2>Inset Dividers</h2>
                    <List avatar>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item - section 1
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item - section 1
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item - section 1
                        </ListItem>
                        <ListDivider inset/>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item - section 2
                        </ListItem>
                        <ListItem>
                            <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                            Single-line item - section 2
                        </ListItem>
                    </List>
                </section>
            </fieldset>
            <fieldset>
                <legend>List Groups</legend>
                <section>
                    <h2>Basic Usage</h2>
                    <ListGroup>
                        <ListGroupSubheader>List 1</ListGroupSubheader>
                        <List>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                        </List>
                        <ListDivider />
                        <ListGroupSubheader>List 2</ListGroupSubheader>
                        <List>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                            <ListItem>Single-line item</ListItem>
                        </List>
                    </ListGroup>
                    <h2>Example - Two-line Lists, Avatars, end detail, inset dividers</h2>
                    <ListGroup>
                        <ListGroupSubheader>Folders</ListGroupSubheader>
                        <List avatar twoLine>
                            <ListItem>
                                <ListItemDetail
                                    start
                                    role="presentation"
                                    style={{
                                        'backgroundColor': 'grey',
                                        'display': 'inline-flex',
                                        'alignItems': 'center',
                                        'justifyContent': 'center',
                                        'color': 'white'
                                    }}>
                                    <i className="material-icons" aria-hidden="true">folder</i>
                                </ListItemDetail>
                                <ListItemText>
                                    <ListItemTextPrimary>
                                        Photos
                                    </ListItemTextPrimary>
                                    <ListItemTextSecondary>
                                        Jan 13, 2017
                                    </ListItemTextSecondary>
                                </ListItemText>
                                <ListItemDetail
                                    end
                                    icon
                                    elementType='a'
                                    href='#'
                                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                                >
                                    info
                                </ListItemDetail>
                            </ListItem>
                            <ListItem>
                                <ListItemDetail
                                    start
                                    role="presentation"
                                    style={{
                                        'backgroundColor': 'grey',
                                        'display': 'inline-flex',
                                        'alignItems': 'center',
                                        'justifyContent': 'center',
                                        'color': 'white'
                                    }}>
                                    <i className="material-icons" aria-hidden="true">folder</i>
                                </ListItemDetail>
                                <ListItemText>
                                    <ListItemTextPrimary>
                                        Photos
                                    </ListItemTextPrimary>
                                    <ListItemTextSecondary>
                                        Jan 13, 2017
                                    </ListItemTextSecondary>
                                </ListItemText>
                                <ListItemDetail
                                    end
                                    icon
                                    elementType='a'
                                    href='#'
                                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                                >
                                    info
                                </ListItemDetail>
                            </ListItem>
                            <ListItem>
                                <ListItemDetail
                                    start
                                    role="presentation"
                                    style={{
                                        'backgroundColor': 'grey',
                                        'display': 'inline-flex',
                                        'alignItems': 'center',
                                        'justifyContent': 'center',
                                        'color': 'white'
                                    }}>
                                    <i className="material-icons" aria-hidden="true">folder</i>
                                </ListItemDetail>
                                <ListItemText>
                                    <ListItemTextPrimary>
                                        Photos
                                    </ListItemTextPrimary>
                                    <ListItemTextSecondary>
                                        Jan 13, 2017
                                    </ListItemTextSecondary>
                                </ListItemText>
                                <ListItemDetail
                                    end
                                    icon
                                    elementType='a'
                                    href='#'
                                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                                >
                                    info
                                </ListItemDetail>
                            </ListItem>
                        </List>
                        <ListDivider elementType="hr"/>
                        <ListGroupSubheader>Files</ListGroupSubheader>
                        <List avatar twoLine>
                            <ListItem>
                                <ListItemDetail
                                    start
                                    role="presentation"
                                    style={{
                                        'backgroundColor': 'grey',
                                        'display': 'inline-flex',
                                        'alignItems': 'center',
                                        'justifyContent': 'center',
                                        'color': 'white'
                                    }}>
                                    <i className="material-icons" aria-hidden="true">insert_drive_file</i>
                                </ListItemDetail>
                                <ListItemText>
                                    <ListItemTextPrimary>
                                        Photos
                                    </ListItemTextPrimary>
                                    <ListItemTextSecondary>
                                        Jan 13, 2017
                                    </ListItemTextSecondary>
                                </ListItemText>
                                <ListItemDetail
                                    end
                                    icon
                                    elementType='a'
                                    href='#'
                                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                                >
                                    info
                                </ListItemDetail>
                            </ListItem>
                            <ListItem>
                                <ListItemDetail
                                    start
                                    role="presentation"
                                    style={{
                                        'backgroundColor': 'grey',
                                        'display': 'inline-flex',
                                        'alignItems': 'center',
                                        'justifyContent': 'center',
                                        'color': 'white'
                                    }}>
                                    <i className="material-icons" aria-hidden="true">insert_drive_file</i>
                                </ListItemDetail>
                                <ListItemText>
                                    <ListItemTextPrimary>
                                        Photos
                                    </ListItemTextPrimary>
                                    <ListItemTextSecondary>
                                        Jan 13, 2017
                                    </ListItemTextSecondary>
                                </ListItemText>
                                <ListItemDetail
                                    end
                                    icon
                                    elementType='a'
                                    href='#'
                                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                                >
                                    info
                                </ListItemDetail>
                            </ListItem><ListItem>
                            <ListItemDetail
                                start
                                role="presentation"
                                style={{
                                    'backgroundColor': 'grey',
                                    'display': 'inline-flex',
                                    'alignItems': 'center',
                                    'justifyContent': 'center',
                                    'color': 'white'
                                }}>
                                <i className="material-icons" aria-hidden="true">insert_drive_file</i>
                            </ListItemDetail>
                            <ListItemText>
                                <ListItemTextPrimary>
                                    Photos
                                </ListItemTextPrimary>
                                <ListItemTextSecondary>
                                    Jan 13, 2017
                                </ListItemTextSecondary>
                            </ListItemText>
                            <ListItemDetail
                                end
                                icon
                                elementType='a'
                                href='#'
                                style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                            >
                                info
                            </ListItemDetail>
                        </ListItem>
                        </List>
                    </ListGroup>
                </section>
            </fieldset>
            <fieldset>
                <legend>Interactive Lists (with ink ripple)</legend>
                <section>
                    <h2>Example - Interactive List</h2>
                    <List>
                        <ListItem ripple>
                            <ListItemDetail start icon aria-hidden='true'>
                                network_wifi
                            </ListItemDetail>Single-line item</ListItem>
                        <ListItem ripple>
                            <ListItemDetail start icon aria-hidden='true'>
                                bluetooth
                            </ListItemDetail>Single-line item</ListItem>
                        <ListItem ripple>
                            <ListItemDetail start icon aria-hidden='true'>
                                data_usage
                            </ListItemDetail>Single-line item</ListItem>
                    </List>

                </section>
            </fieldset>
        </div>
    );
}