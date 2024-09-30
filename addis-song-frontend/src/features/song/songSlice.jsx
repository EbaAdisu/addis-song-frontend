import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    songs: [],
    currentSong: null,
    loading: false,
    error: null,
}

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        getAllSongsFetch: (state) => {},
        getAllSongsSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.songs = action.payload
        },
        getAllSongsFailure: (state, action) => {
            state.error = action.payload
        },
        getSongFileFetch: (state, action) => state,
        getSongFileSuccess: (state, action) => {
            console.log('success', action.payload)
            state.currentSong = action.payload
        },
        getSongFileFailure: (state, action) => {
            state.error = action.payload
        },
    },
})

export const {
    getAllSongsFetch,
    getAllSongsSuccess,
    getAllSongsFailure,
    getSongFileFetch,
    getSongFileSuccess,
    getSongFileFailure,
} = songSlice.actions
export default songSlice.reducer
