// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Components/LoginSignup/Login';
// import { Signup } from './Components/LoginSignup/Signup';
import Home from './Pages/Home'
import Doctor from './Pages/Doctors';
import Resources from './Pages/Resources';
import Specialization from './Pages/Specialization';
import Layout from './Components/Layout';
import DengueFever from './Pages/Special/DengueFever';
import CardiacArrest from './Pages/Special/CardiacArrest';
import ChestPain from './Pages/Special/ChestPain';
import AllergicReaction from './Pages/Special/AllergicReaction';
import Req from './Pages/Req';
import Report from './Pages/Report';
  
// import  Navbar  from './Components/Navbar/Navbar';
// import {  BrowserRouter as  Switch } from 'react-router-dom';



function App() {
  
  return (
    <div className='App'>
          {/* <Navbar/> */}
          <Routes>
            {/* <Route path="/" element={<Signup/>}/> */}
            <Route path="/" element={<Login/>}/>
            
            <Route element={<Layout/>}>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Doctor" element={<Doctor/>}/>
            <Route path="/Resources" element={<Resources/>}/>
            <Route path="/Specialization" element={<Specialization/>}/>
            <Route path="/Req" element={<Req/>}/>
            <Route path="/Report" element={<Report/>}/>
            
            </Route>

            <Route path="/DengueFever" element={<DengueFever/>}/>
            <Route path="/CardiacArrest" element={<CardiacArrest/>}/>
            <Route path="/ChestPain" element={<ChestPain/>}/>
            <Route path="/AllergicReaction" element={<AllergicReaction/>}/>
        
          </Routes>

          
          
    </div>   
    
    
  );
  
}

export default App;
