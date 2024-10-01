import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSongFetch } from '../features/song/songSlice'

function AddSong() {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('artist', artist)
        formData.append('description', description)
        formData.append('song', file)

        dispatch(addSongFetch(formData))
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Add New Song</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Artist:</label>
                    <input
                        type="text"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Music File:</label>
                    <input
                        type="file"
                        accept="audio/*"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit">Add Song</button>
            </form>
        </div>
    )
}

export default AddSong
