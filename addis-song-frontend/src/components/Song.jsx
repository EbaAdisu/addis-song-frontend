import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSongFileFetch, deleteSongFetch } from '../features/song/songSlice'

function Song({ song }) {
    const dispatch = useDispatch()

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
            <Link to={`/update-song/${song._id}`}>Update</Link>{' '}
            {/* Add this line */}
        </div>
    )
}

export default Song
