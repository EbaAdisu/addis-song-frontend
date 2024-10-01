import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import Song from '../components/Song'
import Navbar from '../components/Navbar'
import { getAllMySongsFetch } from '../features/song/songSlice'
import { useNavigate } from 'react-router-dom'

function MySongs() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { songs, currentSong, error } = useSelector((state) => state.song)
    const name = localStorage.getItem('name')
    // console.log(error)
    const audioRef = useRef()

    useEffect(() => {
        dispatch(getAllMySongsFetch())
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

    const goToAddSongPage = () => {
        navigate('/add-song')
    }

    return (
        <>
            <Navbar />

            <div>
                <h1>Welcome, {name}!</h1>
                {error}
                <button onClick={goToAddSongPage}>Add New Song</button>
                <h3>My Songs</h3>

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
export default MySongs
