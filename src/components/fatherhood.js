import React, {Component} from 'react';

class Fatherhood extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <div className="form-row">
            <label className="form-label">Lapse andmed</label>
          </div>
          <hr className="featurette-divider" />
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Eesnimi" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Perekonnanimi" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select id="inputState" className="form-control">
                <option selected>Sugu</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Sünniaeg" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Aadress" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select id="inputState" className="form-control">
                <option selected>Sünnikoht</option>
                <option>Tartu</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Isikukood" />
            </div>
          </div>

          <div className="form-row" style={{paddingTop: '35px'}}>
            <label className="form-label">Isa andmed</label>
          </div>
          <hr className="featurette-divider" />
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Eesnimi" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Perekonnanimi" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select id="inputState" className="form-control">
                <option selected>Sugu</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Sünniaeg" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Aadress" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <select id="inputState" className="form-control">
                <option selected>Sünnikoht</option>
                <option>Tartu</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control" placeholder="Isikukood" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <button type="submit" className="btn btn-danger">
                Loobun
              </button>
            </div>
            <div className="form-group col-md-3">
              <button type="submit" className="btn btn-success">
                Kinnitan
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Fatherhood;
