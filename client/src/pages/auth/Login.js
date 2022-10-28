import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/auth/login", {email, password})
            .then(res => {
                if(res.data.token) {
                    console.log('User Logged In.')
                    localStorage.setItem('token', res.data.token)
                    navigate('/')
                } else {
                    alert('Please Check Username and Password')
                }
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your Email'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter New Password'/>
            <input type="submit" value='Login'/>
        </form>
    </div>
  )
}
