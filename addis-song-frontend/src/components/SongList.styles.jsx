/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const SongContainer = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    height: 100vh; /* Full viewport height */
    width: 100%;
    // max width to prevent overflow
    max-width: 800px;
    padding: 20px;
    background-color: #f8f9fa;

    .song-list {
        overflow-y: auto;
        margin-bottom: 20px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background-color: white;
        max-height: calc(100vh - 100px); /* To make room for the player */
    }
`

export const AudioPlayer = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-top: 1px solid #ddd;

    audio {
        width: 100%;
    }
`
