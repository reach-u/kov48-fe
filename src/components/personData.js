import React from 'react';

const PersonData = ({label, person}) => {
  return (
      person ?
    <div>
      <div className="form-row">
          <h5>{label}</h5>
      </div>
      <hr className="featurette-divider" />
      <div className="form-row">
        <div className="form-group col-md-6 text-align-right">Eesnimi</div>
        <div className="form-group col-md-6 text-align-left">{person.firstName || ''}</div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 text-align-right">Perekonnanimi</div>
        <div className="form-group col-md-6 text-align-left">{person.lastName || ''}</div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 text-align-right">Sugu</div>
        <div className="form-group col-md-6 text-align-left">{person.sex || ''}</div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 text-align-right">Sünniaeg</div>
        <div className="form-group col-md-6 text-align-left">{person.dateOfBirth || ''}</div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 text-align-right">Aadress</div>
        <div className="form-group col-md-6 text-align-left">
          {person.address ? person.address.city : ''}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 text-align-right">Sünnikoht</div>
        <div className="form-group col-md-6 text-align-left">{person.birthPlace || ''}</div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6 text-align-right">Isikukood</div>
        <div className="form-group col-md-6 text-align-left">{person.idCode || ''}</div>
      </div>
    </div>:null
  );
};

export default PersonData;
