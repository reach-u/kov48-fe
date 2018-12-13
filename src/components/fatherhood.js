import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {fetchChildData} from '../store/actions/childData';
import Redirect from 'react-router/es/Redirect';
import api from '../api';
import {setToastError, setToastSuccess} from '../store/actions/toastMessage';
import PersonData from './personData';

class Fatherhood extends Component {
  state = {
    returnToRoot: false,
  };
  componentDidMount() {
    this.props.fetchChildData();
  }

  cancelChild = () => {
    this.setState({returnToRoot: true});
  };

  confirmChild = () => {
    api.children
      .confirm(this.props.child.idCode)
      .then(() => {
        this.props.setToastSuccess({message: 'Isadus kinnitatud'}, 'Fatherhood');
        this.setState({returnToRoot: true});
      })
      .catch(() => {
        this.props.setToastError({message: 'Ootamatu viga'}, 'Fatherhood');
      });
  };

  render() {
    const {userData: father, child} = this.props;
    const {returnToRoot} = this.state;

    return returnToRoot ? (
      <Redirect to="/" />
    ) : (
      <div>
        <PersonData person={father} label="Isa andmed" />
        <PersonData person={child} label="Lapse andmed" />
          <div>

                  <button className="btn btn-danger" onClick={this.cancelChild}>
                      Loobun
                  </button>

                  <button className="btn btn-success" onClick={this.confirmChild}>
                      Kinnitan
                  </button>
          </div>

      </div>
    );
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
    child: state.childData.childData,
  }),
  {fetchChildData, setToastSuccess, setToastError}
)(Fatherhood);
