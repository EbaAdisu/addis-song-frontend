/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const LogoutButton = styled.button`
    background-color: #007bff; /* Primary blue */
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #3399ff; /* Lighter blue on hover */
    }

    &:focus {
        outline: none;
    }

    &:active {
        background-color: #0056b3; /* Darker blue on click */
    }
`
