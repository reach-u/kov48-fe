import React from 'react';
import Slider from "../../components/sliderCheckBox";
import {sortAlphabetically} from "../../utils/sorting";

const BenefitsSelection = ({benefits, onChange}) => {
  const sortedBenefits = benefits.sort((a, b) => sortAlphabetically(a.type, b.type));
  return (
    <div>
      {sortedBenefits.map((benefit, ix) =>
        <div key={ix} className="form-row">
          <div className="form-group col-md-6 text-align-right">{benefit.type}</div>
          {benefit.status === "Esitamata" ? <Slider name={benefit} onChange={onChange} checked={benefit.selected}/> :
            <div className="form-group col-md-6 text-align-left">{benefit.status}</div>
          }
        </div>
      )}

    </div>
  );
};

export default BenefitsSelection;

/**
 *   {
    "type": "Sünnitoetus (KOV)",
    "amount": 1000,
    "status": "Makstud",
    "selected": true
  },
 **/