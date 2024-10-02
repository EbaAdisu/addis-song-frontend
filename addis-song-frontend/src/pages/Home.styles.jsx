/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

// Centered styled component for h1 (Welcome message)
export const WelcomeMessage = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #007bff;
    text-align: center;
    margin-top: 20px; /* Add space between navbar and the welcome message */
`

// Centered styled component for h3 (Songs title)
export const SongsTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
    text-align: center;
`

// Optional: Centered styled component for error message
export const ErrorMessage = styled.p`
    color: red;
    margin-top: 10px;
    text-align: center;
`

// Adjust HomeContainer width and centering behavior
export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width to prevent narrow container */
    min-height: calc(
        100vh - 60px
    ); /* Adjust height to be full viewport minus navbar height */
    padding: 20px; /* Add some padding for better layout */
    background-color: #f5f5f5;
`
