/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
    Switch,
    SwitchInput,
    SwitchLabel,
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

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
                },{
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
                },{
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
            used: `
import React, {Component} from 'react'
import {
    Switch,
    SwitchInput,
    SwitchLabel,
    Elevation,
    TypographyDisplay,
} from '../lib'

class SwitchDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false,
        }
    }
    render() {
    const { isSwitch } = this.state;
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Switch</TypographyDisplay>
                    <TypographyHeadline size="1">Switch only CSS</TypographyHeadline>
                    <Switch>
                        <SwitchInput
                            onChange={() => this.setState({
                                isSwitch: !isSwitch,
                            })}
                        />
                    </Switch>
                    <SwitchLabel>{(isSwitch)? 'On' : 'Off'}</SwitchLabel>
                    <TypographyHeadline size="1">Switch only CSS - Disabled</TypographyHeadline>
                    <Switch disabled>
                        <SwitchInput disabled />
                    </Switch>
                    <SwitchLabel>disabled</SwitchLabel>
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
const { isSwitch } = this.state;
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
                    <TypographyHeadline size="1">Switch only CSS</TypographyHeadline>
                    <Switch>
                        <SwitchInput
                            onChange={() => this.setState({
                                isSwitch: !isSwitch,
                            })}
                        />
                    </Switch>
                    <SwitchLabel>{(isSwitch)? 'On' : 'Off'}</SwitchLabel>
                    <TypographyHeadline size="1">Switch only CSS - Disabled</TypographyHeadline>
                    <Switch disabled>
                        <SwitchInput disabled />
                    </Switch>
                    <SwitchLabel>disabled</SwitchLabel>
                </Elevation>
              <Footer/>
            </section>
        )
    }
}
