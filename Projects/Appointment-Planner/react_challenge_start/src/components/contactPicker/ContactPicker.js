import React, { useEffect, useRef } from "react";
import { useAppointmentInfoUpdateContext } from "../../Context/AppointmentInfoContext";

export const ContactPicker = ({ contacts }) => {
  
  const updateAppointmentInfo = useAppointmentInfoUpdateContext()
  const selectRef = useRef(null)  
  const optionRef = useRef(null)
  const currentOption = optionRef.current

  useEffect(() => {
    const selectRefObject = {
      target: {
        name:'Contact',
        value: selectRef.current?.value
      }
    }
    selectRef.current?.addEventListener('onSelect', updateAppointmentInfo(selectRefObject))
  
    return () => selectRef.current?.removeEventListener('onSelect', updateAppointmentInfo)
  }, [selectRef.current?.value])
  

  return (
    <select 
      name='Contact' 
      ref={selectRef}
      >
    {
      contacts.map((contact, index) => (
      <option 
      key={`${contact.Name}_${index}`} 
      value={contact.Name}
      name='Contact'
      >{contact.Name}</option>
      ))
    }
    </select>
  );
};
