/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  FormField,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

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
              description: '-'
            },
          ]
        }
      ],
      used: {
        source1: `
import React, {Component} from 'react'
import {
    FormField,
} from '../lib'

export default class FormFieldDemo extends Component {
    render() {
        return (
            <div>
              <FormField>
                <input type="checkbox"/>
                <label>Input Label</label>
              </FormField>
            </div>
        )
    }
}`,
        source2: `import React, {Component} from 'react'
import {
    FormField,
} from '../lib'

export default class FormFieldDemo extends Component {
    render() {
        return (
            <div>
              <FormField alignEnd>
                <input type="checkbox"/>
                <label>Input Label</label>
              </FormField>
            </div>
        )
    }
}`
      }
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
const {used} = this.state;
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
            code={used.source1}
          >
            <FormField>
              <input type="checkbox"/>
              <label>Input Label</label>
            </FormField>
          </Example>
          <Example
            title="Form Field Align End"
            code={used.source2}
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