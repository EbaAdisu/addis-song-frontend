import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    token: null,
    status: 'idle', // add this to track request status
    error: null, // add this to handle any errors
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signupRequest: (state, action) => {
            state.status = 'loading'
        },
        signupSuccess: (state) => {
            state.status = 'succeeded'
        },
        signupFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload.error
        },
        signinRequest: (state) => {
            state.status = 'loading'
        },
        signinSuccess: (state, action) => {
            state.status = 'succeeded'
            state.name = action.payload.name
            state.token = action.payload.token
        },
        signinFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload.error
        },
        setUserFetch: (state, action) => {},
        setUserSuccess: (state, action) => {
            state.name = action.payload.name
            state.token = action.payload.token
        },
        removeUser: (state) => {
            state.name = null
            state.token = null
        },
    },
})

export const {
    signupRequest,
    signupSuccess,
    signupFailure,
    signinRequest,
    signinSuccess,
    signinFailure,
    setUserFetch,
    setUserSuccess,
    removeUser,
} = userSlice.actions

export default userSlice.reducer
