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
  TabBarScrollIndicator,
  TabBarScrollInner,
  TabBarScrollFrame,
  TabBarScroll,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
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
          name: 'TabBar',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'aside',
              description: 'задає тег елемента'
            },
            {
              name: 'cssOnly',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'onSelected',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'iconTab',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'iconText',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'accent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'primary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'scroll',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
        {
          name: 'Tab',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'header',
              description: 'задає тег елемента'
            },
            {
              name: 'onSelected',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
            {
              name: 'ripple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'cssOnly',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'active',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'iconText',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        },
        {
          name: 'TabBarScroll',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'header',
              description: 'задає тег елемента'
            },
            {
              name: 'cssOnly',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
        {
          name: 'TabIndicator',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            }
          ]
        },
        {
          name: 'TabIcon',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'Icon',
              description: 'задає тег елемента'
            }
          ]
        },
        {
          name: 'TabText',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            }
          ]
        },
        {
          name: 'TabBarScrollInner',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'Icon',
              description: 'задає тег елемента'
            }
          ]
        },
        {
          name: 'TabBarScrollIndicator',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'back',
              type: 'bool',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
            {
              name: 'forward',
              type: 'bool',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }
          ]
        },
        {
          name: 'TabBarScrollFrame',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            }
          ]
        },
      ],
      used: {
        source1: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
        source2: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar cssOnly>
              <Tab cssOnly active>Home</Tab>
              <Tab cssOnly>Merchandise</Tab>
              <Tab cssOnly>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
        source3: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabBarScroll,
  TabBarScrollIndicator,
  TabBarScrollInner,
  TabBarScrollFrame
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBarScroll>
              <TabBarScrollIndicator back>
                <TabBarScrollInner>
                  navigate_before
                </TabBarScrollInner>
              </TabBarScrollIndicator>
              <TabBarScrollFrame>
                <TabBar scroll>
                  <Tab ripple active>Item One</Tab>
                  <Tab ripple>Item Two</Tab>
                  <Tab ripple>Item Three</Tab>
                  <Tab ripple>Item Four</Tab>
                  <Tab ripple>Item Five</Tab>
                  <Tab ripple>Item Six</Tab>
                  <Tab ripple>Item Seven</Tab>
                  <Tab ripple>Item Eight</Tab>
                  <Tab ripple>Item Nine</Tab>
                  <TabIndicator/>
                </TabBar>
              </TabBarScrollFrame>
              <TabBarScrollIndicator forward>
                <TabBarScrollInner>
                  navigate_next
                </TabBarScrollInner>
              </TabBarScrollIndicator>
            </TabBarScroll>
      </div>
    );
  }
}`,
        source4: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabIcon
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar iconTab>
              <Tab ripple active>
                <TabIcon>phone</TabIcon>
              </Tab>
              <Tab ripple>
                <TabIcon  >favorite</TabIcon>
              </Tab>
              <Tab ripple>
                <TabIcon >person_pin</TabIcon>
              </Tab>
              <TabIndicator/>
          </TabBar>
      </div>
    );
  }
}`,
        source5: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabIcon
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar cssOnly iconTab>
              <Tab cssOnly active>
                <TabIcon>phone</TabIcon>
              </Tab>
              <Tab cssOnly>
                <TabIcon  >favorite</TabIcon>
              </Tab>
              <Tab cssOnly>
                <TabIcon >person_pin</TabIcon>
              </Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
        source6: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabIcon,
  TabText
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar iconText>
              <Tab ripple iconText active>
                <TabIcon>phone</TabIcon>
                <TabText>Recents</TabText>
              </Tab>
              <Tab ripple iconText>
                <TabIcon>favorite</TabIcon>
                <TabText>Favorites</TabText>
              </Tab>
              <Tab ripple iconText>
                <TabIcon>person_pin</TabIcon>
                <TabText>Nearby</TabText>
              </Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
        source7: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar primary>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
        source8: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar accent>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
        source9: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <div>
                    <TabBar>
                      <Tab ripple active>Home</Tab>
                      <Tab ripple>Merchandise</Tab>
                      <Tab ripple>About Us</Tab>
                      <TabIndicator/>
                    </TabBar>
                  </div>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
      </div>
    );
  }
}`,
        source10: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection
                  style={{
                    'position': 'absolute',
                    'right': 0,
                    'bottom': '-16px'
                  }}
                >
                  <TabBar>
                    <Tab ripple active>Home</Tab>
                    <Tab ripple>Merchandise</Tab>
                    <Tab ripple>About Us</Tab>
                    <TabIndicator/>
                  </TabBar>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
      </div>
    );
  }
}`,
        source11: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <div>
                    <TabBar accent>
                      <Tab ripple active>Home</Tab>
                      <Tab ripple>Merchandise</Tab>
                      <Tab ripple>About Us</Tab>
                      <TabIndicator/>
                    </TabBar>
                  </div>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
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
    const {used} = this.state;
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
          <TabBar>
            <Tab active>Item one</Tab>
            <Tab>Item two</Tab>
            <Tab>Three</Tab>
            <TabIndicator/>
          </TabBar>
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

          <Example
            title='Basic Tab Bar'
            code={used.source1}
          >
            <TabBar>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
          </Example>
          <Example
            title='CSS-Only Tab Bar'
            code={used.source2}
          >
            <TabBar cssOnly>
              <Tab cssOnly active>Home</Tab>
              <Tab cssOnly>Merchandise</Tab>
              <Tab cssOnly>About Us</Tab>
              <TabIndicator/>
            </TabBar>
          </Example>
          <Example
            title='Tab Bar with Scroller'
            code={used.source3}
          >
            <TabBarScroll>
              <TabBarScrollIndicator back>
                <TabBarScrollInner>
                  navigate_before
                </TabBarScrollInner>
              </TabBarScrollIndicator>
              <TabBarScrollFrame>
                <TabBar scroll>
                  <Tab ripple active>Item One</Tab>
                  <Tab ripple>Item Two</Tab>
                  <Tab ripple>Item Three</Tab>
                  <Tab ripple>Item Four</Tab>
                  <Tab ripple>Item Five</Tab>
                  <Tab ripple>Item Six</Tab>
                  <Tab ripple>Item Seven</Tab>
                  <Tab ripple>Item Eight</Tab>
                  <Tab ripple>Item Nine</Tab>
                  <TabIndicator/>
                </TabBar>
              </TabBarScrollFrame>
              <TabBarScrollIndicator forward>
                <TabBarScrollInner>
                  navigate_next
                </TabBarScrollInner>
              </TabBarScrollIndicator>
            </TabBarScroll>
          </Example>
          <Example
            title='Icon Tab Labels'
            code={used.source4}
          >
            <TabBar iconTab>
              <Tab ripple active>
                <TabIcon>phone</TabIcon>
              </Tab>
              <Tab ripple>
                <TabIcon  >favorite</TabIcon>
              </Tab>
              <Tab ripple>
                <TabIcon >person_pin</TabIcon>
              </Tab>
              <TabIndicator/>
            </TabBar>
          </Example>
          <Example
            title='CSS-Only Icon Tab Labels'
            code={used.source5}
          >
            <TabBar cssOnly iconTab>
              <Tab cssOnly active>
                <TabIcon>phone</TabIcon>
              </Tab>
              <Tab cssOnly>
                <TabIcon  >favorite</TabIcon>
              </Tab>
              <Tab cssOnly>
                <TabIcon >person_pin</TabIcon>
              </Tab>
              <TabIndicator/>
            </TabBar>
          </Example>
          <Example
            title='Icon & Text Labels'
            code={used.source6}
          >
            <TabBar iconText>
              <Tab ripple iconText active>
                <TabIcon>phone</TabIcon>
                <TabText>Recents</TabText>
              </Tab>
              <Tab ripple iconText>
                <TabIcon>favorite</TabIcon>
                <TabText>Favorites</TabText>
              </Tab>
              <Tab ripple iconText>
                <TabIcon>person_pin</TabIcon>
                <TabText>Nearby</TabText>
              </Tab>
              <TabIndicator/>
            </TabBar>
          </Example>
          <Example
            title='Primary Color Indicator'
            code={used.source7}
          >
            <TabBar primary>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
          </Example>
          <Example
            title='Accent Color Indicator'
            code={used.source8}
          >
            <TabBar accent>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
          </Example>
          <Example
            title='Within Toolbar'
            code={used.source9}
          >
            <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <div>
                    <TabBar>
                      <Tab ripple active>Home</Tab>
                      <Tab ripple>Merchandise</Tab>
                      <Tab ripple>About Us</Tab>
                      <TabIndicator/>
                    </TabBar>
                  </div>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
          </Example>
          <Example
            title='Within Toolbar - fixed to bottom of toolbar'
            code={used.source10}
          >
            <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection
                  style={{
                    'position': 'absolute',
                    'right': 0,
                    'bottom': '-16px'
                  }}
                >
                  <TabBar>
                    <Tab ripple active>Home</Tab>
                    <Tab ripple>Merchandise</Tab>
                    <Tab ripple>About Us</Tab>
                    <TabIndicator/>
                  </TabBar>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
          </Example>
          <Example
            title='Within Toolbar - accent indicator'
            code={used.source11}
          >
            <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <div>
                    <TabBar accent>
                      <Tab ripple active>Home</Tab>
                      <Tab ripple>Merchandise</Tab>
                      <Tab ripple>About Us</Tab>
                      <TabIndicator/>
                    </TabBar>
                  </div>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
