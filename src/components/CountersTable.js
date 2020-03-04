import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { confirmAlert } from 'react-confirm-alert';
import DeleteAlert from './DeleteAlert';
import CountersFilter from './CountersFilter';
import left from '../assets/img/arrow-left.svg';
import right from '../assets/img/arrow-right.svg';
import trash from '../assets/img/trash.svg';
import like from '../assets/img/like.svg';
import dislike from '../assets/img/dislike.svg';
import './CountersTable.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

class CountersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: this.props.counters,
      filter: false
    }
    this.countersLessThan = this.countersLessThan.bind(this);
    this.countersGreaterThan = this.countersGreaterThan.bind(this);
  }

  sortCaret = (order, column) => {
    if (!order) return (<span className="carret"><img src={left} alt="Down Arrow."/><img src={right} alt="Up Arrow."/></span>);
    else if (order === 'asc') return (<span className="carret"><img src={left} alt="Down Arrow."/></span>);
    else if (order === 'desc') return (<span className="carret"><img src={right} alt="Up Arrow."/></span>);
    return null;
  }

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );

  tableColumns = () => {
    const columns = [{
      dataField: 'id',
      text: 'ID',
      sort: true,
      sortCaret: this.sortCaret
    }, {
      dataField: 'title',
      text: 'Title',
      sort: true,
      sortCaret: this.sortCaret
    }, {
      dataField: 'count',
      text: 'Count',
      sort: true,
      sortCaret: this.sortCaret,
      footer: '',
      footerFormatter: this.sumFormatter
    },  {
      dataField: '',
      text: 'Inc',
      align: 'center',
      formatter: this.plusButtonFormatter,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          this.props.handleIncrease(row)
        }
      }
    },  {
      dataField: '',
      text: 'Dec',
      align: 'center',
      formatter: this.lessButtonFormatter,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          this.props.handleDecrease(row)
        }
      }
    }, {
      dataField: '',
      text: 'Delete',
      align: 'center',
      formatter: this.deleteButtonFormatter,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <DeleteAlert 
                  handleDelete = { this.props.handleDelete }
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

  plusButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0 like-dislike">
        <button className="member-link btn like" title="Increase count">
          <img src={like} alt="Like Icon, add a like!"/>
        </button>
      </div>
    );
  }

  lessButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0 like-dislike">
        <button className="member-link btn dislike" title="Decrease count">
          <img src={dislike} alt="Dislike Icon, remove a like!"/>
        </button>
      </div>
    );
  }
  
  deleteButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0">
        <button className="member-link btn delete-btn" title="Delete">
          <img src={trash} alt="Trash Icon, delete counter!"></img>
        </button>
      </div>
    );
  }

  sumFormatter = (column, colIndex) => {
    const { counters } = this.state;
    const value = counters.length > 0 ? counters.map(o => o.count).reduce((a, b) => parseInt(a) + parseInt(b)) : 0;
    return (
      <h5><strong>Counters Total: { value }</strong></h5>
    );
  }

  countersLessThan = (value) => {
    let counters = [];
    let filter = true;
    if (value === '') {
      filter = false
      counters = this.props.counters
    } else {
      counters = this.props.counters.filter((o) => parseInt(o.count) < parseInt(value));
    }
    this.setState({ 
      counters: counters, 
      filter: filter 
    });
  }

  countersGreaterThan = (value) => {
    let counters = [];
    let filter = true;
    if (value === '') {
      filter = false
      counters = this.props.counters
    } else {
      counters = this.props.counters.filter((o) => parseInt(o.count) > parseInt(value));
    }
    this.setState({ 
      counters: counters, 
      filter: filter 
    });
  }

  emptyFilters = () => {
    this.setState({ counters: [] });
  }

  render() {
    const { SearchBar } = Search;
    const counters =  this.state.filter ? this.state.counters : this.props.counters;
    
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
                <CountersFilter 
                  countersLessThan = { this.countersLessThan }
                  countersGreaterThan = { this.countersGreaterThan }
                  emptyFilters = { this.emptyFilters }
                />
                <SearchBar { ...props.searchProps } />
                <BootstrapTable
                  { ...props.baseProps }
                  noDataIndication="Empty Table"
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