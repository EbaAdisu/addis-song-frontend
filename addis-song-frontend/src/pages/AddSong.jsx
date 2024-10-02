/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSongFetch } from '../features/song/songSlice'
import {
    FormContainer,
    FormField,
    Label,
    Input,
    Button,
    Title,
} from './AddSong.styles' // Import styled components
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function AddSong() {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { status, loading } = useSelector((state) => state.song)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('artist', artist)
        formData.append('description', description)
        formData.append('song', file)

        dispatch(addSongFetch(formData))
    }
    useEffect(() => {
        if (!loading && status === 'added') {
            navigate(-1) // Navigates to the previous page
        }
    }, [status, loading, navigate])

    return (
        <>
            <Navbar />
            <FormContainer>
                <Title>Add New Song</Title>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label>Title:</Label>
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>Artist:</Label>
                        <Input
                            type="text"
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label>Description:</Label>
                        <Input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label>Music File:</Label>
                        <Input
                            type="file"
                            accept="audio/*"
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                        />
                    </FormField>
                    <Button type="submit">Add Song</Button>
                </form>
            </FormContainer>
        </>
    )
}

export default AddSong
