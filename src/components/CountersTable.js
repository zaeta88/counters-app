import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { del } from '../fetcher';
import DeleteAlert from './DeleteAlert';
import left from '../assets/img/arrow-left.svg';
import right from '../assets/img/arrow-right.svg';
import trash from '../assets/img/trash.svg';
import './CountersTable.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

class CountersTable extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  sortCaret = (order, column) => {
    if (!order) return (<span className="carret"><img src={left}/><img src={right}/></span>);
    else if (order === 'asc') return (<span className="carret"><img src={left}/></span>);
    else if (order === 'desc') return (<span className="carret"><img src={right}/></span>);
    return null;
  }

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );

  handleRequest = async (counter) => {
    const counters = this.props.counters.filter((o) => { return o.id !== counter.id});
    
    await del('/api/v1/counter', counter);
    this.props.handleCountersChange(counters);
    this.props.actions.deleteCounter(counter.id);
  }

  handleDelete = (counter) => {
    this.handleRequest(counter)
  }

  tableColumns = () => {
    const columns = [{
      dataField: 'id',
      text: 'ID',
      dbclickToEdit: true,
      sort: true,
      sortCaret: this.sortCaret
    }, {
      dataField: 'title',
      text: 'Title',
      dbclickToEdit: true,
      sort: true,
      sortCaret: this.sortCaret
    }, {
      dataField: 'count',
      text: 'Count',
      dbclickToEdit: true,
      sort: true,
      sortCaret: this.sortCaret,
      footer: '',
      footerFormatter: this.sumFormatter
    },  {
      dataField: '',
      text: 'Delete',
      align: 'center',
      dbclickToEdit: false,
      formatter: this.deleteButtonFormatter,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <DeleteAlert 
                  handleDelete = { this.handleDelete }
                  onClose = { onClose }
                  row = { row }
                />
              );
            }
          });
        }
      }
    }];
    return columns;
  }

  tablePaginationOptions = (counters) => {
    const options = {
      paginationSize: 10,
      pageStartIndex: 1,
      showTotal: true,
      paginationTotalRenderer: this.customTotal,
      sizePerPageList: [{
        text: '10', value: 10
      }, {
        text: '25', value: 25
      }, {
        text: 'All', value: counters.length
      }] 
    };
    return options;
  }
  
  deleteButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0">
        <button className="member-link btn" title="Delete">
          <img src={trash}></img>
        </button>
      </div>
    );
  }

  sumFormatter = (column, colIndex) => {
    const { counters } = this.props;
    const value = counters.length > 0 ? counters.map(o => o.count).reduce((a, b) => parseInt(a) + parseInt(b)) : 0;
    return (
      <h5><strong>Counters Total: { value }</strong></h5>
    );
  }  

  render() {
    const { SearchBar } = Search;
    const { counters } = this.props;
    
    return (
      <div className="content-wrapper container">
        <ToolkitProvider
          keyField="id"
          data={ counters }
          columns={ this.tableColumns() }
          search
        >
          {
            props => (
              <div>
                <SearchBar { ...props.searchProps } />
                <hr />
                <BootstrapTable
                  { ...props.baseProps }
                  noDataIndication="Empty Table"
                  cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
                  pagination={ paginationFactory(this.tablePaginationOptions(counters)) }
                  hover
                />
              </div>
            )
          }
        </ToolkitProvider>
      </div>
    );
  }
}

export default CountersTable;