/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { updateSongFetch } from '../features/song/songSlice'
import {
    FormContainer,
    FormField,
    Label,
    Input,
    Button,
    Title,
} from './UpdateSong.styles' // Import styled components
import Navbar from '../components/Navbar'

function UpdateSong() {
    const { id } = useParams()
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Get the success state from Redux
    const { status, loading } = useSelector((state) => state.song)

    // Navigate back to previous page or home upon successful update
    useEffect(() => {
        if (!loading && status === 'updated') {
            navigate(-1) // Navigates to the previous page
        }
    }, [status, loading, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateSongFetch({ id, title, artist, description }))
    }

    return (
        <>
            <Navbar />
            <FormContainer>
                <Title>Update Song</Title>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label>Title:</Label>
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label>Artist:</Label>
                        <Input
                            type="text"
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
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
                    <Button type="submit">Update Song</Button>
                </form>
            </FormContainer>
        </>
    )
}

export default UpdateSong
