/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    background-color: #f8f9fa; /* Light background color */
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`

export const Title = styled.h2`
    margin-bottom: 20px;
    color: #333;
`

export const ErrorMessage = styled.p`
    color: #ff4d4f; /* Red color for error messages */
    margin-bottom: 15px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px; /* Limit the form width */
    margin-bottom: 20px;

    div {
        margin-bottom: 15px; /* Consistent spacing between fields */
    }

    label {
        margin-bottom: 5px;
        font-weight: bold;
        color: #555;
    }
`

export const Input = styled.input`
    width: 100%; /* Make input fields take full width */
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
        border-color: #007bff; /* Change border color on focus */
        outline: none;
    }
`

export const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }
`

export const SwitchButton = styled.button`
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;

    &:hover {
        text-decoration: underline;
    }
`
