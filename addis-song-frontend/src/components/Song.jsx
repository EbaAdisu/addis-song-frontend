/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getSongFileFetch, deleteSongFetch } from '../features/song/songSlice'
import {
    SongCard,
    SongInfo,
    SongTitle,
    SongArtist,
    SongActions,
    PlayButton,
    ActionButtons,
    ActionButton,
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
            <SongActions>
                <PlayButton onClick={() => playSong(song._id)}>▶️</PlayButton>
            </SongActions>
            <SongInfo>
                <SongTitle onClick={() => playSong(song._id)}>
                    {song.title}
                </SongTitle>
                <SongArtist>{song.artist}</SongArtist>
            </SongInfo>
            <ActionButtons>
                <ActionButton onClick={() => deleteSong(song._id)}>
                    Delete
                </ActionButton>
                <Link to={`/update-song/${song._id}`}>
                    <ActionButton>Update</ActionButton>
                </Link>
            </ActionButtons>
        </SongCard>
    )
}

export default Song
