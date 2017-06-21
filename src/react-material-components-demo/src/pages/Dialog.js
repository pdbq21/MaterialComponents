/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
//import Highlight from 'react-highlight.js'
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogFooterButton,
    DialogSurface,
    DialogTitle,
    Elevation,
    Button,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class ButtonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openScroll: false,
            components: [
                {
                    name: 'Dialog',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'aside',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'open',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'onOpen',
                            type: 'function',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'onClose',
                            type: 'function',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'onAccept',
                            type: 'function',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        }, {
                            name: 'onOpen',
                            type: 'function',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                }
            ],
            used: `
import React, {Component} from 'react'
import {
    Button,
    Elevation,
    TypographyDisplay,
} from '../lib'

class ButtonDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >

                </Elevation>
            </section>
        )
    }
}`
        };
        this.renderTable = this.renderTable.bind(this);
        this.handle = this.handle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleOpenScroll = this.handleOpenScroll.bind(this);
        this.handleCloseScroll = this.handleCloseScroll.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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


    setOpen(open) {
        this.setState({open});
    }

    handle() {
        this.setOpen(true);
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }

    setOpenScroll(openScroll) {
        this.setState({openScroll});
    }

    handleScroll() {
        this.setOpenScroll(true);
    }

    handleOpenScroll() {
        this.setOpenScroll(true);
    }

    handleCloseScroll() {
        this.setOpenScroll(false);
    }

    handleAccept() {
        console.log("Accept");
    }

    handleCancel() {
        console.log("Decline");
    }

    render() {
        const {open} = this.state;
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
                        This component is based on the MDC Dialog, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog"
                    >here</a>.
                    </TypographyBody>
                </Elevation>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Demo code</TypographyDisplay>
                    {/*<Highlight language={'javascript'}>
                        {this.state.used}
                    </Highlight>*/}
                </Elevation>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Dialog</TypographyDisplay>
                    <Button primary raised ripple onClick={this.handle}>Show Dialog</Button>
                    <Dialog
                        open={open}
                        onAccept={this.handleAccept}
                        onCancel={this.handleCancel}
                        onOpen={this.handleOpen}
                        onClose={this.handleClose}
                    >
                        <DialogSurface>
                            <DialogHeader>
                                <DialogTitle>
                                    Use Google's location service?
                                </DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                                Let Google help apps determine location. This means sending anonymous location data
                                to Google, even when no apps are running.
                            </DialogBody>
                            <DialogFooter>
                                <DialogFooterButton cancel>Decline</DialogFooterButton>
                                <DialogFooterButton accept>Accept</DialogFooterButton>
                            </DialogFooter>
                        </DialogSurface>
                    </Dialog>
                    <TypographyDisplay size="1">Dialog with List</TypographyDisplay>
                    <Button primary raised ripple onClick={this.handleScroll}>Show Scrolling Dialog</Button>

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
