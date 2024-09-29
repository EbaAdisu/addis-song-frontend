import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Song from '../components/Song'
import Navbar from '../components/Navbar'
import { uri, token } from '../config'

function MySongs() {
    const [songs, setSongs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${uri}/song`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json()
            console.log(data.songs)
            setSongs(data.songs)
        }
        fetchData()
    }, [])

    const goToAddSongPage = () => {
        navigate('/add-song')
    }

    return (
        <>
            <Navbar />
            <div>
                <button onClick={goToAddSongPage}>Add New Song</button>
                <h1>My Songs</h1>
                {songs.map((song) => {
                    return <Song key={song.id} song={song} />
                })}
            </div>
        </>
    )
}

export default MySongs
