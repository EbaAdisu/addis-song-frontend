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
        getAllMySongsFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        getAllMySongsFetch: (state) => {
            state.loading = true
        },
        getAllMySongsSuccess: (state, action) => {
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
        updateSongFetch: (state, action) => {
            state.loading = true
        },
        updateSongSuccess: (state, action) => {
            state.loading = false
            state.error = null
            const index = state.songs.findIndex(
                (song) => song._id === action.payload._id
            )
            if (index !== -1) {
                state.songs[index] = action.payload
            }
        },
        updateSongFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const {
    getAllSongsFetch,
    getAllSongsSuccess,
    getAllSongsFailure,
    getAllMySongsFetch,
    getAllMySongsSuccess,
    getAllMySongsFailure,
    getSongFileFetch,
    getSongFileSuccess,
    getSongFileFailure,
    deleteSongFetch,
    deleteSongSuccess,
    deleteSongFailure,
    addSongFetch,
    addSongSuccess,
    addSongFailure,
    updateSongFetch,
    updateSongSuccess,
    updateSongFailure,
} = songSlice.actions

export default songSlice.reducer
