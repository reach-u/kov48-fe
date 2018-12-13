import React, {Component} from 'react';

import availableSteps from '../api/controllers/availableSteps';
import confirmFather from '../api/controllers/confirmFather';

class Fatherhood extends Component {

  state = {
    cf: null
  };

  componentDidMount() {
    let childId = 51800000000;
    let fatherId = 5180000000;
    let that = this;
    availableSteps.get(fatherId).then(function (data) {
      console.log(data);
      if (data.indexOf("CONFIRM_FATHER") > -1) {
        confirmFather.get(childId).then(function (cf) {
          that.state.cf = cf;
        });
      } else {
        window.location = "/";
      }
    });
  }

  render() {
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
              {this.state.cf && this.state.cf.firstName ? this.state.cf.firstName : ""}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Perekonnanimi
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sugu
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünniaeg
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Aadress
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünnikoht
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Isikukood
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
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
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Perekonnanimi
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sugu
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünniaeg
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Aadress
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Sünnikoht
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 text-align-right">
              Isikukood
            </div>
            <div className="form-group col-md-6 text-align-left">
              Eesnimi
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-danger">Loobun</button>
            </div>
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-success">Kinnitan</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default Fatherhood;
