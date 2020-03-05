import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CounterForm.css';
import { Form, Col, Button, Alert } from 'react-bootstrap';
import { post } from '../fetcher';
import i18n from '../i18n';

class CounterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false,
      validated: false,
      title: '',
      count: 0
    };
  }

  componentDidMount() {
    this.props.handleActiveNav(true)
  }

  clearForm = () => {
    this.setAlert(true);
    this.setState({
      count: 0,
      title: ' '
    });
  }

  handleChange = (event) =>{
    this.setState({ 
      [event.target.name]:event.target.value 
    });
  };

  handleSubmit = (event) => {
    const { title, count } = this.state;
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      this.handleRequest({ title, count });
    }
    this.setState({
      validated: form.checkValidity()
    })
  }

  handleRequest = async (data) => {
    const result = await post('/api/v1/counter', data);

    this.clearForm();
    this.props.actions.addCounter(result.id, result.title, result.count);
  };

  setAlert = (value) => {
    this.setState({
      alert: value
    })
  }

  render() {
    const { alert, validated, title, count } = this.state;
    return (
      <div className="counters">
        { alert &&
            <Alert variant="success"  onClose={() => this.setAlert(false)} dismissible>
              <Alert.Heading>{i18n.t('counters.form.countPh')}</Alert.Heading>
            </Alert>        
        }
        <div className="site-section pb-0">
          <div className="title-bar row">
            <div className="titlebar-left col-md-6">
              <h2 className="title">{i18n.t('counters.form.title')} </h2>
            </div>
          </div>
          <div className="content row mt-4">
            <div className="content-wrapper container">
              <div className="col-md-12">
                <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationTitle">
                      <Form.Control 
                        type="text" 
                        placeholder={i18n.t('counters.form.titlePh')}  
                        name="title"
                        value={title}
                        onChange={this.handleChange} 
                        required 
                      />
                      <Form.Control.Feedback type="invalid">
                        {i18n.t('counters.form.titleError')} 
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCount">
                      <Form.Control 
                        type="number" 
                        placeholder={i18n.t('counters.form.countPh')} 
                        min='0'
                        name="count" 
                        value={count}
                        onChange={this.handleChange} 
                        required 
                      />
                      <Form.Control.Feedback type="invalid">
                        {i18n.t('counters.form.countError')} 
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Button 
                    className="btn btn-outline-success mt-2" 
                    type="submit" 
                  >
                    {i18n.t('counters.form.save')} 
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CounterForm.propTypes = {
  handleActiveNav: PropTypes.func,
  actions: PropTypes.objectOf(PropTypes.func)
};

export default CounterForm;