/**
 * Created by ruslan on 04.07.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
  Table,
} from '../lib'
//import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class TablePage extends Component {


  render() {
    return (
      <section className="content">
        <Elevation
          zSpace="2"
          className="demo-page-table"
        >
          <TypographyDisplay size="1">Table</TypographyDisplay>

          <Table
// props data = { name, type, sortable
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
