import React from 'react'
import { Link } from 'react-router-dom';
import email from '../Assests/email.png'

function Navbar() {
  return (
    <div>
      <div className='navbar'> 
        <ul>
          <li><Link to="/"><img src = {email} alt='Email'/>Signup</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;
