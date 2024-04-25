import React from 'react'
import { Link } from 'react-router-dom';
import email from '../Assests/email.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-nav'> 
        <ul>
          <li><Link to="/"><img src = {email} alt='Email'/>Dashboard</Link></li>
          <li><Link to="/Doctor">Doctor</Link></li>
          <li><Link to="/Resources">Resouces</Link></li>
          <li><Link to="/Specialization">Specialization</Link></li>
          {/* <li><Link to="/Doctor">Settings</Link></li> */}
        </ul>
        </div>
    </div>
  )
}

export default Navbar;
