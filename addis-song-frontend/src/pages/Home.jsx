import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import Song from '../components/Song'
import Navbar from '../components/Navbar'
import { getAllSongsFetch } from '../features/song/songSlice'

function Home() {
    const dispatch = useDispatch()
    const { songs, currentSong, error } = useSelector((state) => state.song)
    const name = localStorage.getItem('name')
    const audioRef = useRef()

    useEffect(() => {
        dispatch(getAllSongsFetch())
    }, [])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load() // Manually load the new source
        }
    }, [currentSong])

    const formattedSongs = (songs) => {
        return songs.map((song) => {
            return <Song key={song._id} song={song} />
        })
    }

    return (
        <>
            <Navbar />

            <div>
                <h1>Welcome, {name}!</h1>
                {error}
                <h3>Songs</h3>
                <audio ref={audioRef} controls>
                    {' '}
                    {/* Add the ref to the audio element */}
                    <source src={currentSong} type="audio/mpeg" />
                </audio>
                {formattedSongs(songs)}
            </div>
        </>
    )
}
export default Home
