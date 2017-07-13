/**
 * Created by ruslan on 04.07.17.
 */
import React, {Component} from 'react'
import update from 'react-addons-update'; // ES6
import {
  Elevation,
  TypographyDisplay,
  Table,
  Button,
  Icon
} from '../lib'
//import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'
import {cssTable} from '../styles';

const Action = ({
                  icon,
                  name,
                  ...props
                }) => {
  return (
    <Button
      style={cssTable.action}
      {...props}
      ripple
    ><Icon style={cssTable.actionIcon}>
      {icon}
    </Icon>{name}</Button>
  );
};


export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //id: 0,// generation ids for row
      openFullPage: false, // close/open  fullPage dialog
      columns: [
        {
          name: 'Column 1 string',
          type: 'string',// string | number | ?
          sortable: false,
          defaultValue: 'name',
          align: 'left', // left | right | center | default center
          sort: true
        },//col 1 type/name/sortable/
        {
          name: 'Column 2 string',
          type: 'string',
          defaultValue: 'type',
          align: 'left',
        },//col 2
        {
          name: 'Column 3 number',
          type: 'number',
          defaultValue: '8985',
          align: 'right',
        },//col 3
        {
          name: 'Column 4 string',
          type: 'string',
          defaultValue: 'id',
        },//col 4

        {
          name: 'Column 5 number',
          type: 'number',
          defaultValue: '1111',
          align: 'right',
        },//col 5
        {
          name: 'Column 6 number',
          type: 'number',
          defaultValue: '0.222',
          align: 'right',
        },//col 6
        {
          name: 'Column 7 number',
          type: 'number',
          defaultValue: '789',
          align: 'right',
        },//col 7
        {
          name: 'Column 8 number',
          type: 'number',
          defaultValue: '8.69',
          align: 'right',
        },//col 8
        {
          name: 'Column 9 number',
          type: 'number',
          defaultValue: '586',
          align: 'right',
        },//col 9


      ],
      rows: [
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
        {
          'Column 1 string': 'string',
          'Column 2 string': 'string',
          'Column 3 number': 100,
          'Column 4 string': 'string',
          'Column 5 number': 100,
          'Column 6 number': 100,
          'Column 7 number': 100,
          'Column 8 number': 100,
          'Column 9 number': 100,
        },
      ],
      selectedItems: [],
      edit: {},

    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenFullPage = this.handleOpenFullPage.bind(this);
    this.handleCloseFullPage = this.handleCloseFullPage.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.setOpenFullPage = this.setOpenFullPage.bind(this);
    this.handleSelectRow = this.handleSelectRow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSelectedAll = this.handleSelectedAll.bind(this);
  }

  setOpenFullPage(openFullPage) {
    this.setState({openFullPage});
  }

  handleAdd() {
    this.setOpenFullPage(true)
  }

  handleOpenFullPage() {
    this.setOpenFullPage(true)
  }

  handleCloseFullPage() {
    this.setOpenFullPage(false)
  }

  handleAccept(data) {
    const {rows, selectedItems, edit} = this.state;

    console.log("Submit");

    let newState = update(rows, {
      [selectedItems[0]]: {
        $set: data
      }
    });
//this.state.rows;
    this.setState({
      rows: (Object.keys(edit).length) ? newState : rows.concat(data),
      selectedItems: [],
      edit: {}
    })

  }

  handleCancel() {
    console.log("Decline");
  }

  handleSelectRow(data) {
    // data => {index: Number, checked: Bool}
    const {selectedItems} = this.state;

    //console.log('handleSelectRow', data);

    this.setState({
      selectedItems: (data.checked) ? selectedItems.concat([data.index]) : selectedItems.filter(key => key !== data.index),
    })
  }

  handleDelete() {
    const {selectedItems, rows} = this.state;
    console.log('Delete');
    this.setState({
      rows: (rows.length === selectedItems.length) ? [] : rows.filter(key => key !== rows[selectedItems[0]]),
      selectedItems: []
    })
  }

  remove(arr, indexes) {
    let arrayOfIndexes = [].slice.call(arguments, 1);
    return arr.filter((item, index) => arrayOfIndexes.indexOf(index) === -1);
  }

  handleDeleteSelected() {
    const {selectedItems, rows} = this.state;
    //console.log('Delete selected', rows, selectedItems);

    this.setState({
      rows: (selectedItems.length === rows.length) ? [] : this.remove(rows, ...selectedItems),
      selectedItems: [],
    })
  }

  handleEdit(index) {
    // index -> row index, for if key down Enter
    console.log('Edit', index);
    const {selectedItems, rows} = this.state;

    if (typeof index === 'number') {
      this.setState({
        openFullPage: true,
        edit: rows[index],
        selectedItems: update(selectedItems, {
          $unshift: [index]
        })
      })
    } else {
      this.setState({
        openFullPage: true,
        edit: rows[selectedItems[0]],
      })
    }
  }

  handleSelectedAll(checked) {
    //console.log('selected all', checked);
    const {rows} = this.state;
    this.setState({
      // [...rows.keys()] => [0, 1, 2, 3...]
      selectedItems: (checked)? [...rows.keys()] : []
    })
  }

  render() {
    const {openFullPage, columns, rows, edit} = this.state;

    return (
      <section className="content">
        <Elevation
          zSpace="2"
          className="demo-page-table"
        >
          <TypographyDisplay size="1">Table</TypographyDisplay>

          <Table
            // props data = { name, type, sortable
            /* Todo:
             props:
             - action for Dialog / Table head / multi selected / single selected
             - columns date
             -

             <Table  {...data} onAction={() => (actionName, actionData)} />
             */

            // table header columns
            //onAction={(name, data) => console.log('onAction', name, data)}
            table={{
              insert: this.handleAdd,
              enter: this.handleEdit
            }}

            header={{
              title: 'Title Table',
              // show if not selected
              action: [
                // props for button | react component
                <Action
                  name="Add"
                  icon="add"
                  key="add"
                  onClick={this.handleAdd}
                />,
                <Action
                  key="reset"
                  name="Reset"
                  icon="autorenew"
                />
              ],
              // if selected > 1
              // if need for 2 one actions and 3 other actions, here ()? : ;
              multi: [
                <Action
                  key="delete"
                  onClick={this.handleDeleteSelected}
                  name="Delete"
                  icon="delete"
                />
              ],
              // selected === 1
              single: [
                <Action
                  key="edit"
                  onClick={this.handleEdit}
                  name="Edit"
                  icon="mode_edit"
                />,
                <Action
                  key="delete"
                  onClick={this.handleDelete}
                  name="Delete"
                  icon="delete"
                />
              ]

              // () => (name, data)
            }}

            main={{
              columns: columns,
              rows: rows,
              // data => {index: Number, checked: Bool}
              onSelectRow: this.handleSelectRow,
              onSelectedAll: this.handleSelectedAll,
              checkbox: true
            }}

            dialog={{
              openDialog: openFullPage,
              title: 'New Row',
              row: edit,
              onAccept: this.handleAccept,
              onCancel: this.handleCancel,
              onOpen: this.handleOpenFullPage,
              onClose: this.handleCloseFullPage
            }}
          />


        </Elevation>
        <div/>
      </section>
    )
  }
}
