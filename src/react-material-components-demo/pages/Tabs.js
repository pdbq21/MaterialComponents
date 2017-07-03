/**
 * Created by ruslan on 27.06.17.
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
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

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
          <TabBar>
            <Tab ripple active>Item one</Tab>
            <Tab ripple>Item two</Tab>
            <Tab ripple>Three</Tab>
            <TabIndicator/>
          </TabBar>
        </Demo>
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
            code={code.tabs.source1}
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
            code={code.tabs.source2}
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
            code={code.tabs.source3}
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
            code={code.tabs.source4}
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
            code={code.tabs.source5}
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
            code={code.tabs.source6}
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
            code={code.tabs.source7}
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
            code={code.tabs.source8}
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
            code={code.tabs.source9}
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
            code={code.tabs.source10}
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
            code={code.tabs.source11}
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
