/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
//import update from 'react-addons-update'; // ES6
//import ReactDOM from 'react-dom'

import {
  Elevation,
} from '../index'
import Header from './Header'
import Main from './Main'
import FullPageDialog from './Dialog'
import DialogMain from './DialogMain'
import './styles.css'

export default class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataNewRow: {}, // data for new row  => {col: value},
      // where col - current column name;

      // new State
      dataRows: [],
      selectAll: false, // all checkbox is checked
      selectedItems: [], //  all checked row
      toggle: false, // for sort

      focusRowIndex: ''
    };

    this.handleChangeDataRow = this.handleChangeDataRow.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderDialog = this.renderDialog.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onCheckbox = this.onCheckbox.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.onSort = this.onSort.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDownTable = this.handleKeyDownTable.bind(this);
  }

  handleSelectAll(checked) {
    const {dataRows} = this.state;
    const {main} = this.props;
    main.onSelectedAll(checked);

    let newSelectedItems = [];

    dataRows.forEach((item, index) => {
      newSelectedItems = newSelectedItems.concat([index]);
    });
    this.setState({
      selectAll: checked,
      selectedItems: (checked) ? newSelectedItems : [],
    })
  }

  handleChangeDataRow(name, value) {
    const {dataNewRow} = this.state;
    console.log('handleChangeDataRow');
    this.setState({
      dataNewRow: {
        ...dataNewRow,
        [name]: value
      }
    })
  }

  onCheckbox(data) {
    //console.log('onCheckbox', data);
    const {dataRows, selectedItems} = this.state;
    const {main} = this.props;
    const {onSelectRow, onSelectedAll} = main;

    onSelectRow(data);

    const newSelectedItems = (data.checked) ?
      selectedItems.concat([data.index]) : selectedItems.filter(key => key !== data.index);
    const isSelectedAll = dataRows.length === newSelectedItems.length;

    if (isSelectedAll) {
      onSelectedAll(true);
    }

    this.setState({
      selectAll: isSelectedAll,
      selectedItems: newSelectedItems,
    })

  }

  renderHeader() {
    const {selectedItems} = this.state;
    const {header} = this.props;

    return (
      <Header
        items={selectedItems.length}
        {...header}
      />
    );
  }

  handleKeyDownTable({keyCode}) {
    if (keyCode === 45) {
      this.props.table.insert()
    }
  }

  handleKeyDown({currentTarget, keyCode}) {
    //console.log('handleKeyDown',keyCode );
    if (keyCode === 40 || keyCode === 38 || keyCode === 32 || keyCode === 13) {
      const {focusRowIndex} = this.state;
      const rows = currentTarget.children;
      let newFocus = focusRowIndex;

      if (keyCode === 32) {
        console.dir(rows[newFocus].children[0].childNodes[0].childNodes[0].checked);
        this.onCheckbox({checked: !rows[newFocus].children[0].childNodes[0].childNodes[0].checked, index: newFocus});
      } else if (keyCode === 13) {
        console.log(focusRowIndex);
        // focus index
        this.props.table.enter(focusRowIndex)
      } else {
        if (keyCode === 40) {
          newFocus = (newFocus === rows.length - 1) ? 0 : newFocus + 1;
        } else {
          newFocus = (newFocus === 0) ? rows.length - 1 : newFocus - 1;
        }

        rows[newFocus].focus();
      }
    }
  }

  handleFocus(index) {
    //   console.log('focus', index);
    this.setState({
      focusRowIndex: index
    });
  }

  renderMain() {
    const {main} = this.props;
    const {selectAll, selectedItems, toggle} = this.state;

    return (
      <Main
        onKeyDown={this.handleKeyDown}
        selectAll={selectAll}
        toggle={toggle}
        onSort={this.onSort}
        onCheckbox={this.onCheckbox}
        onSelectAll={this.handleSelectAll}
        onFocus={this.handleFocus}
        selectedItems={selectedItems}
        {...main}
      />
    )
  }

  onAccept() {
    const {dialog, main} = this.props;
    const {onAccept} = dialog;
    const {columns} = main;
    const {dataNewRow, dataRows, selectedItems} = this.state;

    let row = {};

    columns.forEach(({name, defaultValue}) => {
      const value = (dataRows[selectedItems[0]]) ? dataRows[selectedItems[0]][name] : defaultValue;
      row[name] = dataNewRow[name] || value;
    });

    onAccept(row);

    this.setState({
      dataNewRow: {},
      selectAll: false,
    });
  }

  renderDialog() {
    const {dialog, main} = this.props;
    const {openDialog, title, onCancel, onOpen, onClose, row} = dialog;
    const {columns} = main;

    return <FullPageDialog
      onAccept={this.onAccept}
      onCancel={onCancel}
      onOpen={onOpen}
      onClose={onClose}
      openDialog={openDialog}
    >
      {/* new Row container */}
      <DialogMain
        title={title}
        columns={columns}
        row={row}
        onBlur={this.handleChangeDataRow}
        openDialog={openDialog}
      />
    </FullPageDialog>

  }

  onSort(isOn, name) {
    const {dataRows} = this.state;
    console.log('Sort', isOn);

    // [{}, {}] -> key === name
    // isOn ? lower : highest
    dataRows.sort((...array) => ((isOn) ? array[0][name] < array[1][name] : array[0][name] > array[1][name]));

    this.setState({
      toggle: isOn,
    })
  }

  componentWillMount() {
    if (this.props.main.rows) {
      this.setState({
        dataRows: this.props.main.rows,
      })
    }
  }

  componentWillReceiveProps(props) {
    if (props.main.rows !== this.state.dataRows) {
      let newSelectedItems = [];

      props.main.rows.forEach((item, index) => {
        if (item === this.state.dataRows[index] && this.state.selectedItems.indexOf(index) !== -1) {
          newSelectedItems.concat([index])
        }
      });

      this.setState({
        dataRows: props.main.rows,
        selectedItems: newSelectedItems,
        selectAll: newSelectedItems.length && newSelectedItems.length === props.main.rows.length
      })
    }

  }


  render() {
    const ownProps = Object.assign({}, this.props.table);
    delete ownProps.insert;
    delete ownProps.enter;
    const {
      className,
      ...otherProp
    } = ownProps;
    const classes = classnames(
      'rmd-table__container', className
    );
    return (<Elevation
        tabIndex="0"
        zSpace="2"
        className={classes}
        onKeyDown={this.handleKeyDownTable}
        {...otherProp}
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
