/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import {
  Card,
  CardHorizontalBlock,
  CardMedia,
  CardMediaItem,
  CardSupportingText,
  CardPrimary,
  CardPrimaryTitle,
  CardPrimarySubtitle,
  CardActions,
  CardActionItem,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'
export default class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Card',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'CardHorizontalBlock',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'CardMedia',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'CardMediaItem',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'img',
              description: 'задає тег елемента'
            }, {
              name: 'size',
              type: 'string',
              required: 'no',
              defaultValue: 'null | 1.3 | 2 | 3',
              description: `задає висоту. 
                            null  - height of 80px | 
                            1.3 - height to 120px | 
                            2 - height to 160px |
                            3 - height to 240px`
            },
          ]
        }, {
          name: 'CardSupportingText',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'CardPrimary',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'CardPrimaryTitle',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h1',
              description: 'задає тег елемента'
            }, {
              name: 'large',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'збільшує назву'
            },
          ]
        }, {
          name: 'CardPrimarySubtitle',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h2',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'CardActions',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
            }, {
              name: 'vertical',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'блок стає вертикальним'
            },
          ]
        }, {
          name: 'CardActionItem',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'Button',
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
      />)
    )
  }

  render() {
    return (
      <section
        className="content"
      >
        <Demo>
          <Card
            style={{
              'width': '20em'
            }}
          >
            <CardMedia
              style={{
                'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                'height': '12em'
              }}
            />
            <CardPrimary>
              <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
              <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
            </CardPrimary>
            <CardActions>
              <CardActionItem compact>Action 1</CardActionItem>
              <CardActionItem compact>Action 2</CardActionItem>
            </CardActions>
          </Card>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Card"
          href="mdc-card"
        />

        <Elevation
          zSpace="2"
          className="demo-page-card"
        >
          <TypographyDisplay size="1">Cards</TypographyDisplay>

          <Example
            title="Cards"
            code={code.card.source1}
          >
            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
              </CardSupportingText>
            </Card>
            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardPrimary>
                <CardPrimaryTitle>Title</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
              </CardSupportingText>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardPrimary>
                <CardPrimaryTitle>Title</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardActions vertical>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardPrimary>
                <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardPrimary>
                <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardSupportingText>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/1-1.jpg)',
                  'height': '10em'
                }}>
                <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
              </CardMedia>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
              </CardActions>
            </Card>
            <Card
              style={{
                'backgroundImage': 'url(http://material-components-web.appspot.com/images/1-1.jpg)',
                'width': '20em',
                'height': '21.875rem',
                'backgroundSize': 'cover'
              }}
            >
              <CardPrimary
                style={{
                  'background': 'rgba(0, 0, 0, .4)',
                }}
              >
                <CardPrimaryTitle style={{'color': 'white'}} large>Title goes here</CardPrimaryTitle>
                <CardPrimarySubtitle style={{'color': 'white'}}>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardActions
                style={{
                  'background': 'rgba(0, 0, 0, .4)',
                }}
              >
                <CardActionItem style={{'color': 'white'}} compact>Action 1</CardActionItem>
                <CardActionItem style={{'color': 'white'}} compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardPrimaryTitle large>Title</CardPrimaryTitle>
                  <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                </CardPrimary>
                <CardMediaItem src="http://material-components-web.appspot.com/images/1-1.jpg"/>
              </CardHorizontalBlock>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardPrimaryTitle large>Title</CardPrimaryTitle>
                  <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                </CardPrimary>
                <CardMediaItem size='1.5' src="http://material-components-web.appspot.com/images/1-1.jpg"/>
              </CardHorizontalBlock>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>
            <Card
              style={{
                'width': '25em'
              }}
            >
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardPrimaryTitle large>Title</CardPrimaryTitle>
                  <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                </CardPrimary>
                <CardMediaItem size='2' src="http://material-components-web.appspot.com/images/1-1.jpg"/>
              </CardHorizontalBlock>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>
            <Card
              style={{
                'width': '25em'
              }}
            >
              <CardHorizontalBlock>
                <CardMediaItem size='3' src="http://material-components-web.appspot.com/images/1-1.jpg"/>
                <CardActions vertical>
                  <CardActionItem compact>A 1</CardActionItem>
                  <CardActionItem compact>A 2</CardActionItem>
                </CardActions>
              </CardHorizontalBlock>
            </Card>
          </Example>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}