import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupRequest, signinRequest } from '../features/user/userSlice'

const SigninSignup = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isSignin, setIsSignin] = useState(true) // Toggle between Signin and signup
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
        <div style={{ textAlign: 'center' }}>
            <h2>{isSignin ? 'Signin' : 'Signup'}</h2>
            {error && <p>{error}</p>}
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
