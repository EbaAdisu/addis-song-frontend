/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const SongCard = styled.div`
    display: flex;
    align-items: center; /* Center items vertically */
    padding: 10px;
    border-radius: 8px;
    background-color: white; /* Change background to white */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Soft shadow */
    margin-bottom: 15px;
    color: black; /* Change text color for better contrast */
`

export const SongInfo = styled.div`
    flex-grow: 1; /* Allow this section to grow */
    cursor: pointer; /* Indicate that this section is clickable */
    margin-left: 10px; /* Add space between play button and song info */
`

export const SongTitle = styled.h3`
    font-size: 16px;
    margin: 0; /* Remove default margin */
`

export const SongArtist = styled.p`
    font-size: 14px;
    margin: 0; /* Remove default margin */
    color: #555; /* Darker color for the artist name */
`

export const SongActions = styled.div`
    display: flex;
    align-items: center; /* Center items vertically */
`

export const PlayButton = styled.button`
    background: none; /* Remove background */
    border: none; /* Remove border */
    cursor: pointer; /* Change cursor to pointer */
    color: #1db954; /* Spotify green */
    font-size: 24px; /* Larger font size for the play button */

    &:hover {
        color: #1aa34a; /* Slightly darker green on hover */
    }
`

export const ActionButtons = styled.div`
    display: flex;
    flex-direction: column; /* Stack buttons vertically */
    align-items: flex-end; /* Align to the right */
`

export const ActionButton = styled.button`
    // blue button
    background-color: #007bff; /* Spotify green */
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 5px; /* Space between buttons */
    width: 100%; /* Make buttons the same width */

    &:hover {
        background-color: #1aa34a; /* Darker green on hover */
    }
`
