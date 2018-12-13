import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {fetchChildData} from '../store/actions/childData';

class Fatherhood extends Component {
  state = {
    child: null,
  };

  componentDidMount() {
    this.props.fetchChildData();
  }

  cancelChild() {}

  render() {
    const {userData: father, child} = this.props;

    return (
      <div>
        <form className="form">
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
    child: state.childData.childData,
  }),
  {fetchChildData}
)(Fatherhood);
