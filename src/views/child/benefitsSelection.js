import React from 'react';
import Slider from "../../components/sliderCheckBox";
import {sortAlphabetically} from "../../utils/sorting";

const BenefitsSelection = ({benefits, onChange}) => {
  const sortedBenefits = benefits.sort((a, b) => sortAlphabetically(a.type, b.type));
  return (
    <div>
      {sortedBenefits.map((benefit, ix) =>
        <div key={ix}>
          <span>{benefit.type}</span>
          {benefit.status === "Esitamata" ? <Slider name={benefit} onChange={onChange} checked={benefit.selected}/> :
            <label>{benefit.status}</label>
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