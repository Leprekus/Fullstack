import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut } from '../actions/authActions';

interface AuthState {
    user: string | null;
}

const initialState: AuthState = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        signIn,
        signOut
    }
})

export default authSlice.reducer
