import { useState } from "react";
import { BrowserRouter as Router ,Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentInfoProvider } from "./Context/AppointmentInfoContext";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

//   Keep track of the contacts and appointments data, each being an array of objects
// Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
// Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments
// Pass the array of contacts and the appropriate callback function as props to the ContactsPage component
// Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component


 const [ contacts, setContacts ] = useState([]);
 const [ appointments, setAppointments ] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
            contacts={contacts}
            setContacts={setContacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentInfoProvider>
            <AppointmentsPage
            contacts={contacts} 
            appointments={appointments}
            setAppointments={setAppointments}
            />
            </AppointmentInfoProvider>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
