import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authReducer from './reducers/authReducer'
const initialState = {
    auth: authReducer
}

export const store = configureStore({
    reducer: initialState,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch 

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector