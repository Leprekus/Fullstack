import { useState } from "react";
import { AppointmentForm  } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { useAppointmentInfoContext, useAppointmentInfoResetContext } from "../../Context/AppointmentInfoContext";
export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 //appointments = array
 const { contacts, appointments, setAppointments } = props

//  const [ appointmentInfo , setAppointmentInfo ] = useState({
//   Title: '',
//   Contact: '',
//   Date: '',
//   Time: ''
//  })
const appointmentInfo = useAppointmentInfoContext()
const resetAppointmentInfo = useAppointmentInfoResetContext() 

 const createAppointment = () => {
   return setAppointments( prevProps => [ appointmentInfo, ...prevProps] )
  }
  const resetForm = () => {
    resetAppointmentInfo({
      Title: '',
      Contact: '',
      Date: '',
      Time: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   // false = no dupes
   // true = dupes
   const isDuplicate = appointments.some(appointment => 
    appointment[ 'Date' ] === appointmentInfo[ 'Date' ]
    &&
    appointment[ 'Time' ] === appointmentInfo[ 'Time' ])
  isDuplicate ? alert('Conflicting Schedules') : createAppointment()
  return resetForm()
   
  };


  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <form onSubmit={handleSubmit}>
          {
            Object.entries(appointmentInfo).map(([key, value], index) => (
            <AppointmentForm
              type={key === 'Date' || key === 'Time' ? key : 'text' }
              name={key}
              placeholder={key}
              value={value}

              contacts={contacts}
              key={`appointmentForm_${index}`}
            />
          ))}
          <input type='submit' value='Submit'/>
        </form>

      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments}/>
      </section>
    </div>
  );
};
