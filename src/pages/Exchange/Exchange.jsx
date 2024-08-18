import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './exchange.css'
import axios from 'axios'

const Exchange = () => {
    const [user, setUser] = useState()
        const navigate = useNavigate()
        const lname = localStorage.getItem('Access')

        const getUser = async () => {
            await axios
                .get(`https://afruzkombat-server.onrender.com/users`)
                .then((res) => {
                  setUser(res.data.filter((el) => el?.name == lname).map((el) => el));
                  console.log(res.data.filter((el) => el?.name == lname).map((el) => el));
                })
                .catch((err) => {
                    alert(err);
                })
        }

        useEffect(() => {
            if(!localStorage.getItem('Access')){
                navigate('/register')
            }else{
                navigate('/airdrop')
                getUser()
            }
        }, [])
  return (
    <>
        <div className="container">
        <div className="header">
            <h1>AfruzNiga Kombat</h1>
            {user?.map((el) => {
                return(
                    <b key={user?.id}>{el?.name} (CEO)</b>
                )
            })}
        </div>
        <main>
            <section>
                <h1>Airdrop</h1>
                <img src="https://beincrypto.com/wp-content/uploads/2024/06/hamster-coin.png.webp" alt="" />
                <h3>Airdrop скин сюда  100$ <br /> я умножу на твой баланс на 2X)</h3>
                <div className="card">
                    <b>2204120114184399</b>
                </div>
            </section>
            <footer>
            <button onClick={() => {
                    navigate('/')
                }} className='footer-item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz39hZylhWGJLBD4_gwqyAoaaryixjuTv3w&s" alt="" />
                    <b>Биржа</b>
                </button>
                <button onClick={() => {
                    navigate('/airdrop')
                }} className='footer-item active-btn'>
                    <img src="https://beincrypto.com/wp-content/uploads/2024/06/hamster-coin.png.webp" alt="" />
                    <b>Airdrop</b>
                </button>
            </footer>
        </main>
    </div>
    </>
  )
}

export default Exchange