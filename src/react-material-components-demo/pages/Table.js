/**
 * Created by ruslan on 04.07.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
  Table,
  Button,
  Icon
} from '../lib'
//import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

const Add = (props) => {
  return (
    <Button
      {...props}
      ripple
    ><Icon>
      add
    </Icon>Add</Button>
  );
};

const Reset = ({...props}) => {
  return (
    <Button
      {...props}
      ripple
    ><Icon>
      autorenew
    </Icon>Reset</Button>
  );
};

const Delete = () => {
  return (
    <Button
      ripple
    ><Icon>
      delete
    </Icon>Delete</Button>
  );
};

const Edit = () => {
  return (
    <Button
      ripple
    ><Icon>
      mode_edit
    </Icon>Edit</Button>
  );
};

export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,// generation ids for row
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
      ],
      rows: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenFullPage = this.handleOpenFullPage.bind(this);
    this.handleCloseFullPage = this.handleCloseFullPage.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.setOpenFullPage = this.setOpenFullPage.bind(this);
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
    //const {} = this.state;
    console.log("Submit");
//this.state.rows;
this.setState({
  rows: this.state.rows.concat(data)
})

  }

  handleCancel() {
    console.log("Decline");

  }

  render() {
    const {openFullPage, columns, rows} = this.state;
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
                <Add key="add"
                     onClick={this.handleAdd}
                />,
                <Reset key="reset"

                />
              ],
              // if selected > 1
              // if need for 2 one actions and 3 other actions, here ()? : ;
              multiSelected: [
                <Delete/>
              ],
              // selected === 1
              singleSelected: [
                <Edit key="edit"/>, <Delete key="delete"/>
              ]

              // () => (name, data)
            }}

            main={{
              columns: columns,
              rows: rows,
              // data => {index: Number, checked: Bool}
              onSelectRow: (data) => console.log('onSelectRow', data)
            }}

            dialog={{
              openDialog: openFullPage,
              title: 'New Row',
              onAccept: this.handleAccept,
              onCancel: this.handleCancel,
              onOpen: this.handleOpenFullPage,
              onClose: this.handleCloseFullPage
            }}


          />

        </Elevation>
      </section>
    )
  }
}


/*

 <Elevation
 zSpace="2"
 className="rmd-table__container"
 >
 <header
 className="rmd-table__header"
 >
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
 }
 </header>
 <main>
 <table className="table-props">
 <thead>
 <tr>
 <th>
 <Checkbox
 ripple
 disabled={(dataTable.childrenId.length === 0)}
 >
 <CheckboxInput
 checked={selectAll}
 onChange={({target}) => this.handleSelectAll(target.checked)}
 />
 <CheckboxBG/>
 </Checkbox>
 </th>
 {dataColumns.map(({name}, index) => (
 <th
 key={`key-table_column-${index}`}
 >{name}</th>
 ))}
 </tr>
 </thead>
 <tbody>
 {this.renderRows()}
 </tbody>
 </table>
 </main>
 {(openFullPage) ? <Dialog
 open={true}
 onAccept={this.handleAccept}
 onCancel={this.handleCancel}
 onOpen={this.handleOpenFullPage}
 onClose={this.handleCloseFullPage}
 fullPage
 >
 <DialogSurface>
 <Toolbar
 fixed
 >
 <ToolbarRow>
 <ToolbarSection start>
 {/!*Todo: need this ToolbarIcon +  DialogFooterButton => DialogHeaderButton*!/}
 <ToolbarIcon
 menu
 className='mdc-dialog__footer__button mdc-dialog__footer__button--cancel'
 style={{
 'cursor': 'pointer'
 }}
 >clear</ToolbarIcon>
 <ToolbarTitle>Title</ToolbarTitle>
 </ToolbarSection>
 <ToolbarSection end>
 <DialogFooterButton
 accept
 style={{
 'color': '#fff'
 }}
 >
 Submit
 </DialogFooterButton>
 </ToolbarSection>
 </ToolbarRow>
 </Toolbar>
 <ToolbarMain fixed>
 <Row
 columns={dataColumns}
 handleChange={this.handleChangeDataRow}
 />
 </ToolbarMain>
 </DialogSurface>
 </Dialog> : null}

 </Elevation>*/
