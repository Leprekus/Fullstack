# Appointment Planner
## Description 
Create an app that manages contacts and appointments using functional React components. The app consists of a an add contacts page and add appointments page. 

## Managing State
The App Component contains two arrays of objects. One for contacts and one for the appointments.

The Appointments Page has a Appointments Context. This context is used in order to pass the current appoinmtent information accross components. Namely the Contact picker. Whose job is to render the contacts list, and update state on change when choosing a contact. `

### Contacts Page

The contacts page is in charge of updating state for the array of contacts in the App component. 
It also checks for duplicates in case that the phone or email fields are the same as an existing contact. 
Finally it adds the contact to under the "Contacts" section

### Appointments Page

The appointments page is in charge of updating state for the array of contacts in the App component. 
The Appointments page checks for conflicting schedules in case that the time and date are exactly the same as an appointment in the appointments array.
Finally the appointment is added udner the "Appointments" section. 

