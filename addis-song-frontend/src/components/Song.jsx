/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getSongFileFetch, deleteSongFetch } from '../features/song/songSlice'
import {
    SongCard,
    SongTitle,
    SongArtist,
    SongDescription,
    SongActions,
} from './Song.styles'

function Song({ song }) {
    const dispatch = useDispatch()

    const deleteSong = (id) => {
        dispatch(deleteSongFetch(id))
    }

    const playSong = (id) => {
        dispatch(getSongFileFetch(id))
    }

    return (
        <SongCard>
            <SongTitle onClick={() => playSong(song._id)}>
                {song.title}
            </SongTitle>
            <SongArtist>{song.artist}</SongArtist>
            <SongDescription>{song.description}</SongDescription>
            <SongActions>
                <button onClick={() => deleteSong(song._id)}>Delete</button>
                <Link to={`/update-song/${song._id}`}>Update</Link>
            </SongActions>
        </SongCard>
    )
}

export default Song
