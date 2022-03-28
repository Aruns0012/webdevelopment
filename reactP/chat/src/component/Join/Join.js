import React, { useState } from 'react'
import './join.css';
import logo from '../../images/Naruto Sign-30-60-90px/logo01.png';
import { Link } from 'react-router-dom';


let user;

const sendUser = () => {
  user = document.getElementById('JoinInput').value;
  // document.getElementById('joinInput').value = '';
}

const Join = () => {

  const [name, setname] = useState("");

  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
        <img src={logo} alt="logo" />
        <h1>Chatter</h1>
        <input onChange={(e) =>setname(e.target.value)} type="text" placeholder='Enter your name' id="JoinInput" />
        <Link onClick={(event) => !name ? event.preventDefault():null}  to="/chat">

          <button onClick={sendUser} className='Joinbtn'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Join
export { user }