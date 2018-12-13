import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  state = {};

  handleChange = e => {
    const {target} = e;
    this.setState({[target.name]: target.value});
  };

  render() {
    const {hasPhoneField, onSubmit} = this.props;
    return (
      <Form>
        <span className="login-credentials-form">
          <FormGroup>
          <label className="field a-field a-field_a2 page__field">
            <input className="field__input a-field__input"
                   name="userCode" id="userCode" onChange={e => this.handleChange(e)}
                   placeholder=" " required/>
            <span className="a-field__label-wrap">
            <span className="a-field__label">Kasutajanimi</span>
          </span>
          </label>
        </FormGroup>
          {hasPhoneField && (
            <FormGroup>
              <label htmlFor="userCode" className="field a-field a-field_a2 page__field">
                <input className="field__input a-field__input"
                       name="phone" id="phone" onChange={e => this.handleChange(e)}
                       placeholder=" " required/>
                <span className="a-field__label-wrap">
            <span className="a-field__label">Telefoni number</span>
            </span>
              </label>
            </FormGroup>
          )}
          <Button
            className="btn btn-outline-success"
            onClick={() => {
              onSubmit(this.state.userCode, this.state.phone);
            }}>
          Sisene
        </Button>
        </span>
      </Form>
    );
  }
}

LoginForm.defaultProps = {
  hasPhoneField: false,
};

LoginForm.propTypes = {
  hasPhoneField: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
