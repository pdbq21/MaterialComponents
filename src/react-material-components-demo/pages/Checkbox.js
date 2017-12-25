/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import {
  Checkbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxBG,
  Elevation,
  Button,
  FormField,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class CheckboxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      indeterminate: false,
      components: [
        {
          name: 'Checkbox',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            }, {
              name: 'ripple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'додає Ripple ефект'
            }, {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'стає не активний'
            },
          ]
        },
        {
          name: 'CheckboxLabel',
          property: [
            {
              description: 'no specific props'
            },
          ]
        },
        {
          name: 'CheckboxBackground',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'CheckboxCheckmark',
          property: [
            {
              name: 'viewBox',
              type: 'string',
              required: 'no',
              defaultValue: `'0 0 24 24'`,
              description: 'svg option'
            }, {
              name: 'xmlns',
              type: 'string',
              required: 'no',
              defaultValue: `'http://www.w3.org/2000/svg'`,
              description: 'svg option'
            },
          ]
        },
        {
          name: 'CheckboxInput',
          property: [
            {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: `false`,
              description: 'стає не активним'
            }, {
              name: 'checked',
              type: 'bool',
              required: 'no',
              defaultValue: `false`,
              description: 'checkbox option'
            }, {
              name: 'indeterminate',
              type: 'bool',
              required: 'no',
              defaultValue: `false`,
              description: 'checkbox option'
            }, {
              name: 'onChange',
              type: 'function',
              required: 'no',
              defaultValue: `no`,
              description: 'зміна стану checkbox'
            },
          ]
        },
        {
          name: 'CheckboxMixedmark',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'CheckboxPath',
          property: [
            {
              name: 'fill',
              type: 'string',
              required: 'no',
              defaultValue: `'none'`,
              description: 'svg option'
            }, {
              name: 'stroke',
              type: 'string',
              required: 'no',
              defaultValue: `'white'`,
              description: 'svg option'
            }, {
              name: 'd',
              type: 'string',
              required: 'no',
              defaultValue: `'M1.73,12.91 8.1,19.28 22.79,4.59'`,
              description: 'svg option'
            },
          ]
        },
        {
          name: 'CheckboxBG',
          property: [
            {
              description: `це компонент CheckboxBackground який поєднує в собі CheckboxBackground, CheckboxCheckmark, CheckboxPath 
              з default props`
            },
          ]
        },
      ],
    };
    this.renderTable = this.renderTable.bind(this);

    this.handelIndeterminate = this.handelIndeterminate.bind(this);
    this.handelDisabled = this.handelDisabled.bind(this);
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

  handelIndeterminate() {
    this.setState({
      indeterminate: true
    })
  }

  handelDisabled() {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  render() {
    const {disabled, indeterminate} = this.state;
    return (
      <section
        className="content"
      >
        <Demo>
          <Checkbox
            ripple
          >
            <CheckboxInput
              onChange={({target}) => this.setState({
                checked: target.checked,
              })}
            />
            <CheckboxBG/>
          </Checkbox>
          <CheckboxLabel>
            Checkbox
          </CheckboxLabel>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Checkbox"
          href="mdc-checkbox"
        />

        <Elevation
          zSpace="2"
        >
          <TypographyDisplay size="1">Checkbox</TypographyDisplay>
          <Example
            title="Checkbox With JS"
            code={code.checkbox.source1}
          >
            <FormField>
              <Checkbox
                ripple
                disabled={disabled}
              >
                <CheckboxInput
                  id="checkbox1"
                  onChange={({target}) => this.setState({
                    checked: target.checked,
                    indeterminate: false
                  })}
                  aria-labelledby="checkbox_label1"
                  disabled={disabled}
                  indeterminate={indeterminate}
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel id="checkbox_label1" htmlFor="checkbox1">
                The checkbox is currently
              </CheckboxLabel>
            </FormField>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'row nowrap',
                'marginTop': '1em'
              }}
            >
              <Button
                raised
                ripple
                onClick={this.handelIndeterminate}
                style={{'marginRight': '0.5em'}}
              >Make indeterminate</Button>
              <Button raised ripple onClick={this.handelDisabled}>Toggle Disabled</Button>
            </Elevation>
          </Example>
          <Example
            title="Checkbox - CSS Only"
            code={code.checkbox.source2}
          >
            <FormField>
              <Checkbox
                disabled={disabled}
              >
                <CheckboxInput
                  disabled={disabled}
                  indeterminate={indeterminate}
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel>
                The checkbox is currently
              </CheckboxLabel>
            </FormField>
          </Example>
          <Example
            title="Checkbox - CSS Only + Disabled"
            code={code.checkbox.source3}
          >
            <FormField>
              <Checkbox
                disabled
              >
                <CheckboxInput
                  disabled={true}
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel>
                The checkbox is currently
              </CheckboxLabel>
            </FormField>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
