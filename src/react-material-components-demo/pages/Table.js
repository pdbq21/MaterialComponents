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
  CheckboxBG,
  Dialog,
  DialogSurface,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarTitle,
  DialogFooterButton,
  ToolbarMain,
  LayoutGrid,
  LayoutGridInner,
  LayoutGridCell,
  Textfield,
  TextfieldInput,
  TextfieldLabel,
} from '../lib'
//import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

const SectionDataRow = ({
                          // () => (value, id)
                          handleChange,
                          // columns => [{ name: 'name', type: 'type' },{}...]
                          // the name - name current col, the type - type for input
                          columns,
// other props
                        }) => {
  return (
    <LayoutGrid>
      <LayoutGridInner>
        {/* title => New Row # */}
        <LayoutGridCell columns='12'>New Row</LayoutGridCell>
        {/* ? need dynamic # for columns */}
        {columns.map(({type, name,}, index) => (
          <LayoutGridCell
            columns="4"
            key={`key-new_row-${index}`}
          >
            <Textfield>
              {/* type => text | number | ? may be select list */}
              <TextfieldInput onBlur={({target}) => handleChange(name, target.value)} type={type}/>
              {/* label => name current col */}
              <TextfieldLabel>{name}</TextfieldLabel>
            </Textfield>
          </LayoutGridCell>
        ))}
      </LayoutGridInner>
    </LayoutGrid>
  )
};

export default class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      openFullPage: false,
      selectAll: false,
      selectedItems: [],
      dataTable: {
        id: 'tableId',
        childrenId: [],
      },
      childrenTable: {},
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
      dataNewRow: {}
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
    console.log("Accept", this.state.dataNewRow);
    const {childrenTable, id, dataTable, dataNewRow} = this.state;

    const nodeId = `id_${id}`;

    const newState = Object.assign({}, childrenTable, {
      [nodeId]: {
        id: nodeId,
        active: false,
        columns: dataNewRow
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

  submitRow() {
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
      selectAll: (dataTable.childrenId.length === selectedItems.length + 1 ),
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

  handleChangeDataRow(name, value) {
    const {dataNewRow} = this.state;
    //console.log(name, value);
    this.setState({
      dataNewRow: {
        ...dataNewRow,
        [name]: value
      }
    })
  }

  render() {
    const {selectAll, selectedItems, openFullPage, dataColumns} = this.state;
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
            {(openFullPage)? <Dialog
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
                      {/*Todo: need this ToolbarIcon +  DialogFooterButton => DialogHeaderButton*/}
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
                  <SectionDataRow
                    columns={dataColumns}
                    handleChange={this.handleChangeDataRow}
                  />
                </ToolbarMain>
              </DialogSurface>
            </Dialog> : null}

          </Elevation>

        </Elevation>
      </section>
    )
  }
}
