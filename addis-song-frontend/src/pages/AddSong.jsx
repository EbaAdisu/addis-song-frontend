// src/components/AddSong.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uri, token } from '../config'

const AddSong = () => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('artist', artist)
        formData.append('description', description)
        if (file) {
            formData.append('song', file)
        }

        try {
            const response = await fetch(`${uri}/song`, {
                method: 'POST',
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: formData,
            })

            if (response.ok) {
                navigate('/my-songs') // Redirect to MySongs page
            } else {
                alert('Failed to add song')
            }
        } catch (error) {
            alert('An error occurred. Please try again.')
        }
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
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
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
