import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'ego',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjI5ZThkOTNhZTI5MDBkZGVhNDRkYiIsIm5hbWUiOiJlZ28iLCJpYXQiOjE3MjcxODU1ODMsImV4cCI6MTcyOTc3NzU4M30.172uXgyq_Ae25N1NXobhs3OaTehL4hjmVH4G39VSslo',
}

const userSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.token = action.payload.token
        },
        removeUser: (state) => {
            state.name = null
            state.token = null
        },
    },
})
export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
