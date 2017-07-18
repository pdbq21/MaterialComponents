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
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

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
              description: 'для підтримки material-icons'
            }, {
              name: 'mini',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'змінює розмір'
            }, {
              name: 'plain',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'змінює колір'
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
            flex
            title="Normal FABs"
            code={code.fab.source1}
          >
            <div className="demo-components__fab">
              <TypographyHeadline size="1">FAB Default</TypographyHeadline>
              <FAB ripple icon><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB mini</TypographyHeadline>
              <FAB ripple icon mini><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB plain</TypographyHeadline>
              <FAB ripple icon plain><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB plain + mini</TypographyHeadline>
              <FAB ripple icon plain mini><FABIcon>favorite</FABIcon></FAB>
            </div>
          </Example>

          <Example
            flex
            title="CSS Only FABs"
            code={code.fab.source2}
          >
            <div className="demo-components__fab">
              <TypographyHeadline>FAB Default</TypographyHeadline>
              <FAB icon><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB mini</TypographyHeadline>
              <FAB icon mini><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB plain</TypographyHeadline>
              <FAB icon plain><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB plain + mini</TypographyHeadline>
              <FAB icon plain mini><FABIcon>favorite</FABIcon></FAB>
            </div>
          </Example>
          <Example
            flex
            title="Disabled FABs"
            code={code.fab.source3}
          >
            <div className="demo-components__fab">
              <TypographyHeadline>FAB Default</TypographyHeadline>
              <FAB icon disabled><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB mini</TypographyHeadline>
              <FAB icon mini disabled><FABIcon>favorite</FABIcon></FAB>
            </div>
            <div className="demo-components__fab">
              <TypographyHeadline>FAB plain</TypographyHeadline>
              <FAB icon plain disabled><FABIcon>favorite</FABIcon></FAB>
            </div>

            <div className="demo-components__fab">
              <TypographyHeadline>FAB plain + mini</TypographyHeadline>
              <FAB icon plain mini disabled><FABIcon>favorite</FABIcon></FAB>
            </div>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}