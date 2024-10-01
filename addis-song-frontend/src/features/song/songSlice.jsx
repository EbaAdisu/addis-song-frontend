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
        addSongFetch: (state, action) => {
            state.loading = true
        },
        addSongSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.songs = [...state.songs, action.payload]
        },
        addSongFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        getAllSongsFetch: (state) => {
            state.loading = true
        },
        getAllSongsSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.songs = action.payload
        },
        getAllSongsFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        getSongFileFetch: (state) => {
            state.loading = true
        },
        getSongFileSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.currentSong = action.payload
        },
        getSongFileFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        deleteSongFetch: (state, action) => {
            state.loading = true
        },
        deleteSongSuccess: (state, action) => {
            state.loading = false
            state.error = null
            state.songs = state.songs.filter(
                (song) => song._id !== action.payload
            )
        },
        deleteSongFailure: (state, action) => {
            state.loading = false
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
    deleteSongFetch,
    deleteSongSuccess,
    deleteSongFailure,
    addSongFetch,
    addSongSuccess,
    addSongFailure,
} = songSlice.actions

export default songSlice.reducer
