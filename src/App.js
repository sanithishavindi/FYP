// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Components/LoginSignup/Login';
import { Signup } from './Components/LoginSignup/Signup';
import  Navbar  from './Components/Navbar/Navbar';
// import {  BrowserRouter as  Switch } from 'react-router-dom';


function App() {
  
  

  return (
    <div className='App'>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
          </Routes>
    </div>     
  );
  
}

export default App;
