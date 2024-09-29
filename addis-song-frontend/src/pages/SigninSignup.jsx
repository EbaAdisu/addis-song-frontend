import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uri } from '../config'

const SigninSignup = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true) // Toggle between Signin and signup
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const endpoint = isLogin ? 'signin' : 'signup'

        try {
            const response = await fetch(`${uri}/auth/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            })

            const data = await response.json()
            console.log(data)

            if (response.ok) {
                isLogin
                    ? navigate('/home', { state: { name } })
                    : navigate('/signup')
            } else {
                alert(`Error: ${data.message}`)
            }
        } catch (error) {
            alert('An error occurred. Please try again.')
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{isLogin ? 'Signin' : 'Signup'}</h2>
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
                <button type="submit">{isLogin ? 'Signin' : 'Signup'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Signup' : 'Switch to Signin'}
            </button>
        </div>
    )
}

export default SigninSignup
