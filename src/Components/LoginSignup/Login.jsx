import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Not needed for this version
import './Loginsignup.css';

import email from '../Assests/email.png';
import password from '../Assests/password.png';

export const Login = () => {  // Rename component to Login

  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // For now, just navigate to '/Navbar'
    navigate('/Navbar');
  };

  return (
    <div className='container'>
      <div className="header">
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        <div className='input'>
          <img src={email} alt="" />
          <input type="email" placeholder="Email" value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)} />
        </div>
        <div className='input'>
          <img src={password} alt="" />
          <input type="password" placeholder="Password" value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)} />
        </div>
      </div>
      {/* Remove forgot password section */}
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
    </div>
  )
}

export default Login;
