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
            state.status = 'signedup'
        },
        signupFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload.error
        },
        signinRequest: (state) => {
            state.status = 'loading'
        },
        signinSuccess: (state, action) => {
            state.status = 'signedin'
            state.name = action.payload.name
            state.token = action.payload.token
            localStorage.setItem('name', action.payload.name)
            localStorage.setItem('token', action.payload.token)
        },
        signinFailure: (state, action) => {
            state.status = 'failed'
            state.error = action.payload.error
        },
        setUserFetch: (state, action) => {},
        setUserSuccess: (state) => {
            state.name = localStorage.getItem('name')
            state.token = localStorage.getItem('token')
        },
        removeUser: (state) => {
            state.name = null
            state.token = null
            localStorage.removeItem('name')
            localStorage.removeItem('token')
            state.status = 'loggedout'
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
