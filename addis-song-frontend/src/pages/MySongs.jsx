import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import Navbar from '../components/Navbar'
import SongList from '../components/SongsList'
import { getAllMySongsFetch } from '../features/song/songSlice'
import { useNavigate } from 'react-router-dom'

function MySongs() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.song)
    const name = localStorage.getItem('name')

    useEffect(() => {
        dispatch(getAllMySongsFetch())
    }, [])

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

                <SongList />
            </div>
        </>
    )
}
export default MySongs
