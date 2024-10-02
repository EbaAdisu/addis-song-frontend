/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const SongCard = styled.div`
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

export const SongTitle = styled.h2`
    font-size: 18px;
    cursor: pointer;
    color: #007bff;
    margin-bottom: 5px;

    &:hover {
        text-decoration: underline;
    }
`

export const SongArtist = styled.h3`
    font-size: 16px;
    color: #555;
    margin-bottom: 8px;
`

export const SongDescription = styled.p`
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
`

export const SongActions = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`
