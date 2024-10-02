import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import Navbar from '../components/Navbar'
import SongList from '../components/SongsList'
import { getAllSongsFetch } from '../features/song/songSlice'

function Home() {
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.song)
    const name = localStorage.getItem('name')

    useEffect(() => {
        dispatch(getAllSongsFetch())
    }, [])

    return (
        <>
            <Navbar />

            <div>
                <h1>Welcome, {name}!</h1>
                {error}
                <h3>Songs</h3>
                <SongList />
            </div>
        </>
    )
}
export default Home
