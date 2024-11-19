import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HomeIcon from '@mui/icons-material/Home';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SummarizeIcon from '@mui/icons-material/Summarize';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-nav'> 
        <ul>
          <li><Link to="/Home"><HomeIcon/>Dashboard</Link></li>
          <li><Link to="/Doctor"><LocalHospitalIcon/>Doctor</Link></li>
          <li><Link to="/Resources"><MedicalServicesIcon/>Resouces</Link></li>
          <li><Link to="/Specialization"><ManageAccountsIcon/>Health Issue</Link></li>
          <li><Link to="/Req"><RequestQuoteIcon/>Request</Link></li>
          <li><Link to="/Report"><SummarizeIcon/>Report</Link></li>
          {/* <li><Link to="/Doctor">Settings</Link></li> */}
        </ul>
        </div>
        {/* <li key={key} onClick={()=>{window.location.pathname = val.Link}}></li> */}
    </div>
  )
}

export default Navbar;
