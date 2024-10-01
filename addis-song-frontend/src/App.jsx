import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SigninSignup from './pages/SigninSignup'
import MySongs from './pages/MySongs'
import AddSong from './pages/AddSong'
import UpdateSong from './pages/UpdateSong'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SigninSignup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/my-songs" element={<MySongs />} />
                <Route path="/add-song" element={<AddSong />} />
                <Route path="/update-song/:id" element={<UpdateSong />} />
            </Routes>
        </Router>
    )
}

export default App
