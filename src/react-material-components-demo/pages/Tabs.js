/**
 * Created by ruslan on 27.06.17.
 */
/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabIcon,
  TabText,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example} from '../templates'

export default class TabsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Dialog',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'aside',
              description: 'задає тег елемента'
            },
            {
              name: 'open',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'onOpen',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'onClose',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'onAccept',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'onOpen',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
          ]
        },
        {
          name: 'DialogHeader',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'header',
              description: 'задає тег елемента'
            }
          ]
        },
      ],
      used: {
        source1: `import React, {Component} from 'react'
import {

} from '../lib'

export default class TabsExample extends Component {
constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  
  render() {
    return (
      <div>
          
      </div>
    );
  }
}`,
      }
    };
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const {components} = this.state;
    return components.map((item, index) => (<Elevation
          zSpace="2"
          key={`key-table-${index}`}
        >
          <TypographyDisplay size="1">{item.name}</TypographyDisplay>
          <table className="table-props">
            <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {item.property.map((prop, index) => (
              <tr key={`key-table-tr-${index}`}>
                <td><code>{prop.name}</code></td>
                <td><code>{prop.type}</code></td>
                <td>{prop.defaultValue}</td>
                <td>{prop.required}</td>
                <td>{prop.description}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Elevation>
      )
    )
  }

  render() {
    const { used } = this.state;
    return (
      <section
        className="content"
      >
        <Elevation
          zSpace="2"
          style={{
            'backgroundColor': 'rgba(0, 0, 0, 0.05)',
            'minHeight': '360px',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'flexFlow': 'row nowrap',
            'height': '360px',
          }}
        >

        </Elevation>
        {this.renderTable()}
        <OriginalDoc
          name="Tabs"
          href="mdc-tabs"
        />
        <Elevation
          zSpace="2"
        >
          <TypographyDisplay size="1">Tabs</TypographyDisplay>
          Tab Bar with text labels
          <TabBar>
            <Tab active>Home</Tab>
            <Tab>Merchandise</Tab>
            <Tab>About Us</Tab>
            <TabIndicator/>
          </TabBar>

          Tab Bar with icon labels
          <TabBar iconTab>
            <Tab active>
              <TabIcon>phone</TabIcon>
            </Tab>
            <Tab>
              <TabIcon>favorite</TabIcon>
            </Tab>
            <Tab>
              <TabIcon>person_pin</TabIcon>
            </Tab>
            <TabIndicator/>
          </TabBar>
          Tab Bar with icon and text labels
          <TabBar iconText>
            <Tab iconText active>
              <TabIcon>phone</TabIcon>
              <TabText>Recents</TabText>
            </Tab>
            <Tab iconText>
              <TabIcon>favorite</TabIcon>
              <TabText>Favorites</TabText>
            </Tab>
            <Tab iconText>
              <TabIcon>person_pin</TabIcon>
              <TabText>Nearby</TabText>
            </Tab>
            <TabIndicator/>
          </TabBar>
          <Example
            title={'Dialog with List'}
            code={used.source1}
>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
