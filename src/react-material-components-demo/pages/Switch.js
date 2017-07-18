/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Switch,
  SwitchInput,
  SwitchLabel,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class SwitchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitch: false,
      components: [
        {
          name: 'Switch',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
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
          name: 'SwitchInput',
          property: [
            {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'стає не активним'
            },
          ]
        }, {
          name: 'SwitchLabel',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'label',
              description: 'задає тег елемента'
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
    const {isSwitch} = this.state;
    return (
      <section className="content">
        <Demo>
          <Switch>
            <SwitchInput />
          </Switch>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Switch"
          href="mdc-switch"
        />
        <Elevation
          zSpace="2"
          className="demo-page-switch"
        >
          <TypographyDisplay size="1">Switch</TypographyDisplay>
          <Example
            flex
          title="Switch only CSS"
          code={code.switch.source1}
          >
            <Switch>
              <SwitchInput
                onChange={() => this.setState({
                  isSwitch: !isSwitch,
                })}
              />
            </Switch>
            <SwitchLabel>{(isSwitch) ? 'On' : 'Off'}</SwitchLabel>
          </Example>
          <Example
            flex
            title="Switch only CSS - Disabled"
            code={code.switch.source2}
          >
            <Switch disabled>
              <SwitchInput disabled/>
            </Switch>
            <SwitchLabel>disabled</SwitchLabel>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
