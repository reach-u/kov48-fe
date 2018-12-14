import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {fetchChildData} from '../store/actions/childData';
import Redirect from 'react-router/es/Redirect';
import api from '../api';
import {setToastError, setToastSuccess} from '../store/actions/toastMessage';
import PersonData from './personData';
import {fetchStepsData} from "../store/actions/availableSteps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fetchBenefitsData} from "../store/actions/benefitsAvailable";


class Overview extends Component {

  componentDidMount() {
    this.props.fetchChildData();
    this.props.fetchBenefitsData();
  }

  render() {
    const {benefits, child} = this.props;

    return (
      <div>
        <div>
          <div className="form-row">
            <h5>{child.firstName + " " + child.lastName}</h5>
          </div>
          <hr className="featurette-divider" />

          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Ema</div>
            <div className="form-group col-md-3 text-align-left">{child.mother ? child.mother.firstName + " " + child.mother.lastName : ""}</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Isa</div>
            <div className="form-group col-md-3 text-align-left">{child.father ? child.father.firstName + " " + child.father.lastName : ""}</div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Sünd</div>
            <div className="form-group col-md-3 text-align-left">{child.dateOfBirth || ''}</div>
          </div>


          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Isikukood</div>
            <div className="form-group col-md-3 text-align-left">
              {child.idCode || ''}
            </div>

          </div>
          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Lasteaed</div>
            <div className="form-group col-md-3 text-align-left">-</div>
            <div className="form-group col-md-3 text-align-left"></div>
            <div className="form-group col-md-1 text-align-left cst-brdr"></div>
            <div className="form-group col-md-2 text-align-left"></div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Kool</div>
            <div className="form-group col-md-3 text-align-left">-</div>
            <div className="form-group col-md-3 text-align-left"></div>
            <div className="form-group col-md-1 text-align-left cst-brdr"></div>
            <div className="form-group col-md-2 text-align-left"></div>
          </div>
        </div>

        <hr className="featurette-divider" />

        {benefits.map(b=>
          <div className="form-row">
            <div className="form-group col-md-3 text-align-left">{b.type})</div>
            <div className="form-group col-md-1 text-align-left cst-brdr">{b.amount}</div>
            <div className="form-group col-md-2 text-align-left">
              {(b.status==="Makstud")? <button className="btn btn-outline-success">Makstud&nbsp;<FontAwesomeIcon icon="check" /></button>:
                  (b.status==="Menetluses")?  <button className="btn btn-outline-warning">Menetlemisel&nbsp;<FontAwesomeIcon icon="exclamation-circle" /></button>:
                      <button className="btn btn-outline-warning">Võimalik taodelda&nbsp;<FontAwesomeIcon icon="exclamation-circle" /></button>
              }
            </div>
          </div>
        )}

      </div>

    );
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
    child: state.childData.childData,
    benefits: state.benefits,
  }),
  {fetchChildData, setToastSuccess, setToastError, fetchStepsData, fetchBenefitsData}
)(Overview);
