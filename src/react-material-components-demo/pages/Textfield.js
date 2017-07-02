/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Textfield,
  TextfieldInput,
  TextfieldLabel,
  TextfieldHelptext,
  TextfieldLine,
  Elevation,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code, Todo} from '../templates'

export default class TextfieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          name: 'Add example for .box',
          completed: false
        },
        {
          name: 'Add options function',
          completed: false
        },
        {
          name: 'Add code for all examples',
          completed: false
        },
        {
          name: 'Add new Component - TextfieldLine',
          completed: false
        },
      ],
      options: {
        disabled: false,
        dense: false,
        required: false,
        helper: false,
        persistent: false,
        validation: false
      },
      components: [
        {
          name: 'Textfield',
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
          name: 'TextfieldInput',
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
          name: 'TextfieldLabel',
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
          name: 'TextfieldHelptext',
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
  handleOptions(name, value){
    this.setState({
      options: {
        ...this.state.options,
        [name]: value.checked
      }
    })
  }
  render() {
    const {
      todo,
      options: {
        disabled,
        dense,
        required,
        helper,
        persistent,
        validation
      }
    } = this.state;
    return (
      <section className="content">
        <Demo>
          <Textfield>
            <TextfieldInput type="text"/>
            <TextfieldLabel >Text Field</TextfieldLabel>
          </Textfield>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Textfield"
          href="mdc-textfield"
        />
        <Elevation
          zSpace="2"
          className="demo-page-textfield"
        >
          <TypographyDisplay
            size="1"
          >Textfield with JS</TypographyDisplay>

          <Example
          title="Full Functionality JS Component"
          code={code.textfield.source1}
          >
            <Textfield upgraded>
              <TextfieldInput
                id="demo-full-textfield"
                name="email"
                aria-controls="my-textfield-helptext"
                required
              />
              <TextfieldLabel
                htmlFor="demo-full-textfield"
              >
                Email Address
              </TextfieldLabel>
            </Textfield>
            <TextfieldHelptext
              aria-hidden="true"
              persistent
              validation
            >
              Help Text (possibly validation message)
            </TextfieldHelptext>
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
                >
                  <CheckboxInput
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
                >
                  <CheckboxInput
                    checked={validation}
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
            title="Label float above"
            code=""
          >
            <Textfield>
              <TextfieldInput id="demo-label-above" type="text"/>
              <TextfieldLabel htmlFor="demo-label-above">Label float above</TextfieldLabel>
            </Textfield>
          </Example>
          <Example
            title="Multi-line Textfields"
            code=""
          >
            <Textfield
              multiline
              upgraded
            >
              <TextfieldInput
                elementType="textarea"
                rows="8"
                cols="40"
                id="multi-line-demo"
              />
              <TextfieldLabel htmlFor="multi-line-demo">Multi-line Label</TextfieldLabel>
            </Textfield>
          </Example>
          <Example
            title="Password field with validation"
            code=""
          >
            <Textfield
              upgraded
            >
              <TextfieldInput
                type="password"
                id="password-validation-demo"
                aria-controls="pw-validation-msg"
                required
                pattern=".{8,}"
              />
              <TextfieldLabel htmlFor="password-validation-demo">Choose password</TextfieldLabel>
            </Textfield>
            <TextfieldHelptext
              persistent
              validation
              id="pw-validation-msg"
            >
              Must be at least 8 characters long
            </TextfieldHelptext>
          </Example>


          <TypographyDisplay
            size="1"
          >Textfield Only CSS</TypographyDisplay>
          <Example
            title="Textfields - CSS Only"
            code=""
          >
            <FormField alignEnd>
              <Textfield cssOnly>
                <TextfieldInput id="textfield-only-css" placeholder="Hint text"/>
              </Textfield>
              <label
                style={{'alignSelf': 'flex-start'}}
                htmlFor="textfield-only-css"
              >Hint text: </label>
            </FormField>
          </Example>
          <Example
            title="Multi-line Textfields - CSS Only"
            code=""
          >
            <label htmlFor="css-only-multiline">About you:</label>
            <Textfield
              multiline
              cssOnly
            >
              <TextfieldInput
                elementType="textarea"
                id="css-only-multiline"
                rows="8"
                cols="40"
                placeholder="Tell the world something about yourself!"
              />
            </Textfield>
          </Example>
          <Example
            title="Full-Width Textfields"
            code=""
          >
            <Textfield upgraded fullwidth cssOnly>
              <TextfieldInput
                type="text"
                placeholder="Subject"
                aria-label="Subject"
              />
            </Textfield>
            <Textfield multiline upgraded fullwidth cssOnly>
              <TextfieldInput
                elementType="textarea"
                rows="8"
                cols="40"
                placeholder="Message"
                aria-label="Message"
              />
            </Textfield>
          </Example>


        </Elevation>
        <Todo
        list={todo}
        />
        <Footer/>
      </section>
    )
  }
}