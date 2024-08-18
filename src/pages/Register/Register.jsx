import React from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const navigate = useNavigate()
    const createUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://afruzkombat-server.onrender.com/users', {
                name: e.target[0].value,
                password: e.target[1].value,
                wallet: 10000,
                accepted: true
            }).then((res) => {
                localStorage.setItem('Access', res.data.name)
                localStorage.setItem('Access-wallet', res.data.wallet)
                navigate('/')
            })
            
        } catch (error) {
            console.log(error);  
        }
    }
  return (
    <>
        <div className="container">
        <div className="header">
            <h1 className='bron'>AfruzNiga Kombat</h1>
            <b>Anonymous (CEO)</b>
        </div>
        <main className='some'>
            <form onSubmit={createUser}>
                <h1>Registration</h1>
                <input type="text" placeholder='Name' onChange={(e) => e.target.value} required/>
                <input type="password" placeholder='Password' onChange={(e) => e.target.value} required/>
                <button type='submit'>Sign up</button>
                <b>Have account? <Link to={'/login'}>Sign in</Link></b>
            </form>
        </main>
    </div>
    </>
  )
}

export default Register