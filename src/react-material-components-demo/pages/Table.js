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
      selectAll: false, // all checkbox is checked
      columns: [
        {
          name: 'Col 1',
          type: 'string',// string | number | ?
          sortable: false,
          defaultValue: 'name'
        },//col 1 type/name/sortable/
        {
          name: 'Col 2',
          type: 'string',
          defaultValue: 'type'
        },//col 2
        {
          name: 'Col 3',
          type: 'number',
          defaultValue: '0'
        },//col 3
        {
          name: 'Col 4',
          type: 'string',
          defaultValue: 'id'
        },//col 4
        {
          name: 'Col 5',
          type: 'number',
          defaultValue: '0'
        },//col 5
        {
          name: 'Col 6',
          type: 'number',
          defaultValue: '0'
        },//col 6
        {
          name: 'Col 7',
          type: 'number',
          defaultValue: '0'
        },//col 7
        {
          name: 'Col 8',
          type: 'number',
          defaultValue: '0'
        },//col 8
        {
          name: 'Col 9',
          type: 'number',
          defaultValue: '0'
        },//col 9
        {
          name: 'Col 10',
          type: 'number',
          defaultValue: '0'
        },//col 9
        {
          name: 'Col 11',
          type: 'number',
          defaultValue: '0'
        },//col 9
        {
          name: 'Cod fgfd gl 12',
          type: 'number',
          defaultValue: '0'
        },//col 9
        {
          name: 'Coldf gdf gdf 13',
          type: 'number',
          defaultValue: '0'
        },//col 9
        {
          name: 'Coldf gdf g 14',
          type: 'number',
          defaultValue: '0'
        },//col 9
      ],
      rows: [],
      selectedItems: [],
      edit: {}
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
    const {rows, selectedItems} = this.state;

    //console.log("Submit", data, rows[selectedItems[0]],);

    let newState = update(rows, {
      [selectedItems[0]]: {
        $set: data
      }
    });
    //console.log(newState);
//this.state.rows;
    this.setState({
      rows: (Object.keys(this.state.edit).length) ? newState : this.state.rows.concat(data),
      selectedItems: [],
      edit: {}
    })

  }

  handleCancel() {
    console.log("Decline");
  }

  handleSelectRow(data) {
    console.log('handleSelectRow', data);
    // data => {index: Number, checked: Bool}
    const {selectedItems} = this.state;

    this.setState({
      selectedItems: (data.checked) ? selectedItems.concat([data.index]) : selectedItems.filter(key => key !== data.index)
    })
  }

  handleDelete() {
    const {selectedItems, rows} = this.state;
    console.log('Delete');
    this.setState({
      rows: rows.filter(key => key !== rows[selectedItems[0]]),
      selectedItems: []
    })
  }

  remove(arr, indexes) {
    let arrayOfIndexes = [].slice.call(arguments, 1);
    return arr.filter((item, index) => arrayOfIndexes.indexOf(index) === -1);
  }

  handleDeleteSelected() {
    const {selectedItems, rows, selectAll} = this.state;
    console.log('Delete selected', rows, selectedItems);

    this.setState({
      rows: (selectAll)? [] : this.remove(rows, ...selectedItems),
      selectedItems: []
    })
  }

  handleEdit() {
    console.log('Edit');
    const {selectedItems, rows} = this.state;

    this.setState({
      openFullPage: true,
      edit: rows[selectedItems[0]]
    });
  }
  handleSelectedAll(checked){
    //console.log('selected all', checked)
    this.setState({
      selectAll: checked
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
            onAction={(name, data) => console.log('onAction', name, data)}


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
              onSelectedAll: this.handleSelectedAll
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
