/**
 * Created by ruslan on 05.06.17.
 */
import React, {Component} from 'react'
import {
  Button,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class ButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          >Flat</Button>
          <Button
            ripple
            raised
            primary
            style={{
              'marginLeft': '15px',
            }}
          >Raised</Button>
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

          <Example
            title="Buttons with Ripple"
            code={code.button.source1}
            className="demo-page-button_demo-components"
          >
            <Button ripple>Default</Button>
            <Button raised ripple>Raised</Button>
            <Button dense ripple>Dense</Button>
            <Button dense raised ripple>Dense Raised</Button>
            <Button compact ripple>Compact</Button>
            <Button compact raised ripple>Compact Raised</Button>
            <Button primary ripple>Primary</Button>
            <Button primary raised ripple>primary raised</Button>
            <Button accent ripple>accent</Button>
            <Button accent raised ripple>accent raised</Button>
            <Button elementType="div" raised ripple>div raised</Button>
          </Example>
          <Example
            title="Buttons CSS Only"
            code={code.button.source2}
            className="demo-page-button_demo-components"
          >
            <Button>Default</Button>
            <Button raised>Raised</Button>
            <Button dense>Dense</Button>
            <Button dense raised>Dense Raised</Button>
            <Button compact>Compact</Button>
            <Button compact raised>Compact Raised</Button>
            <Button primary>Primary</Button>
            <Button primary>primary raised</Button>
            <Button accent>accent</Button>
            <Button accent raised>accent raised</Button>
            <Button elementType="div" raised>div raised</Button>
          </Example>
          <Example
            title="Buttons Disabled"
            code={code.button.source3}
            className="demo-page-button_demo-components"
          >
            <Button disabled>Default</Button>
            <Button raised disabled>Raised</Button>
            <Button dense disabled>Dense</Button>
            <Button dense raised disabled>Dense Raised</Button>
            <Button compact disabled>Compact</Button>
            <Button compact raised disabled>Compact Raised</Button>
            <Button primary disabled>Primary</Button>
            <Button primary raised disabled>primary raised</Button>
            <Button accent disabled>accent</Button>
            <Button accent raised disabled>accent raised</Button>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}