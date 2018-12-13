import React, {Component} from 'react';
import {Button} from 'reactstrap';
import LoginForm from './loginForm';
import {login} from '../../store/actions/apiKey';
import {fetchUserInfo} from '../../store/actions/appUser';
import connect from 'react-redux/es/connect/connect';


class LoginPage extends Component {
  state = {
    key: 1,
  };

  handleSelect = (e) => {
    let key = parseInt(e.currentTarget.dataset.id);
    this.setState({key});
  };

  onSubmit = async (code, phone) => {
    await this.props.login(code, phone);
    this.props.fetchUserInfo();
  };

  render() {
    const {key} = this.state;
    return (
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-6 mx-auto">
            <div className="login-dialog">
              <Button className={"btn btn-outline-secondary" + (this.state.key === 1 ? " active" : "")}
                      data-id="1"
                      onClick={this.handleSelect.bind(this)}>ID-kaart</Button>
              <Button className={"btn btn-outline-secondary" + (this.state.key === 2 ? " active" : "")}
                      data-id="2"
                      onClick={this.handleSelect.bind(this)}>mobiil ID</Button>
              <Button className={"btn btn-outline-secondary" + ((this.state.key === 3) ? " active" : "")}
                      data-id="3"
                      onClick={this.handleSelect.bind(this)}>smartID</Button>
              {key === 1 ? (
                <LoginForm onSubmit={this.onSubmit} />
              ) : key === 2 ? (
                <LoginForm hasPhoneField={true} onSubmit={this.onSubmit} />
              ) : (
                <LoginForm onSubmit={this.onSubmit} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  {login, fetchUserInfo}
)(LoginPage);
