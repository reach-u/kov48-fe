import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {fetchChildData} from '../store/actions/childData';
import Redirect from 'react-router/es/Redirect';
import api from '../api';
import {setToastError, setToastSuccess} from '../store/actions/toastMessage';

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
        <div className="form">
          <div className="form-row">
            <label className="form-label">Lapse andmed</label>
          </div>
          <hr className="featurette-divider" />
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Eesnimi</div>
            <div className="form-group col-md-6 text-align-left">{child.firstName || ''}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Perekonnanimi</div>
            <div className="form-group col-md-6 text-align-left">{child.lastName || ''}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sugu</div>
            <div className="form-group col-md-6 text-align-left">{child.sex || ''}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sünniaeg</div>
            <div className="form-group col-md-6 text-align-left">{child.dateOfBirth || ''}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Aadress</div>
            <div className="form-group col-md-6 text-align-left">
              {child.address ? child.address.city : ''}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sünnikoht</div>
            <div className="form-group col-md-6 text-align-left">{child.birthPlace || ''}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Isikukood</div>
            <div className="form-group col-md-6 text-align-left">{child.idCode || ''}</div>
          </div>

          <div className="form-row" style={{paddingTop: '35px'}}>
            <label className="form-label">Isa andmed</label>
          </div>
          <hr className="featurette-divider" />

          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Eesnimi</div>
            <div className="form-group col-md-6 text-align-left">{father.firstName || ''}</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Perekonnanimi</div>
            <div className="form-group col-md-6 text-align-left">{father.lastName || ''}</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sugu</div>
            <div className="form-group col-md-6 text-align-left">{father.sex || ''}</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sünniaeg</div>
            <div className="form-group col-md-6 text-align-left">{father.dateOfBirth || ''}</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Aadress</div>
            <div className="form-group col-md-6 text-align-left">
              {father.address ? father.address.city : ''}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sünnikoht</div>
            <div className="form-group col-md-6 text-align-left">{father.birthPlace || ''}</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Isikukood</div>
            <div className="form-group col-md-6 text-align-left">{father.idCode || ''}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <button className="btn btn-danger" onClick={this.cancelChild}>
                Loobun
              </button>
            </div>

            <div className="form-group col-md-6">
              <button className="btn btn-success" onClick={this.confirmChild}>
                Kinnitan
              </button>
            </div>
          </div>
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
