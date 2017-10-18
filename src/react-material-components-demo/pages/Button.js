/**
 * Created by ruslan on 05.06.17.
 */
import React, {Component} from 'react'
import {
  Button,
  ButtonIcon,
  Elevation,
  TypographyDisplay,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class ButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      components: [
        {
          name: 'Button',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'primary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з кольором primary'
            }, {
              name: 'accent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з кольором accent'
            }, {
              name: 'compact',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом compact'
            }, {
              name: 'dense',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом dense'
            }, {
              name: 'raised',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом raised'
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
              description: 'кнопка не активна. працює якщо тип кнопки button'
            },
          ]
        }
      ],
    };
    this.renderTable = this.renderTable.bind(this);
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

  render() {
    const {disabled} = this.state;
    return (
      <section
        className="content"
      >
        <Demo>
          <Button
            ripple
            style={{
              'marginRight': '15px',
            }}
          >
            Flat
          </Button>
          <Button
            ripple
            raised
            primary
            style={{
              'marginLeft': '15px',
            }}
          >
            Raised
          </Button>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Button"
          href="mdc-button"
        />
        <Elevation
          zSpace="2"
          className="demo-page-button "
        >
          <TypographyDisplay size="1">Buttons</TypographyDisplay>

          <FormField>
            <Checkbox
              ripple
            >
              <CheckboxInput
                id="checkbox1"
                onChange={({target}) => this.setState({
                  disabled: target.checked,
                })}
                aria-labelledby="checkbox_label1"
              />
              <CheckboxBG/>
            </Checkbox>
            <CheckboxLabel id="checkbox_label1" htmlFor="checkbox1">
              Disable buttons (*excluding links and div)
            </CheckboxLabel>
          </FormField>
          <Example
            flex
            title="Buttons with Ripple - Text"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button disabled={disabled} ripple>Default</Button>
            <Button compact disabled={disabled} ripple>Compact</Button>
            <Button dense disabled={disabled} ripple>Dense</Button>
            <Button disabled={disabled} ripple><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button elementType="a" disabled={disabled} ripple>link</Button>
            <Button elementType="div" disabled={disabled} ripple>div</Button>
          </Example>
          <Example
            flex
            title="Buttons with Ripple - Raised"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button raised disabled={disabled} ripple>Default</Button>
            <Button raised compact disabled={disabled} ripple>Compact</Button>
            <Button raised dense disabled={disabled} ripple>Dense</Button>
            <Button raised disabled={disabled} ripple><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button raised elementType="a" disabled={disabled} ripple>link</Button>
            <Button raised elementType="div" disabled={disabled} ripple>div</Button>
          </Example>
          <Example
            flex
            title="Buttons with Ripple - Unelevated"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button unelevated disabled={disabled} ripple>Default</Button>
            <Button unelevated compact disabled={disabled} ripple>Compact</Button>
            <Button unelevated dense disabled={disabled} ripple>Dense</Button>
            <Button unelevated disabled={disabled} ripple><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button unelevated elementType="a" disabled={disabled} ripple>link</Button>
            <Button unelevated elementType="div" disabled={disabled} ripple>div</Button>
          </Example>
          <Example
            flex
            title="Buttons with Ripple - Stroked"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button stroked disabled={disabled} ripple>Default</Button>
            <Button stroked compact disabled={disabled} ripple>Compact</Button>
            <Button stroked dense disabled={disabled} ripple>Dense</Button>
            <Button stroked disabled={disabled} ripple><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button stroked elementType="a" disabled={disabled} ripple>link</Button>
            <Button stroked elementType="div" disabled={disabled} ripple>div</Button>
          </Example>
          <Example
            flex
            title="Buttons CSS Only - Text"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button disabled={disabled}>Default</Button>
            <Button disabled={disabled} compact>Compact</Button>
            <Button disabled={disabled} dense>Dense</Button>
            <Button disabled={disabled}><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button disabled={disabled} elementType="a">link</Button>
            <Button disabled={disabled} elementType="div">div</Button>
          </Example>
          <Example
            flex
            title="Buttons CSS Only - Raised"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button disabled={disabled} raised>Default</Button>
            <Button disabled={disabled} raised compact>Compact</Button>
            <Button disabled={disabled} raised dense>Dense</Button>
            <Button disabled={disabled} raised><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button disabled={disabled} raised elementType="a">link</Button>
            <Button disabled={disabled} raised elementType="div">div</Button>
          </Example>
          <Example
            flex
            title="Buttons CSS Only - Unelevated"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button disabled={disabled} unelevated>Default</Button>
            <Button disabled={disabled} unelevated compact>Compact</Button>
            <Button disabled={disabled} unelevated dense>Dense</Button>
            <Button disabled={disabled} unelevated><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button disabled={disabled} unelevated elementType="a">link</Button>
            <Button disabled={disabled} unelevated elementType="div">div</Button>
          </Example>
          <Example
            flex
            title="Buttons CSS Only - Stroked"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button disabled={disabled} stroked>Default</Button>
            <Button disabled={disabled} stroked compact>Compact</Button>
            <Button disabled={disabled} stroked dense>Dense</Button>
            <Button disabled={disabled} stroked><ButtonIcon>favorite</ButtonIcon>Icon</Button>
            <Button disabled={disabled} stroked elementType="a">link</Button>
            <Button disabled={disabled} stroked elementType="div">div</Button>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}