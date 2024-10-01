import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SigninSignup from './pages/SigninSignup'
import MySongs from './pages/MySongs'
import AddSong from './pages/AddSong'

function App() {
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
