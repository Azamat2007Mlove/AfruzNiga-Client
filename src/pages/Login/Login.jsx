import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
        const [user, setUser] = useState()
        const navigate = useNavigate()


        const getUser = async () => {
            await axios
                .get(`https://afruzkombat-server.onrender.com/users`)
                .then((res) => {
                  setUser(res.data);                  
                })
                .catch((err) => {
                    alert(err);
                })
        }
        function loginH(e) {
          if (user?.find((el) => el?.name == e.target[0].value) && user?.find((el) => el?.password == e.target[1].value)) {
            localStorage.setItem('Access', user?.filter((el) => el?.name == e.target[0].value)?.map((els) => els.name))
            localStorage.setItem('Access-wallet', Number(user?.filter((el) => el?.name == e.target[0].value)?.map((els) => els.wallet)))

            navigate('/')
          }else{
            alert('Login incorect(')
          }
          
        }
        useEffect(() => {
          getUser()
        }, [])
        

  return (
    <>
        <div className="container">
        <div className="header">
            <h1 className='bron'>AfruzNiga Kombat</h1>
            <b>Anonymous (CEO)</b>
        </div>
        <main className='some'>
            <form onSubmit={loginH}>
                <h1>Login</h1>
                <input type="text" placeholder='Name' onChange={(e) => e.target.value} required/>
                <input type="password" placeholder='Password' onChange={(e) => e.target.value} required/>
                <button type='submit'>Sign in</button>
                <b>Have not account? <Link to={'/register'}>Sign up</Link></b>
            </form>
        </main>
    </div>
    </>
  )
}

export default Register