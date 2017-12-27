/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldHelperText,
  TextFieldLine,
  Elevation,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class TextFieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        disabled: false,
        dense: false,
        required: false,
        helper: false,
        persistent: false,
        validation: false,

        disabledBox: false,
        denseBox: false
      },
      components: [
        {
          name: 'TextField',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'cssOnly',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'виключає js функціонал'
            },
            {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'upgraded',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'multiline',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'fullwidth',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'dense',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'box',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
        {
          name: 'TextFieldInput',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'input | textarea',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'TextFieldLabel',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'label',
              description: 'задає тег елемента'
            }, {
              name: 'floatAbove',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
        {
          name: 'TextFieldHelperText',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'p',
              description: 'задає тег елемента'
            }, {
              name: 'persistent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'validation',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
        {
          name: 'TextFieldLine',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'p',
              description: 'задає тег елемента'
            },
          ]
        },
      ],
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
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

  handleOptions(name, value) {
    this.setState({
      options: {
        ...this.state.options,
        [name]: value.checked
      }
    })
  }

  render() {
    const {
      options: {
        disabled,
        dense,
        required,
        helper,
        persistent,
        validation,
        disabledBox,
        denseBox
      }
    } = this.state;
    return (
      <section className="content">
        <Demo>
          <TextField>
            <TextFieldInput type="text"/>
            <TextFieldLabel >Text Field</TextFieldLabel>
            <TextFieldLine/>
          </TextField>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="TextField"
          href="mdc-textfield"
        />
        <Elevation
          zSpace="2"
          className="demo-page-textfield"
        >
          <TypographyDisplay
            size="1"
          >TextField</TypographyDisplay>

          <Example
            title="Full Functionality JS Component"
            code={code.textfield.source1}
          >
            <TextField
              upgraded
              disabled={disabled}
              dense={dense}
            >
              <TextFieldInput
                id="demo-full-textfield"
                name="email"
                aria-controls="my-textfield-helptext"
                required={required}
              />
              <TextFieldLabel
                htmlFor="demo-full-textfield"
              >
                Email Address
              </TextFieldLabel>
              <TextFieldLine/>
            </TextField>
            <TextFieldHelperText
              style={{
                'display': (helper) ? 'block' : 'none'
              }}
              aria-hidden="true"
              persistent={persistent}
              validation={validation}
            >
              Help Text (possibly validation message)
            </TextFieldHelperText>
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
                    checked={disabled}
                    onChange={({target}) => this.handleOptions('disabled', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Disabled
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={dense}
                    onChange={({target}) => this.handleOptions('dense', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Dense
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={required}
                    onChange={({target}) => this.handleOptions('required', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Required
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={helper}
                    onChange={({target}) => this.handleOptions('helper', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Use Helper Text
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                  disabled={!helper}
                >
                  <CheckboxInput
                    disabled={!helper}
                    checked={persistent}
                    onChange={({target}) => this.handleOptions('persistent', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Make helper text persistent
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                  disabled={!helper}
                >
                  <CheckboxInput
                    checked={validation}
                    disabled={!helper}
                    onChange={({target}) => this.handleOptions('validation', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Use helper text as validation message
                </CheckboxLabel>
              </FormField>
            </Elevation>
          </Example>
          <Example
            title="Text Field Boxes"
            code={code.textfield.source2}
          >
            <TextField
              box
              disabled={disabledBox}
              dense={denseBox}
            >
              <TextFieldInput type="text" id="tf-box"/>
              <TextFieldLabel htmlFor="tf-box">Your Name</TextFieldLabel>
              <TextFieldLine />
            </TextField>
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
                    checked={disabledBox}
                    onChange={({target}) => this.handleOptions('disabledBox', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Disabled
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={denseBox}
                    onChange={({target}) => this.handleOptions('denseBox', target)}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Dense
                </CheckboxLabel>
              </FormField>
            </Elevation>
          </Example>
          <Example
            title="Label float above"
            code={code.textfield.source3}
          >
            <TextField>
              <TextFieldInput id="demo-label-above" type="text"/>
              <TextFieldLabel htmlFor="demo-label-above">Label float above</TextFieldLabel>
              <TextFieldLine/>
            </TextField>
          </Example>
          <Example
            title="Multi-line TextFields"
            code={code.textfield.source4}
          >
            <TextField
              multiline
              upgraded
            >
              <TextFieldInput
                elementType="textarea"
                rows="8"
                cols="40"
                id="multi-line-demo"
              />
              <TextFieldLabel htmlFor="multi-line-demo">Multi-line Label</TextFieldLabel>
            </TextField>
          </Example>
          <Example
            title="Password field with validation"
            code={code.textfield.source5}
          >
            <TextField
              upgraded
            >
              <TextFieldInput
                type="password"
                id="password-validation-demo"
                aria-controls="pw-validation-msg"
                required
                pattern=".{8,}"
              />
              <TextFieldLabel htmlFor="password-validation-demo">Choose password</TextFieldLabel>
            </TextField>
            <TextFieldHelperText
              persistent
              validation
              id="pw-validation-msg"
            >
              Must be at least 8 characters long
            </TextFieldHelperText>
          </Example>
          <Example
            title="TextFields - CSS Only"
            code={code.textfield.source6}
          >
            <FormField alignEnd>
              <TextField cssOnly>
                <TextFieldInput id="textfield-only-css" placeholder="Hint text"/>
              </TextField>
              <label
                style={{'alignSelf': 'flex-start'}}
                htmlFor="textfield-only-css"
              >Hint text: </label>
            </FormField>
          </Example>
          <Example
            title="Multi-line TextFields - CSS Only"
            code={code.textfield.source7}
          >
            <label htmlFor="css-only-multiline">About you:</label>
            <TextField
              multiline
              cssOnly
            >
              <TextFieldInput
                elementType="textarea"
                id="css-only-multiline"
                rows="8"
                cols="40"
                placeholder="Tell the world something about yourself!"
              />
            </TextField>
          </Example>
          <Example
            title="Full-Width TextFields - CSS Only"
            code={code.textfield.source8}
          >
            <TextField upgraded fullwidth cssOnly>
              <TextFieldInput
                type="text"
                placeholder="Subject"
                aria-label="Subject"
              />
            </TextField>
            <TextField multiline upgraded fullwidth cssOnly>
              <TextFieldInput
                elementType="textarea"
                rows="8"
                cols="40"
                placeholder="Message"
                aria-label="Message"
              />
            </TextField>
          </Example>
          <Example
            title="CSS-only text field boxes"
            code={code.textfield.source9}
          >
            <label htmlFor="css-only-textfield-box">Your name:</label>
            <TextField box cssOnly>
              <TextFieldInput type="text" id="css-only-textfield-box" placeholder="Name"/>
            </TextField>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}