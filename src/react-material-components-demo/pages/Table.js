/**
 * Created by ruslan on 04.07.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
  Button,
  Checkbox,
  CheckboxInput,
  CheckboxBG
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      selectAll: false,
      selectedItems: [],
      dataTable: {
        id: 'tableId',
        childrenId: [],
      },
      childrenTable: {}
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
// add new row to table
    const {childrenTable, id, dataTable} = this.state;

    const nodeId = `id_${id}`;

    const newState = Object.assign({}, childrenTable, {
      [nodeId]: {
        id: nodeId,
        active: false,
        columns: {
          col1: 'Name',
          col2: 'Type',
          col3: id,
          col4: id,
          col5: id,
        }
      }
    });

    this.setState({
      id: id + 1,
      childrenTable: newState,
      dataTable: {
        ...dataTable,
        childrenId: dataTable.childrenId.concat([nodeId])
      }
    });
  }

  handleReset() {


    // reset to default data
  }

  handleCheckbox(id, checked) {
    const {childrenTable, dataTable, selectedItems} = this.state;
//console.log(dataTable.childrenId.length === newSelectItem);

    this.setState({
      // selectedItems.length + 1 => +1 considering current handle
      selectAll: (dataTable.childrenId.length === selectedItems.length +1 ),
      selectedItems: selectedItems.concat([id]),
      childrenTable: {
        ...childrenTable,
        [id]: {
          ...childrenTable[id],
          active: checked
        }
      },
    })
  }

  renderRows() {
    const {childrenTable} = this.state;//
    return Object.keys(childrenTable).map((row, index) => {
      const dataRow = childrenTable[row];
      // console.log('row', dataRow);
      return (<tr
        key={`key-table-${index}`}
      >
        <td><Checkbox
          ripple
        >
          <CheckboxInput
            checked={dataRow.active}
            onChange={({target}) => this.handleCheckbox(dataRow.id, target.checked)}
          />
          <CheckboxBG/>
        </Checkbox></td>
        {Object.keys(dataRow.columns).map((col, index) => {
          return (<td
            key={`key-table_col-${index}`}
          >{dataRow.columns[col]}</td>)
        })}
      </tr>)
    })
  }

  activeItems(checked) {
    const {childrenTable} = this.state;
    const newChildrenTable = Object.assign({}, childrenTable);

    Object.keys(newChildrenTable).forEach(key => {
      newChildrenTable[key].active = checked;
    });

    return newChildrenTable;
  }

  handleSelectAll(checked) {
    const {dataTable} = this.state;

    this.setState({
      selectAll: checked,
      selectedItems: (checked) ? dataTable.childrenId : [],
      childrenTable: this.activeItems(checked)
    })
  }

  handleRemove() {
    const {selectedItems, childrenTable, dataTable} = this.state;
    //console.log('selectedItems', selectedItems);
    // will to remove in:
    // + childrenTable {}, / delete childrenTable[id]
    // + dataTable.childrenId [] / .filter
    // + selectedItems => [] empty

    let newChildrenTable = childrenTable;
    let newChildrenId = dataTable.childrenId;

    selectedItems.forEach(id => {
      delete newChildrenTable[id];
      newChildrenId = newChildrenId.filter(key => key !== id);
    });

    this.setState({
      selectAll: false,
      selectedItems: [],
      dataTable: {
        ...dataTable,
        childrenId: newChildrenId
      },
      childrenTable: newChildrenTable
    });
    //console.log('dataTable', dataTable.childrenId)
  }

  render() {
    const {selectAll, selectedItems} = this.state;
    return (
      <section className="content">
        <Elevation
          zSpace="2"
          className="demo-page-table"
        >
          <TypographyDisplay size="1">Table</TypographyDisplay>

          <Elevation
            zSpace="2"
            className="rmd-table__container"
          >
            <header
              className="rmd-table__header"
            >
              <div className="rmd-table__title">
                <h2 className="rmd-table__title__title">title</h2>
                <Button
                  ripple
                  className='rmd-table__title__active'
                  onClick={this.handleAdd}
                >Add</Button>
                <Button
                  ripple
                  className='rmd-table__title__active'
                  onClick={this.handleReset}
                >Reset</Button>
              </div>
              {(selectedItems.length) ? <div className="rmd-table__title__context">
                <h2
                  className="rmd-table__title__title"
                >
                  {`${selectedItems.length} selected ${(selectedItems.length > 1) ? `items` : `item` }`}
                </h2>
                <Button
                  ripple
                  className='rmd-table__title__active'
                  onClick={this.handleRemove}
                >remove</Button>
              </div> :
                null
              }
            </header>
            <main>
              <table className="table-props">
                <thead>
                <tr>
                  <th>
                    <Checkbox
                      ripple
                    >
                      <CheckboxInput
                        checked={selectAll}
                        onChange={({target}) => this.handleSelectAll(target.checked)}
                      />
                      <CheckboxBG/>
                    </Checkbox>
                  </th>
                  <th>col 1</th>
                  <th>col 2</th>
                  <th>col 3</th>
                  <th>col 4</th>
                  <th>col 5</th>
                </tr>
                </thead>
                <tbody>
                {this.renderRows()}
                </tbody>
              </table>
            </main>
          </Elevation>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}
