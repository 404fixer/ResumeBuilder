import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/auth/register", {name, email, password})
            .then(res => navigate('/login'))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name' />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter New Password' />
                <input type="submit" value='Register' />
            </form>
        </div>
    )
}
