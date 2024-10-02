import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import SongList from '../components/SongsList'
import { getAllSongsFetch } from '../features/song/songSlice'

// Import the styled components
import {
    HomeContainer,
    WelcomeMessage,
    SongsTitle,
    ErrorMessage,
} from './Home.styles'

function Home() {
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.song)
    const name = localStorage.getItem('name')

    useEffect(() => {
        dispatch(getAllSongsFetch())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <HomeContainer>
                <WelcomeMessage>Welcome, {name}!</WelcomeMessage>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <SongsTitle>Songs</SongsTitle>
                <SongList />
            </HomeContainer>
        </>
    )
}

export default Home
