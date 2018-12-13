import React from 'react';


const Slider = ({onChange, name, checked}) => {
   return  <label><input type='checkbox' checked={checked} onChange={()=>onChange(name)}/><span></span><span></span></label>
};


export default  Slider;