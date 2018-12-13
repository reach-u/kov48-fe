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
        <FormGroup>
          <Label for="userCode">Kasutajatunnus</Label>
          <Input name="userCode" id="userCode" onChange={e => this.handleChange(e)} />
        </FormGroup>
        {hasPhoneField && (
          <FormGroup>
            <Label for="phone">Telefoninumber</Label>
            <Input name="phone" id="phone" onChange={e => this.handleChange(e)} />
          </FormGroup>
        )}
        <Button
          onClick={() => {
            this.props.onSubmit(this.state.userCode, this.state.phone);
          }}>
          Sisene
        </Button>
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
