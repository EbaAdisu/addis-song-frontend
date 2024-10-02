import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import Navbar from '../components/Navbar'
import SongList from '../components/SongsList'
import { getAllMySongsFetch } from '../features/song/songSlice'
import { useNavigate } from 'react-router-dom'
import {
    ErrorMessage,
    HomeContainer,
    SongsTitle,
    WelcomeMessage,
} from './MySongs.styles'

function MySongs() {
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.song)
    const name = localStorage.getItem('name')

    useEffect(() => {
        dispatch(getAllMySongsFetch())
    }, [])

    return (
        <>
            <Navbar />

            <HomeContainer>
                <WelcomeMessage>Welcome, {name}!</WelcomeMessage>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <SongsTitle>My Songs</SongsTitle>
                <SongList />
            </HomeContainer>
        </>
    )
}
export default MySongs
