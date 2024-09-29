import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { uri, token } from '../config'
import { getSongFileFetch } from '../features/song/songSlice'

function Song({ song }) {
    const dispatch = useDispatch()
    const audio = useSelector((state) => state.song.currentSongFile)

    const deleteSong = async (id) => {
        console.log('deleting song', id)
        const res = await fetch(`${uri}/song/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
            },
        })
        if (!res.ok) {
            console.error('Failed to delete song')
        } else {
            // refresh
            window.location.reload()
        }
    }

    const handlePlayClick = () => {
        if (audio) {
            audio.play() // Play if already fetched
        } else {
            console.log('fetching song', song._id)
            dispatch(getSongFileFetch(song._id)) // Fetch and play
        }
    }

    return (
        <div className="song">
            <h2 onClick={handlePlayClick} style={{ cursor: 'pointer' }}>
                {song.title}
            </h2>
            <p>{song.artist}</p>
            {/* Play/Pause button */}

            <button onClick={handlePlayClick}>
                {audio ? 'Play Again' : 'Play'}
            </button>
            {/* Delete button */}
            <button onClick={() => deleteSong(song._id)}>Delete</button>
        </div>
    )
}

export default Song
