/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
//import classnames from 'classnames';
//import update from 'react-addons-update'; // ES6

import {
  Elevation,
} from '../index'
import Header from './Header'
import Main from './Main'
import FullPageDialog from './Dialog'
import DialogMain from './DialogMain'


export default class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,// generation ids for row
      // openFullPage: false, // close/open  fullPage dialog


      /* dataTable: {
       id: 'tableId', // now not use!
       childrenId: [], //  all row ids
       },*/
      // rows => {id_1: {id: id_1, active: false, columns: dataNewRow}, id_2: {}, ...}
      //childrenTable: {},
      dataNewRow: {}, // data for new row  => {col: value},
      // where col - current column name;


      // new State
      dataRows: [],
      selectAll: false, // all checkbox is checked
      selectedItems: [], //  all checked row

      selectedItems1: []

    };

    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChangeDataRow = this.handleChangeDataRow.bind(this);


    this.renderHeader = this.renderHeader.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderDialog = this.renderDialog.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onCheckbox = this.onCheckbox.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
  }


  /*setOpenFullPage(openFullPage) {
   this.setState({openFullPage});
   }*/

  /*  handleOpenFullPage() {
   this.setOpenFullPage(true)
   }

   handleCloseFullPage() {
   this.setOpenFullPage(false)
   }

   handleAccept() {
   const {childrenTable, id, dataTable, dataNewRow, dataColumns, selectedItems} = this.state;
   console.log("Submit", dataNewRow);
   // if add / else edit

   console.log('selectedItems', selectedItems.length);
   if (typeof childrenTable[selectedItems[0]] === 'undefined') {
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
   } else {
   console.log(25)
   this.setState({
   selectedItems: [],
   childrenTable: {
   ...childrenTable,
   [selectedItems[0]]: {
   ...childrenTable[selectedItems[0]],
   active: false,
   columns: dataNewRow
   }
   },
   dataNewRow: {}
   });
   }


   }

   handleCancel() {
   console.log("Decline");

   }*/

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


  handleSelectAll(checked) {
    const {dataRows} = this.state;

    //const selectedItems = dataRows.map(index => console.log(index));
//console.log(selectedItems)
    let newSelectedItems = [];
    let newDataRows = dataRows;
    dataRows.forEach((item, index) => {
      newSelectedItems = newSelectedItems.concat([index]);
      newDataRows[index].checked = checked;
    });

    console.log(newSelectedItems, newDataRows);
    this.setState({
      selectAll: checked,
      selectedItems: (checked) ? newSelectedItems : [],
      dataRows: newDataRows
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
    //console.log('handleChangeDataRow', name, value);

    this.setState({
      dataNewRow: {
        ...dataNewRow,
        [name]: value
      }
    })
  }

  onCheckbox(data) {
    const {dataRows, selectedItems} = this.state;
    const {main} = this.props;
    const {onSelectRow} = main;

    onSelectRow(data);

    const newSelectedItems = (data.checked) ? selectedItems.concat([data.index]) : selectedItems.filter(key => key !== data.index);

    /*selectAll: ,
     selectedItems: newSelectedItems,*/

    /*let newState = update(dataRows, {
     [data.index]: {
     checked: {
     $set: data.checked
     }
     }
     });*/

    //console.log(newState.length, newSelectedItems.length);
    this.setState({
      //dataRows: newState,
      selectAll: (dataRows.length === newSelectedItems.length),
      selectedItems: newSelectedItems,
    })

  }


  renderHeader() {
    const {selectedItems} = this.state;
    const {header} = this.props;
    //const selectedRow = selectedItems.length;
    return (
      <Header
        /*
         items, => Number - selected items length
         title, => String
         action, => []
         multiSelected, => []
         singleSelected, => []
         */
        items={selectedItems.length}
        {...header}
      />
    );
  }

  renderMain() {
    const {main} = this.props;
    const {selectAll, selectedItems} = this.state;

    return (
      <Main
        selectAll={selectAll}
        onCheckbox={this.onCheckbox}
        onSelectAll={this.handleSelectAll}
        selectedItems={selectedItems}
        {...main}
      />
    )
  }

  onAccept() {
    const {dialog, main} = this.props;
    const {onAccept} = dialog;
    const {columns} = main;
    const {dataNewRow} = this.state;

    let row = {};

    columns.forEach(({name, defaultValue}) => {
      row[name] = dataNewRow[name] || defaultValue
    });


    onAccept(row);

    this.setState({
      /*dataRows: dataRows.concat({
       checked: false,
       row: row
       }),*/
      dataNewRow: {},
      selectAll: false,
    });
  }

  renderDialog() {
    const {dialog, main} = this.props;
    const {openDialog, title, onCancel, onOpen, onClose, row} = dialog;
    const {columns} = main;

    return (openDialog) ?
      <FullPageDialog
        onAccept={this.onAccept}
        onCancel={onCancel}
        onOpen={onOpen}
        onClose={onClose}
      >
        {/* new Row container */}
        <DialogMain
          title={title}
          columns={columns}
          row={row}
          onBlur={this.handleChangeDataRow}
        />
      </FullPageDialog> : null;

  }

  componentWillReceiveProps(props) {
    if (props.main.rows !== this.state.dataRows) {
      let newSelectedItems = [];
      props.main.rows.forEach((item, index) => {
        if (item === this.state.dataRows[index] && this.state.selectedItems.indexOf(index) !== -1) {
          newSelectedItems.concat([index])
        }
      });
console.log(newSelectedItems.length && newSelectedItems.length === props.main.rows.length);
      this.setState({
        dataRows: props.main.rows,
        selectedItems: newSelectedItems,
        selectAll: newSelectedItems.length && newSelectedItems.length === props.main.rows.length
      })
    }

  }

  render() {
    return (<Elevation
        zSpace="2"
        className="rmd-table__container"
      >
        {/* Header */}
        {this.renderHeader()}
        {/* Main */}
        {this.renderMain()}
        {/* Dialog */}
        {this.renderDialog()}

      </Elevation>
    )
  }
}
