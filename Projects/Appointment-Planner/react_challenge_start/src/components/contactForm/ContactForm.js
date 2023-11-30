import React from "react";

export const ContactForm = ( props ) => {

  return (
    <input 
    type='text' 
    name={props.name}
    value={props.value} 
    placeholder={props.placeholder} 
    onChange={props.handleChange} 
    required
    />
    
  );
};
