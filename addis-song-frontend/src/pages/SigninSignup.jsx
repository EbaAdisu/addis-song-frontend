/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupRequest, signinRequest } from '../features/user/userSlice'
import {
    Container,
    Form,
    Input,
    Button,
    ErrorMessage,
    Title,
    SwitchButton,
} from './SigninSignup.styles'

const SigninSignup = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isSignin, setIsSignin] = useState(true) // Toggle between Signin and Signup
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { status, error } = useSelector((state) => state.user) // Access status and error from Redux state

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isSignin) {
            dispatch(signinRequest({ name, password }))
        } else {
            dispatch(signupRequest({ name, password }))
        }
    }

    // Navigate based on status
    if (status === 'signedin' && isSignin) {
        navigate('/home')
    } else if (status === 'signedup' && !isSignin) {
        setIsSignin(true)
    }

    return (
        <Container>
            <Title>{isSignin ? 'Signin' : 'Signup'}</Title>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit">{isSignin ? 'Signin' : 'Signup'}</Button>
            </Form>
            <SwitchButton onClick={() => setIsSignin(!isSignin)}>
                {isSignin ? 'Switch to Signup' : 'Switch to Signin'}
            </SwitchButton>
        </Container>
    )
}

export default SigninSignup
