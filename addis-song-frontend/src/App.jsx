import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SigninSignup from './pages/SigninSignup'
import MySongs from './pages/MySongs'
import AddSong from './pages/AddSong'
import { getAllSongsFetch } from './features/song/songSlice'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSongsFetch())
    }, [])
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/my-songs" element={<MySongs />} />
                <Route path="/add-song" element={<AddSong />} />
                <Route path="/" element={<SigninSignup />} />
            </Routes>
        </Router>
    )
}

export default App
