import React, {Component} from 'react';

import availableSteps from '../api/controllers/availableSteps';
import confirmFather from '../api/controllers/confirmFather';
import connect from "react-redux/es/connect/connect";

class Fatherhood extends Component {

  state = {
    child: null,
    father: null
  };

  componentDidUpdate(a, b, c) {
    let fatherId = 5180000000;
    availableSteps.get(fatherId).then(function (data) {
      if (data.indexOf("CONFIRM_FATHER") > -1) {
      } else {
        window.location.href = "/";
      }
    });
  }

  confirmChild() {
    let childId = 51800000000;
    confirmFather.get(childId).then(function () {
      window.location.href = "/";
    });
  }

  cancelChild() {
    window.location.href = "/";
  }

  render() {
    console.log(this.props.userData);
    return (
      <div>
        <form className="form">
          <div className="form-row">
            <label className="form-label">Lapse andmed</label>
          </div>
          <hr className="featurette-divider"/>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Eesnimi
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.firstName ? this.state.child.firstName : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Perekonnanimi
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.lastName ? this.state.child.lastName : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sugu
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.sex ? this.state.child.sex : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünniaeg
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.dateOfBirth ? this.state.child.dateOfBirth : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Aadress
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.address ? this.state.child.address : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünnikoht
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.birthPlace ? this.state.child.birthPlace : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Isikukood
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.child && this.state.child.idCode ? this.state.child.idCode : ""}
            </div>
          </div>


          <div className="form-row" style={{paddingTop: "35px"}}>
            <label className="form-label">Isa andmed</label>
          </div>
          <hr className="featurette-divider"/>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Eesnimi
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.father && this.state.father && this.state.father.firstName ? this.state.father.firstName : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Perekonnanimi
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.father && this.state.father && this.state.father.lastName ? this.state.father.lastName : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sugu
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.father && this.state.father && this.state.father.sex ? this.state.father.sex : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünniaeg
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.father && this.state.father && this.state.father.dateOfBirth ? this.state.father.dateOfBirth : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Aadress
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.father && this.state.father && this.state.father.address ? this.state.father.address : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünnikoht
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.father && this.state.father && this.state.father.birthPlace ? this.state.father.birthPlace : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Isikukood
            </div>
            <div className="form-group col-md-6 text-align-left">
              {this.state.father && this.state.father && this.state.father.idCode ? this.state.father.idCode : ""}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-danger" onClick={this.cancelChild}>Loobun</button>
            </div>
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-success" onClick={this.confirmChild}>Kinnitan</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
  }),
  null
)(Fatherhood);
