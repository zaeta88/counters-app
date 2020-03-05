import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DeleteAlert.css';
import i18n from '../i18n';

class DeleteAlert extends Component {

  render() {
    const { row } = this.props;
    return (
      <div className="react-confirm-alert-overlay">
        <div className="react-confirm-alert-body">
          <h1>{i18n.t('counters.alert.title')}</h1>
          {i18n.t('counters.alert.message')} {row.title}?
          <div className="react-confirm-alert-button-group">
            <button
              onClick={() => {
                this.props.handleDelete(row);
                this.props.onClose();
              }}
            >
              {i18n.t('counters.alert.yes')}
            </button>
            <button onClick={ this.props.onClose }>{i18n.t('counters.alert.no')}</button>
          </div>
        </div>
      </div>
    );
  }
}

DeleteAlert.propTypes = {
  row: PropTypes.objectOf(PropTypes.string),
  handleDelete: PropTypes.func,
  onClose: PropTypes.func
};

export default DeleteAlert;