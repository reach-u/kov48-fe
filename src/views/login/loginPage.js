import React, {Component} from 'react';
import {Button} from 'reactstrap';
import LoginForm from './loginForm';
import {login} from '../../store/actions/apiKey';
import connect from 'react-redux/es/connect/connect';

class LoginPage extends Component {
  state = {
    key: 1,
  };

  handleSelect = key => {
    this.setState({key});
  };

  onSubmit = (code, phone) => {
    this.props.login(code, phone);
  };

  render() {
    const {key} = this.state;
    return (
      <div>
        <Button onClick={() => this.handleSelect(1)}>ID-kaart</Button>
        <Button onClick={() => this.handleSelect(2)}>mobiil ID</Button>
        <Button onClick={() => this.handleSelect(3)}>smartID</Button>
        {key === 1 ? (
          <LoginForm onSubmit={this.onSubmit} />
        ) : key === 2 ? (
          <LoginForm hasPhoneField={true} onSubmit={this.onSubmit} />
        ) : (
          <LoginForm onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}
export default connect(
  null,
  {login}
)(LoginPage);
