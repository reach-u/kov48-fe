import React, {Component} from 'react';
import {Button} from 'reactstrap';
import LoginForm from './loginForm';
import {fetchUserInfo} from '../../store/actions/appUser';

class LoginPage extends Component {
  state = {
    key: 1,
  };

  handleSelect = key => {
    this.setState({key});
  };

  onSubmit = () => {
    fetchUserInfo();
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
export default LoginPage;
