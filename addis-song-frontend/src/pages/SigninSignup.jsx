import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupRequest, signinRequest } from '../features/user/userSlice'

const SigninSignup = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isSignin, setIsSignin] = useState(true) // Toggle between Signin and signup
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isSignin) {
            dispatch(signinRequest({ name, password }))
        } else {
            dispatch(signupRequest({ name, password }))
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{isSignin ? 'Signin' : 'Signup'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isSignin ? 'Signin' : 'Signup'}</button>
            </form>
            <button onClick={() => setIsSignin(!isSignin)}>
                {isSignin ? 'Switch to Signup' : 'Switch to Signin'}
            </button>
        </div>
    )
}

export default SigninSignup
