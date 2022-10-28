import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate()
    const [name, setName] = useState([])

    // async function populateCode() {
    //     const data = await fetch('api/quote', {
    //         headers: {
    //             'x-access-token': localStorage.getItem('token')
    //         }
    //     })
    // }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const myDecodedToken = decodeToken(token);
            if(!myDecodedToken) {
                localStorage.removeItem('token')
                navigate("/login")
            } else {
                // populateCode()
            }
        } else {
            navigate("/login")
        } // eslint-disable-next-line
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name)
        axios.post("http://localhost:8001/form/submit", name)
            .then(res => navigate("/resume"))
            .catch(err => console.log(err))
    }

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigate('/')
    }

  return (
    <div>
        <button onClick={handleLogout}>Log Out</button>
        <h1>Fill your details</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' name='name' onChange={(e) => setName(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}