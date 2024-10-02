/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-color: white; /* White background */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
    max-width: 400px; /* Limit the width */
    margin: 0 auto; /* Center the form */
`

export const Title = styled.h2`
    margin-bottom: 20px;
`

export const FormField = styled.div`
    margin-bottom: 15px; /* Space between fields */
    width: 100%; /* Full width */
`

export const Label = styled.label`
    margin-bottom: 5px;
    display: block; /* Label takes up full width */
    text-align: left; /* Align text to the left */
`

export const Input = styled.input`
    width: 100%; /* Full width */
    padding: 10px; /* Padding for inputs */
    border: 1px solid #ccc; /* Light border */
    border-radius: 5px; /* Rounded corners */
    font-size: 16px; /* Font size */
`

export const Button = styled.button`
    background-color: #007bff; /* Button color */
    color: white; /* Text color */
    border: none; /* No border */
    padding: 10px 15px; /* Padding */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor */
    transition: background-color 0.3s ease; /* Transition effect */

    &:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }
`
