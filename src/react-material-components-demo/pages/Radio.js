/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Radio,
  RadioInput,
  Elevation,
  FormField,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class RadioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Radio',
          property: [
            {
              name: 'ripple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'додає Ripple ефект'
            },
            {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'стає не активним'
            },
          ]
        }, {
          name: 'RadioInput',
          property: [
            {
              description: 'no specific props'
            },
          ]
        },
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
      <section className="content">
        <Demo
        >
          <Radio
            ripple
          >
            <RadioInput
              name="radios"
            />
          </Radio>
          <Radio
            ripple
          >
            <RadioInput
              name="radios"
            />
          </Radio>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Radio"
          href="mdc-radio"
        />

        <Elevation
          zSpace="2"
          className="demo-page-radio"
        >
          <TypographyDisplay size="1">Radio</TypographyDisplay>
          <Example
          title="Radio with Ripple"
          code={code.radio.source1}
          >
            <FormField>
              <Radio
                ripple
              >
                <RadioInput
                  id="my-radio-demo1"
                  name="radios1"
                />
              </Radio>
              <label id="my-radio-label1" htmlFor="my-radio-demo1">Radio 1</label>
            </FormField>
            <FormField>
              <Radio
                ripple
              >
                <RadioInput
                  id="my-radio-demo2"
                  name="radios1"
                />
              </Radio>
              <label id="my-radio-label2" htmlFor="my-radio-demo2">Radio 2</label>
            </FormField>
          </Example>
          <Example
          title="Radio only CSS"
          code={code.radio.source2}
          >
            <FormField>
              <Radio>
                <RadioInput
                  id="my-radio-demo3"
                  name="radios2"

                />
              </Radio>
              <label id="my-radio-label3" htmlFor="my-radio-demo3">Radio 1</label>
              <Radio>
                <RadioInput
                  id="my-radio-demo4"
                  name="radios2"
                />
              </Radio>
              <label id="my-radio-label4" htmlFor="my-radio-demo4">Radio 2</label>
            </FormField>
          </Example>
          <Example
          title="Radio only CSS - Disable"
          code={code.radio.source3}
          >
            <FormField>
              <Radio disabled>
                <RadioInput
                  id="my-radio-demo5"
                  name="radios3"
                  disabled
                  checked
                />
              </Radio>
              <label id="my-radio-label5" htmlFor="my-radio-demo5">Radio 1</label>
              <Radio disabled>
                <RadioInput
                  id="my-radio-demo6"
                  name="radios3"
                  disabled
                />
              </Radio>
              <label id="my-radio-label6" htmlFor="my-radio-demo6">Radio 2</label>
            </FormField>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
