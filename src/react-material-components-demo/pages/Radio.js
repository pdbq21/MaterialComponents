/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Radio,
  RadioInput,
  Elevation,
  FormField,
  TypographyHeadline,
  TypographyDisplay,
  TypographyBody,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

export default class RadioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      checked_1: true,
      checked_2: true,
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
      used: `
import React, {Component} from 'react'
import {
    Radio,
    RadioInput,
    Elevation,
    TypographyDisplay,
} from '../lib'

class RadioDemo extends Component {

    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
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
                </Elevation>
            </section>
        )
    }
}`
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
    //const { checked, checked_1, checked_2 } = this.state;
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
          <TypographyHeadline size="1">Radio with Ripple</TypographyHeadline>
          <FormField>
            <Radio
              ripple
            >
              <RadioInput
                id="my-radio-demo1"
                name="radios1"
                onChange={({target}) => this.setState({
                  checked_1: target.checked,
                })}
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
                onChange={({target}) => this.setState({
                  checked_1: target.checked,
                })}
              />
            </Radio>
            <label id="my-radio-label2" htmlFor="my-radio-demo2">Radio 2</label>
          </FormField>
          <TypographyHeadline size="1">Radio only CSS</TypographyHeadline>
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
          <TypographyHeadline size="1">Radio only CSS - Disable</TypographyHeadline>
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
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
