/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
  Select,
  SelectMenu,
  SelectText,
  SelectItems,
  SelectItem,
  ListGroup,
  ListItem,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  ListDivider,
  Elevation,
  TypographyDisplay,
  TypographyBody,
} from '../lib'

import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

export default class SelectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      selected: '',
      components: [
        {
          name: 'Select',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
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
              name: 'onCancel',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
            {
              name: 'onChange',
              type: 'function',
              required: 'no',
              defaultValue: '-',
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
              name: 'multiple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'SelectMenu',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'SelectText',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'SelectItems',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'ul',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'SelectItem',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'li',
              description: 'задає тег елемента'
            },
            {
              name: 'tabIndex',
              type: 'number | string',
              required: 'no',
              defaultValue: '0',
              description: '-'
            },
            {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: `'option'`,
              description: '-'
            },
            {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
      ],
      used: {
        source1: `import React, {Component} from 'react'
import {
  Select,
  SelectMenu,
  SelectText,
  SelectItems,
  SelectItem,
  ListGroup,
  ListItem,
  Elevation,
  TypographyBody,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
} from '../lib'

export default class FullyFeaturedSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      selected: '',
    }
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }
  handleDisabled(){
    this.setState({
      disabled: !this.state.disabled
    })
  }
  handleSelected({index, item}){
    this.setState({
      selected: \`'\${item.innerText}' at index \${index}\`
    })
  }
  render() {
    return (
      <div>
          <Select
              disabled={disabled}
              onSelected={this.handleSelected}
              onCancel={(event) => console.log(event)}
              onChange={(event) => console.log(event)}
            >
              <SelectText>Pick a food group</SelectText>
              <SelectMenu>
                <SelectItems>
                  <SelectItem disabled>
                    Pick a food group
                  </SelectItem>
                  <SelectItem>
                  Bread, Cereal, Rice, and Pasta
                </SelectItem>
                  <SelectItem>
                    Vegetables
                  </SelectItem>
                  <SelectItem
                    disabled
                  >
                    Fruit (Disabled)
                  </SelectItem>
                  <SelectItem>
                    Milk, Yogurt, and Cheese
                  </SelectItem>
                  <SelectItem>
                    Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                  </SelectItem>
                  <SelectItem>
                    Fats, Oils, and Sweets
                  </SelectItem>
                </SelectItems>
              </SelectMenu>
            </Select>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'column nowrap',
              }}
            >
              <TypographyBody>
                Currently selected: {(selected)? selected : '(none)'}
              </TypographyBody>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={disabled}
                    onChange={this.handleDisabled}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Disabled
                </CheckboxLabel>
              </FormField>
            </Elevation>
      </div>
    );
  }
}`,
        source2: `import React, {Component} from 'react'
import {
  Select
} from '../lib'

export default class OnlyCSSSelect extends Component {

  render() {
    return (
      <div>
          <Select
              cssOnly
            >
              <option value="" default selected>Pick a food</option>
              <option value="grains">Bread, Cereal, Rice, and Pasta</option>
              <option value="vegetables">Vegetables</option>
              <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="oranges">Orange</option>
                <option value="banana">Banana</option>
              </optgroup>
              <option value="dairy">Milk, Yogurt, and Cheese</option>
              <option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
              <option value="fats">Fats, Oils, and Sweets</option>
            </Select>
      </div>
    );
  }
}`,
        source3: `import React, {Component} from 'react'
import {
  Select,
  ListGroup,
  ListItem
} from '../lib'

export default class OnlyCSSMultipleSelect extends Component {

  render() {
    return (
      <div>
          <Select cssOnly multiple size="8">
              <ListGroup elementType="optgroup" label="Fats, Oils, &amp; Sweets">
                <ListItem elementType='option' className="mdc-list-item">Olive Oil</ListItem>
                <ListItem elementType='option'>Brown Sugar</ListItem>
                <ListItem elementType='option'>Ice Cream</ListItem>
              </ListGroup>
              <ListDivider elementType='option' role="presentation" disabled=""/>
              <ListGroup elementType="optgroup" label="Dairy">
                <ListItem elementType='option'>Milk</ListItem>
                <ListItem elementType='option'>Cheese</ListItem>
                <ListItem elementType='option'>More Cheese</ListItem>
              </ListGroup>
            </Select>
      </div>
    );
  }
}`,
      }
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
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
  handleDisabled(){
    this.setState({
      disabled: !this.state.disabled
    })
  }
  handleSelected({index, item}){
    this.setState({
      selected: `'${item.innerText}' at index ${index}`
    })
  }
  render() {
    const { disabled, selected, used } = this.state;
    return (
      <section
      className="content"
      >
        <Demo
        >
          <Select>
            <SelectText>Pick a food group</SelectText>
            <SelectMenu>
              <SelectItems>
                <SelectItem
                  disabled
                >
                  Pick a food group
                </SelectItem>
                <SelectItem>
                Bread, Cereal, Rice, and Pasta
              </SelectItem>
                <SelectItem>
                  Vegetables
                </SelectItem>
                <SelectItem>
                  Fruit
                </SelectItem>
                <SelectItem>
                  Milk, Yogurt, and Cheese
                </SelectItem>
                <SelectItem>
                  Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                </SelectItem>
                <SelectItem>
                  Fats, Oils, and Sweets
                </SelectItem>
              </SelectItems>
            </SelectMenu>
          </Select>
        </Demo>
        {this.renderTable()}

        <OriginalDoc
          name="Select"
          href="mdc-select"
        />

        <Elevation
          zSpace="2"
          className="demo-page-select"
        >
          <TypographyDisplay size="1">Select</TypographyDisplay>

          <Example
            title="Fully-Featured Component"
            code={used.source1}
          >
            <Select
              disabled={disabled}
              onSelected={this.handleSelected}
              onCancel={(event) => console.log(event)}
              onChange={(event) => console.log(event)}
            >
              <SelectText>Pick a food group</SelectText>
              <SelectMenu>
                <SelectItems>
                  <SelectItem disabled>
                    Pick a food group
                  </SelectItem>
                  <SelectItem>
                  Bread, Cereal, Rice, and Pasta
                </SelectItem>
                  <SelectItem>
                    Vegetables
                  </SelectItem>
                  <SelectItem
                    disabled
                  >
                    Fruit (Disabled)
                  </SelectItem>
                  <SelectItem>
                    Milk, Yogurt, and Cheese
                  </SelectItem>
                  <SelectItem>
                    Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                  </SelectItem>
                  <SelectItem>
                    Fats, Oils, and Sweets
                  </SelectItem>
                </SelectItems>
              </SelectMenu>
            </Select>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'column nowrap',
              }}
            >
              <TypographyBody>
                Currently selected: {(selected)? selected : '(none)'}
              </TypographyBody>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={disabled}
                    onChange={this.handleDisabled}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Disabled
                </CheckboxLabel>
              </FormField>
            </Elevation>
          </Example>
          <Example
          title="Select Only CSS"
          code={used.source2}
          >
            <Select
              cssOnly
            >
              <option value="" default selected>Pick a food</option>
              <option value="grains">Bread, Cereal, Rice, and Pasta</option>
              <option value="vegetables">Vegetables</option>
              <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="oranges">Orange</option>
                <option value="banana">Banana</option>
              </optgroup>
              <option value="dairy">Milk, Yogurt, and Cheese</option>
              <option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
              <option value="fats">Fats, Oils, and Sweets</option>
            </Select>
          </Example>
          <Example
          title="Select Multiple - CSS Only"
          code={used.source3}
          >
            <Select cssOnly multiple size="8">
              <ListGroup elementType="optgroup" label="Fats, Oils, &amp; Sweets">
                <ListItem elementType='option' className="mdc-list-item">Olive Oil</ListItem>
                <ListItem elementType='option'>Brown Sugar</ListItem>
                <ListItem elementType='option'>Ice Cream</ListItem>
              </ListGroup>
              <ListDivider elementType='option' role="presentation" disabled=""/>
              <ListGroup elementType="optgroup" label="Dairy">
                <ListItem elementType='option'>Milk</ListItem>
                <ListItem elementType='option'>Cheese</ListItem>
                <ListItem elementType='option'>More Cheese</ListItem>
              </ListGroup>

            </Select>
          </Example>

        </Elevation>

        <Footer/>
      </section>
    )
  }
}
