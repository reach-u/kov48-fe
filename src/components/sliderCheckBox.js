import React from 'react';


const Slider = ({onChange, name, checked}) => {
  return <label>
    <label className="container">
      <input checked={checked} onChange={() => onChange(name)}
             type="checkbox" />
      <span className="checkmark"/>
    </label>
  </label>
};


export default Slider;