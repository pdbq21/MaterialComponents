/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
//import classnames from 'classnames';

import {
  Elevation,
} from '../index'
import Header from './Header'
import Main from './Main'
import FullPageDialog from './Dialog'
import DialogMain from './DialogMain'
import Row from './Row'

export default class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,// generation ids for row
      openFullPage: false, // close/open  fullPage dialog
      selectAll: false, // all checkbox is checked
      selectedItems: [], //  all checked row
      dataTable: {
        id: 'tableId', // now not use!
        childrenId: [], //  all row ids
      },
      // rows => {id_1: {id: id_1, active: false, columns: dataNewRow}, id_2: {}, ...}
      childrenTable: {},
      // data columns => {name: colName, type: text | number}, type - for input
      dataColumns: [
        {
          name: 'Col1',
          type: 'text'
        },
        {
          name: 'Col2',
          type: 'text'
        },
        {
          name: 'Col3',
          type: 'number'
        },
        {
          name: 'Col4',
          type: 'number'
        },
        {
          name: 'Col5',
          type: 'number'
        },
      ],
      dataNewRow: {}, // data for new row  => {col: value},
      // where col - current column name;

    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleOpenFullPage = this.handleOpenFullPage.bind(this);
    this.handleCloseFullPage = this.handleCloseFullPage.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChangeDataRow = this.handleChangeDataRow.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleAdd() {
    this.setState({
      openFullPage: true,
    });
  }

  handleOpenFullPage() {
    this.setState({openFullPage: true});
  }

  handleCloseFullPage() {
    this.setState({openFullPage: false});
  }

  handleAccept() {
    console.log("Submit", this.state.dataNewRow);
    const {childrenTable, id, dataTable, dataNewRow, dataColumns} = this.state;

    const nodeId = `id_${id}`;

    let newColumns = {};
    dataColumns.forEach(key => {
      newColumns[key.name] = (dataNewRow[key.name]) ? dataNewRow[key.name] : '-';
    });

    const newState = Object.assign({}, childrenTable, {
      [nodeId]: {
        id: nodeId,
        active: false,
        columns: newColumns
      }
    });
    this.setState({
      id: id + 1,
      childrenTable: newState,
      dataTable: {
        ...dataTable,
        childrenId: dataTable.childrenId.concat([nodeId])
      },
      dataNewRow: {}
    });

  }

  handleCancel() {
    console.log("Decline");
  }

  /*submitRow() {
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
   }*/

  handleReset() {


    // reset to default data
  }

  handleCheckbox(id, checked) {
    const {childrenTable, dataTable, selectedItems} = this.state;
    const newSelectedItems = (checked) ? selectedItems.concat([id]) : selectedItems.filter(key => key !== id);

    this.setState({
      selectAll: (dataTable.childrenId.length === newSelectedItems.length),
      selectedItems: newSelectedItems,
      childrenTable: {
        ...childrenTable,
        [id]: {
          ...childrenTable[id],
          active: checked
        }
      },
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

  handleChangeDataRow(name, value) {
    const {dataNewRow} = this.state;
    this.setState({
      dataNewRow: {
        ...dataNewRow,
        [name]: value
      }
    })
  }

  renderRows() {
    const {childrenTable} = this.state;//
    return Object.keys(childrenTable).map((row, index) => {
      const dataRow = childrenTable[row];
      // console.log('row', dataRow);
      return (<Row
        key={`key-table_row-${index}`}
        checked={dataRow.active}
        onCheckbox={({target}) => this.handleCheckbox(dataRow.id, target.checked)}
        columns={dataRow.columns}
      />)
    })
  }
  handleEdit(){
  //empty
    // edit selected row / open dialog
  }

  render() {
    const {selectAll, selectedItems, openFullPage, dataColumns} = this.state;
    const selectedRow = selectedItems.length;
    return (<Elevation
        zSpace="2"
        className="rmd-table__container"
      >
        {/* Header */}
        <Header
          title="Title"
          items={selectedRow}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
        {/* Main */}
        <Main
          dataColumns={dataColumns}
          selectAll={selectAll}
          onSelectAll={this.handleSelectAll}
        >
          {this.renderRows()}
        </Main>

        {(openFullPage) ?
          <FullPageDialog
            onAccept={this.handleAccept}
            onCancel={this.handleCancel}
            onOpen={this.handleOpenFullPage}
            onClose={this.handleCloseFullPage}
          >
            {/* new Row container */}
            <DialogMain
              title="New Row"
              onBlur={this.handleChangeDataRow}
              columns={dataColumns}
            />
          </FullPageDialog> : null}

      </Elevation>
    )
  }
}
