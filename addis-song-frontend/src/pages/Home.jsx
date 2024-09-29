import { useSelector } from 'react-redux'

import Song from '../components/Song'
import Navbar from '../components/Navbar'
import { useEffect, useRef } from 'react'

function Home() {
    const { songs, currentSong } = useSelector((state) => state.song)
    const { name } = useSelector((state) => state.user)
    const audioRef = useRef()
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load() // Manually load the new source
        }
    }, [currentSong])

    console.log('current song', currentSong)

    return (
        <>
            <Navbar />

            <div>
                <h1>Welcome, {name}!</h1>
                Songs
                <audio ref={audioRef} controls>
                    {' '}
                    {/* Add the ref to the audio element */}
                    <source src={currentSong} type="audio/mpeg" />
                </audio>
                {songs.map((song) => {
                    return <Song key={song.id} song={song} />
                })}
            </div>
        </>
    )
}
export default Home
