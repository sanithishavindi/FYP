import React from 'react'
import { Link } from 'react-router-dom';
import email from '../Assests/email.png'
import './Navbar.css';
// import HomeIcon from '@mui/icons-material/Home';

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
        {/* <li key={key} onClick={()=>{window.location.pathname = val.Link}}></li> */}
    </div>
  )
}

export default Navbar;
