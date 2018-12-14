import React from 'react';
import Slider from "../../components/sliderCheckBox";
import {sortAlphabetically} from "../../utils/sorting";

const BenefitsSelection = ({benefits, onChange}) => {
  const sortedBenefits = benefits.sort((a, b) => sortAlphabetically(a.type, b.type));
  return (
    <div>
      {sortedBenefits.map((benefit, ix) =>
        <div key={ix} className="form-row">
          <div className="form-group col text-align-right">{benefit.type}</div>
          <div className="form-group  col text-align-center">{benefit.amount+ " EUR"}</div>

          {benefit.status === "Esitamata" ? <div               className="form-group col text-align-left"
              ><Slider
                  name={benefit} onChange={onChange} checked={benefit.selected}/> </div>:
            <div className="form-group col text-align-left">{benefit.status}</div>
          }
        </div>
      )}

    </div>
  );
};

export default BenefitsSelection;

