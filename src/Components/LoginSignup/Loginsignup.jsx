//import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';
import './Loginsignup.css'

import user from '../Assests/person.png'
import email from '../Assests/email.png'
import password from '../Assests/password.png'
import { useState } from 'react';

export const Loginsignup = () => {

 // const navigate = useNavigate();

  const [action,setAction] = useState("Sign Up");

  // // const handleLogin = () => {
   
  // //   navigate('/Navbar');
  // };


  return (
    <div className='container'>
      <div className="header">
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className='input'>
          <img src={user} alt="" />
          <input type="text" placeholder="Name"/>
        </div>}
       
        <div className='input'>
          <img src={email} alt="" />
          <input type="email" placeholder="Email"/>
        </div>
        <div className='input'>
          <img src={password} alt="" />
          <input type="password" placeholder="Password"/>
        </div> 
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}} >Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Login</div>
        {/* <div className={action==="Sign Up"?"submit gray":"submit"} onClick={handleLogin}>Login</div> */}
      </div>
    </div>
  )
}
export default Loginsignup;
