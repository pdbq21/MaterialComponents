/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  FAB,
  FABIcon,
  Elevation,
  TypographyHeadline,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

export default class FABPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'FAB',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'button',
              description: 'задає тег елемента'
            },
            {
              name: 'icon',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'mini',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'plain',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'ripple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'Ripple ефект'
            },
          ]
        }, {
          name: 'FABIcon',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            },
          ]
        }
      ],
      used: `
import React, {Component} from 'react'
import {
    FAB,
    FABIcon,
    Elevation,
    TypographyDisplay,
} from '../lib'

export default class FABDemo extends Component {

    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <FAB ripple icon>
                        <FABIcon>favorite</FABIcon>
                    </FAB>
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
    return (
      <section
        className="content"
      >
        <Demo>
          <FAB ripple icon>
            <FABIcon>favorite</FABIcon>
          </FAB>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="FAB"
          href="mdc-fab"
        />
        <Elevation
          zSpace="2"
          className="demo-page-fab"
        >
          <TypographyDisplay size="1">Floating Action Buttons</TypographyDisplay>
          <Example
          title="Normal FABs"
          code=""
          >
            <TypographyHeadline size="1">FAB Default</TypographyHeadline>
            <FAB ripple icon><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB mini</TypographyHeadline>
            <FAB ripple icon mini><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain</TypographyHeadline>
            <FAB ripple icon plain><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain + mini</TypographyHeadline>
            <FAB ripple icon plain mini><FABIcon>favorite</FABIcon></FAB>
          </Example>

          <TypographyDisplay size="1">CSS Only FABs</TypographyDisplay>
          <TypographyHeadline>FAB Default</TypographyHeadline>
          <FAB icon><FABIcon>favorite</FABIcon></FAB>
          <TypographyHeadline>FAB mini</TypographyHeadline>
          <FAB icon mini><FABIcon>favorite</FABIcon></FAB>
          <TypographyHeadline>FAB plain</TypographyHeadline>
          <FAB icon plain><FABIcon>favorite</FABIcon></FAB>
          <TypographyHeadline>FAB plain + mini</TypographyHeadline>
          <FAB icon plain mini><FABIcon>favorite</FABIcon></FAB>
          <TypographyDisplay size="1">Disabled FABs</TypographyDisplay>
          <TypographyHeadline>FAB Default</TypographyHeadline>
          <FAB icon disabled><FABIcon>favorite</FABIcon></FAB>
          <TypographyHeadline>FAB mini</TypographyHeadline>
          <FAB icon mini disabled><FABIcon>favorite</FABIcon></FAB>
          <TypographyHeadline>FAB plain</TypographyHeadline>
          <FAB icon plain disabled><FABIcon>favorite</FABIcon></FAB>
          <TypographyHeadline>FAB plain + mini</TypographyHeadline>
          <FAB icon plain mini disabled><FABIcon>favorite</FABIcon></FAB>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}