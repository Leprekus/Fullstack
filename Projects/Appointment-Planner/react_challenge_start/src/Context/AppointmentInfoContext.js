import { useState, useContext, createContext } from "react"

const AppointmentInfoContext = createContext()
const AppointmentInfoUpdateContext = createContext()
const AppointmentInfoResetContext = createContext()

export const useAppointmentInfoContext = () => useContext(AppointmentInfoContext)
export const useAppointmentInfoUpdateContext = () => useContext(AppointmentInfoUpdateContext)
export const useAppointmentInfoResetContext = () => useContext(AppointmentInfoResetContext)

export const AppointmentInfoProvider = ({ children }) => {
    const [ appointmentInfo , setAppointmentInfo ] = useState ({
        Title: '',
        Contact: '',
        Date: '',
        Time: ''
       })
    
    const resetAppointmentInfo = () => {
        setAppointmentInfo({
        Title: '',
        Contact: '',
        Date: '',
        Time: ''
        })
    }
    
    const handleSetAppointment = ({ target }) => {
        setAppointmentInfo( prevState => ({
            ...prevState,
            [ target.name ]: target.value
          }))
    }

    return (
        <AppointmentInfoContext.Provider value={appointmentInfo}>
            <AppointmentInfoUpdateContext.Provider value={handleSetAppointment}>
                <AppointmentInfoResetContext.Provider value={resetAppointmentInfo}>
                { children }
                </AppointmentInfoResetContext.Provider>
            </AppointmentInfoUpdateContext.Provider>
        </AppointmentInfoContext.Provider>
    )

}    