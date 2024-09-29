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
        getSongFileFetch: (state, action) => state,
        getSongFileSuccess: (state, action) => {
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
    getSongFileFetch,
    getSongFileSuccess,
    getSongFileFailure,
} = songSlice.actions
export default songSlice.reducer
