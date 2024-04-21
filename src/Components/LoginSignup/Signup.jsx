import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Not needed for this version
import './Loginsignup.css';

import email from '../Assests/email.png';
import password from '../Assests/password.png';

export const Signup = () => {  // Rename component to Login

  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Perform login logic here
    // For now, just navigate to '/Navbar'
    navigate('/Login');
  };

  return (
    <div className='container'>
      <div className="header">
        <div className='text'>Sign Up</div>
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
        <div className='input'>
        <img src={password} alt="" />
        <input type="password" placeholder="Password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />      
        </div>
      </div>
      {/* Remove forgot password section */}
      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>Sign Up</div>
      </div>
    </div>
  )
}

export default Signup;
