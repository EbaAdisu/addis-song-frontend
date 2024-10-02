/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Song from '../components/Song'
import { SongContainer, AudioPlayer } from './SongList.styles'

const SongList = () => {
    const audioRef = useRef() // Create a new audioRef
    const { songs, currentSong } = useSelector((state) => state.song)

    const formattedSongs = songs.map((song) => {
        return <Song key={song._id} song={song} />
    })

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load() // Manually load the new source
        }
    }, [currentSong])

    return (
        <SongContainer>
            <div className="song-list">{formattedSongs}</div>
            <AudioPlayer>
                <audio ref={audioRef} controls>
                    <source src={currentSong} type="audio/mpeg" />
                </audio>
            </AudioPlayer>
        </SongContainer>
    )
}

export default SongList
