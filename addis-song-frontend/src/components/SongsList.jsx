import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Song from '../components/Song'

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
    console.log(currentSong)

    return (
        <>
            <audio ref={audioRef} controls>
                <source src={currentSong} type="audio/mpeg" />
            </audio>
            {formattedSongs}
        </>
    )
}

export default SongList
