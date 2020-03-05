import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
import i18n from '../i18n';

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

  /* eslint-disable no-unused-vars */
  sortCaret = (order, column) => {
    if (!order) return (<span className="carret"><img src={left} alt={i18n.t('counters.table.upIconAlt')}/><img src={right} alt={i18n.t('counters.table.downIconAlt')}/></span>);
    else if (order === 'asc') return (<span className="carret"><img src={left} alt={i18n.t('counters.table.upIconAlt')}/></span>);
    else if (order === 'desc') return (<span className="carret"><img src={right} alt={i18n.t('counters.table.downIconAlt')}/></span>);
    return null;
  }

  customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      {i18n.t('counters.table.showing')} { from } {i18n.t('counters.table.to')} { to } {i18n.t('counters.table.of')} { size } {i18n.t('counters.table.results')}
    </span>
  );

  tableColumns = () => {
    const columns = [{
      dataField: 'id',
      text: i18n.t('counters.table.id'),
      sort: true,
      sortCaret: this.sortCaret
    }, {
      dataField: 'title',
      text: i18n.t('counters.table.title'),
      sort: true,
      sortCaret: this.sortCaret
    }, {
      dataField: 'count',
      text: i18n.t('counters.table.count'),
      sort: true,
      sortCaret: this.sortCaret,
      footer: '',
      footerFormatter: this.sumFormatter
    },  {
      dataField: '',
      text: i18n.t('counters.table.inc'),
      align: 'center',
      formatter: this.plusButtonFormatter,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          this.props.handleIncrease(row)
        }
      }
    },  {
      dataField: '',
      text: i18n.t('counters.table.dec'),
      align: 'center',
      formatter: this.lessButtonFormatter,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          this.props.handleDecrease(row)
        }
      }
    }, {
      dataField: '',
      text: i18n.t('counters.table.delete'),
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
        text: i18n.t('counters.table.all'), value: counters.length
      }] 
    };
    return options;
  }

  plusButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0 like-dislike">
        <button className="member-link btn like" title={i18n.t('counters.table.increaseBtn')}>
          <img src={like} alt={i18n.t('counters.table.likeIconAlt')}/>
        </button>
      </div>
    );
  }

  lessButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0 like-dislike">
        <button className="member-link btn dislike" title={i18n.t('counters.table.decreaseBtn')}>
          <img src={dislike} alt={i18n.t('counters.table.dislikeIconAlt')}/>
        </button>
      </div>
    );
  }
  
  deleteButtonFormatter = (cell, row) => {
    return (
      <div className="actions mb-0">
        <button className="member-link btn delete-btn" title={i18n.t('counters.table.deleteBtn')}>
          <img src={trash} alt={i18n.t('counters.table.trashIconAlt')}></img>
        </button>
      </div>
    );
  }

  sumFormatter = (column, colIndex) => {
    const { counters } = this.state;
    const value = counters.length > 0 ? counters.map(o => o.count).reduce((a, b) => parseInt(a) + parseInt(b)) : 0;
    return (
      <h5><strong>{i18n.t('counters.table.total')} { value }</strong></h5>
    );
  }
  /* eslint-enable no-unused-vars */

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
                  noDataIndication={i18n.t('counters.table.empty')}
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

CountersTable.propTypes = {
  handleIncrease: PropTypes.func,
  handleDecrease: PropTypes.func,
  handleDelete: PropTypes.func,
  counters: PropTypes.array
};

export default CountersTable;