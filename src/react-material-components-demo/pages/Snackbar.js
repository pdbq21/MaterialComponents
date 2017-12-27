/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Snackbar,
  SnackbarText,
  SnackbarActionWrapper,
  SnackbarActionButton,
  Elevation,
  Button,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  FormField,
  TextField,
  TextFieldLine,
  TextFieldInput,
  TextFieldLabel,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class SnackbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      checkedMultiline: false,
      checkedAction: false,
      checkedAlign: false,
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
            }, {
              name: 'actionText',
              type: 'string',
              required: 'no',
              defaultValue: `''`,
              description: '-'
            }, {
              name: 'timeout',
              type: 'string | number',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'multiline',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'actionOnBottom',
              type: 'bool',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'actionHandler',
              type: 'bool',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'open',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'SnackbarText',
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
          name: 'SnackbarActionWrapper',
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
          name: 'SnackbarActionButton',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'Button',
              description: 'задає тег елемента'
            }
          ]
        },
      ],
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
    this.handleChangeCheckedAlign = this.handleChangeCheckedAlign.bind(this);
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
  handleChangeCheckedAlign() {
    this.setState({
      checkedAlign: !this.state.checkedAlign
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
      checkedAlign,
    } = this.state;

    return (
      <section className="content">
        <Demo
          className="demo-page-snackbar_view"
        >
          <div
            className="mdc-snackbar mdc-snackbar--active"
            aria-live="assertive"
            aria-atomic="true"
            aria-hidden="true"
          >
            <div className="mdc-snackbar__text">Message sent</div>
            <div className="mdc-snackbar__action-wrapper">
              <button type="button" className="mdc-button mdc-snackbar__action-button">Undo</button>
            </div>
          </div>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Snackbar"
          href="mdc-snackbar"
        />
        <Elevation
          zSpace="2"
          className="demo-page-snackbar"
          style={{
            'display': 'flex',
            'flexFlow': 'column nowrap',
          }}
        >
          <TypographyDisplay size="1">Snackbar</TypographyDisplay>
          <Example
            title="Snackbar"
            code={code.snackbar.source1}
          >
            <Button raised onClick={this.handel}>Show Snackbar</Button>

            <Snackbar
              open={open}
              start={checkedAlign}
              message={valueMessage}
              timeout={valueTimeout}
              actionHandler={this.handelAction}
              actionText={valueAction}
              multiline={checkedMultiline}
              actionOnBottom={checkedAction}
              onClose={this.handleClose}
              aria-live="assertive"
              aria-atomic="true"
            >
              <SnackbarText/>
              <SnackbarActionWrapper>
                <SnackbarActionButton/>
              </SnackbarActionWrapper>
            </Snackbar>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'column nowrap',
              }}
            >
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={checkedMultiline}
                    onChange={this.handleChangeCheckedMultiline}

                  />
                  <CheckboxBG/>
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
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Action On Bottom
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={checkedAlign}
                    onChange={this.handleChangeCheckedAlign}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Start Aligned
                </CheckboxLabel>
              </FormField>
              <FormField>
                <TextField>
                  <TextFieldInput
                    type="text"
                    value={valueMessage || ''}
                    onChange={this.handleChangeMessage}
                  />
                  <TextFieldLabel>Message Text</TextFieldLabel>
                  <TextFieldLine/>
                </TextField>
              </FormField>
              <FormField>
                <TextField>
                  <TextFieldInput
                    type="text"
                    value={valueAction || ''}
                    onChange={this.handleChangeAction}
                  />
                  <TextFieldLabel>Action Text</TextFieldLabel>
                  <TextFieldLine/>
                </TextField>
              </FormField>
              <FormField>
                <TextField>
                  <TextFieldInput
                    type="text"
                    value={valueTimeout || ''}
                    onChange={this.handleChangeTimeout}
                  />
                  <TextFieldLabel>Timeout</TextFieldLabel>
                  <TextFieldLine/>
                </TextField>
              </FormField>
            </Elevation>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
