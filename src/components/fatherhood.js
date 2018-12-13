import React, {Component} from 'react';

//import availableSteps from '../api/controllers/availableSteps';
//import confirmFather from '../api/controllers/confirmFather';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import ConfirmationModal from './confirmationModal';

class Fatherhood extends Component {
  state = {
    child: null,
  };

  confirmChild() {}

  cancelChild() {}

  render() {
    const {userData: father} = this.props;

    return (
      <div>
        <form className="form">
          <div className="form-row">
            <label className="form-label">Lapse andmed</label>
          </div>
          <hr className="featurette-divider" />
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Eesnimi</div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.firstName ? this.state.child.firstName : ''}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Perekonnanimi</div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.lastName ? this.state.child.lastName : ''}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sugu</div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.sex ? this.state.child.sex : ''}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sünniaeg</div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.dateOfBirth ? this.state.child.dateOfBirth : ''}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Aadress</div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.address ? this.state.child.address : ''}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Sünnikoht</div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.birthPlace ? this.state.child.birthPlace : ''}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">Isikukood</div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.idCode ? this.state.child.idCode : ''}
            </div>
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
              <button type="submit" className="btn btn-danger" onClick={this.cancelChild}>
                Loobun
              </button>
            </div>
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-success" onClick={this.confirmChild}>
                Kinnitan
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
  }),
  null
)(Fatherhood);
