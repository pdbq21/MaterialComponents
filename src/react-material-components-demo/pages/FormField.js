/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  FormField,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class FormFieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'FormField',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            }, {
              name: 'alignEnd',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: `тег <label/> стає напочатку`
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
          <FormField>
            <input type="checkbox" id="input"/>
            <label htmlFor="input">Input Label</label>
          </FormField>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Form Field"
          href="mdc-form-field"
        />

        <Elevation
          zSpace="2"
          className="demo-page-form_field"

        >
          <TypographyDisplay size="1">FormField</TypographyDisplay>
          <Example
            title="FormField"
            code={code.formField.source1}
          >
            <FormField>
              <input type="checkbox"/>
              <label>Input Label</label>
            </FormField>
          </Example>
          <Example
            title="Form Field Align End"
            code={code.formField.source2}
          >
            <FormField alignEnd>
              <input type="checkbox"/>
              <label>Input Label</label>
            </FormField>
          </Example>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}