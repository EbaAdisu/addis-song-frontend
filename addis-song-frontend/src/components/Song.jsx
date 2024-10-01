import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSongFileFetch, deleteSongFetch } from '../features/song/songSlice'

function Song({ song }) {
    const dispatch = useDispatch()
    const currentSong = useSelector((state) => state.song.currentSong)

    const deleteSong = (id) => {
        dispatch(deleteSongFetch(id))
    }

    const playSong = (id) => {
        dispatch(getSongFileFetch(id))
    }

    return (
        <div>
            <h2 onClick={() => playSong(song._id)}>{song.title}</h2>
            <button onClick={() => deleteSong(song._id)}>Delete</button>
        </div>
    )
}

export default Song
