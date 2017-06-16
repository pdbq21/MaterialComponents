/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import Highlight from 'react-highlight.js'
import {
    Snackbar,
    SnackbarText,
    SnackbarActionWrapper,
    SnackbarActionButton,
    Elevation,
    Button,
    Checkbox,
    CheckboxInput,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxPath,
    CheckboxLabel,
    CheckboxMixedmark,
    FormField,
    TypographyDisplay,
    TypographyBody,
    TypographyCaption as Caption
} from '../lib'


export default class SnackbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            checkedMultiline: false,
            checkedAction: false,
            valueMessage: 'default message',
            valueAction: 'action',
            valueTimeout: '2750',//default
            components: [
                {
                    name: 'Snackbar',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'message',
                            type: 'string',
                            required: 'no',
                            defaultValue: `''`,
                            description: '-'
                        },{
                            name: 'actionText',
                            type: 'string',
                            required: 'no',
                            defaultValue: `''`,
                            description: '-'
                        },{
                            name: 'timeout',
                            type: 'string | number',
                            required: 'no',
                            defaultValue: '-',
                            description: '-'
                        },{
                            name: 'multiline',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'actionOnBottom',
                            type: 'bool',
                            required: 'no',
                            defaultValue: '-',
                            description: '-'
                        },{
                            name: 'actionHandler',
                            type: 'bool',
                            required: 'no',
                            defaultValue: '-',
                            description: '-'
                        },{
                            name: 'open',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },
            ],
            used: `
import React, {Component} from 'react'
import {
    Snackbar,
    SnackbarText,
    SnackbarActionWrapper,
    SnackbarActionButton
    Elevation,
    TypographyDisplay,
} from '../lib'

class SnackbarDemo extends Component {

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
        this.handel = this.handel.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handelAction = this.handelAction.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeAction = this.handleChangeAction.bind(this);
        this.handleChangeTimeout = this.handleChangeTimeout.bind(this);
        this.handleChangeCheckedMultiline = this.handleChangeCheckedMultiline.bind(this);
        this.handleChangeCheckedAction = this.handleChangeCheckedAction.bind(this);
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

    handel() {
        this.setState({
            open: !this.state.open
        })
    }

    handleChangeMessage({target}) {
        this.setState({
            valueMessage: target.value
        })
    }

    handleChangeAction({target}) {
        this.setState({
            valueAction: target.value
        })
    }

    handleChangeTimeout({target}) {
        this.setState({
            valueTimeout: target.value
        })
    }

    handleChangeCheckedMultiline() {
        this.setState({
            checkedMultiline: !this.state.checkedMultiline
        })
    }

    handleChangeCheckedAction() {
        this.setState({
            checkedAction: !this.state.checkedAction
        })
    }

    handelAction() {
        console.log('action')
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        const {
            open,
            checkedMultiline,
            checkedAction,
            valueMessage,
            valueAction,
            valueTimeout,
        } = this.state;

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
                    className="demo-page-snackbar_view"
                >
                    <Snackbar
                        className="mdc-snackbar--active"
                        open={true}
                        message='Message sent'
                        timeout={2750}
                        //actionHandler={this.handelAction}
                        actionText='UNDO'
                        multiline={false}
                        actionOnBottom={false}
                        //onClose={this.handleClose}
                    >
                        <SnackbarText/>
                        <SnackbarActionWrapper>
                            <SnackbarActionButton/>
                        </SnackbarActionWrapper>
                    </Snackbar>
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
                        This component is based on the MDC Snackbar, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar"
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
                    className="demo-page-snackbar"
                    style={{
                        'display': 'flex',
                        'flexFlow': 'column nowrap',
                    }}
                >
                    <TypographyDisplay size="1">Snackbar</TypographyDisplay>

                    <FormField>
                        <Checkbox
                            ripple
                        >
                            <CheckboxInput
                                checked={checkedMultiline}
                                onChange={this.handleChangeCheckedMultiline}

                            />
                            <CheckboxBackground>
                                <CheckboxCheckmark>
                                    <CheckboxPath/>
                                </CheckboxCheckmark>
                                <CheckboxMixedmark/>
                            </CheckboxBackground>
                        </Checkbox>
                        <CheckboxLabel>
                            Multiline
                        </CheckboxLabel>
                    </FormField>
                    <FormField>
                        <Checkbox
                            ripple
                        >
                            <CheckboxInput
                                checked={checkedAction}
                                onChange={this.handleChangeCheckedAction}
                            />
                            <CheckboxBackground>
                                <CheckboxCheckmark>
                                    <CheckboxPath/>
                                </CheckboxCheckmark>
                                <CheckboxMixedmark/>
                            </CheckboxBackground>
                        </Checkbox>
                        <CheckboxLabel>
                            Action On Bottom
                        </CheckboxLabel>
                    </FormField>
                    <FormField>
                        <Caption>Message Text:</Caption>
                        <input type="text" value={valueMessage || ''} onChange={this.handleChangeMessage}/>
                    </FormField>
                    <FormField>
                        <Caption>Action Text:</Caption>
                        <input type="text" value={valueAction || ''} onChange={this.handleChangeAction}/>
                    </FormField>
                    <FormField>
                        <Caption>timeout:</Caption>
                        <input type="text" value={valueTimeout || ''} onChange={this.handleChangeTimeout}/>
                    </FormField>

                    <Button primary raised onClick={this.handel}>Show Snackbar</Button>

                    <Snackbar
                        open={open}
                        message={valueMessage}
                        timeout={valueTimeout}
                        actionHandler={this.handelAction}
                        actionText={valueAction}
                        multiline={checkedMultiline}
                        actionOnBottom={checkedAction}
                        onClose={this.handleClose}
                    >
                        <SnackbarText/>
                        <SnackbarActionWrapper>
                            <SnackbarActionButton/>
                        </SnackbarActionWrapper>
                    </Snackbar>
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
