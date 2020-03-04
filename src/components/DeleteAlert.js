import React, { Component } from 'react';
import './DeleteAlert.css';

class DeleteAlert extends Component {
  
  render() {
    const { row } = this.props;
    return (
      <div className="react-confirm-alert-overlay">
        <div className="react-confirm-alert-body">
          <h1>Confirm to Delete</h1>
          Are you sure you want to delete {row.title}?
          <div className="react-confirm-alert-button-group">
            <button
              onClick={() => {
                this.props.handleDelete(row);
                this.props.onClose();
              }}
            >
              Just do it!
            </button>
            <button onClick={ this.props.onClose }>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteAlert;