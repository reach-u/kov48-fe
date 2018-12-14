import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {fetchChildData} from '../store/actions/childData';
import Redirect from 'react-router/es/Redirect';
import api from '../api';
import {setToastError, setToastSuccess} from '../store/actions/toastMessage';
import PersonData from './personData';
import {fetchStepsData} from "../store/actions/availableSteps";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Overview extends Component {

  componentDidMount() {
    this.props.fetchChildData();
  }

  render() {
    const {userData: father, child} = this.props;
    console.log(child);
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
            <div className="form-group col-md-3 text-align-left">Sünnitoetus(Riik)</div>
            <div className="form-group col-md-1 text-align-left cst-brdr">320€</div>
            <div className="form-group col-md-2 text-align-left">
              <button className="btn btn-outline-success">Makstud&nbsp;<FontAwesomeIcon icon="check" /></button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Isa</div>
            <div className="form-group col-md-3 text-align-left">{child.father ? child.father.firstName + " " + child.father.lastName : ""}</div>
            <div className="form-group col-md-3 text-align-left">Sünnitoetus(KOV)</div>
            <div className="form-group col-md-1 text-align-left cst-brdr">1000€</div>
            <div className="form-group col-md-2 text-align-left">
              <button className="btn btn-outline-success">Makstud&nbsp;<FontAwesomeIcon icon="check" /></button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Sünd</div>
            <div className="form-group col-md-3 text-align-left">{child.dateOfBirth || ''}</div>
            <div className="form-group col-md-3 text-align-left">Lapsetoetus</div>
            <div className="form-group col-md-1 text-align-left cst-brdr">55€</div>
            <div className="form-group col-md-2 text-align-left">
              <button className="btn btn-outline-warning">Menetlemisel&nbsp;<FontAwesomeIcon icon="exclamation-circle" /></button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3 text-align-right">Isikukood</div>
            <div className="form-group col-md-3 text-align-left">
              {child.idCode || ''}
            </div>
            <div className="form-group col-md-3 text-align-left">Vanemahüvitis</div>
            <div className="form-group col-md-1 text-align-left cst-brdr">1500€</div>
            <div className="form-group col-md-2 text-align-left">
              <button className="btn btn-outline-warning">Menetlemisel&nbsp;<FontAwesomeIcon icon="exclamation-circle" /></button>
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
      </div>
    );
  }
}

export default connect(
  state => ({
    userData: state.appUser.userData,
    child: state.childData.childData,
  }),
  {fetchChildData, setToastSuccess, setToastError, fetchStepsData}
)(Overview);
