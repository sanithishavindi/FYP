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
import Earace from './Pages/Special/Earace';
import Poisoning from './Pages/Special/Poisoning';
import Traumatic from './Pages/Special/Traumatic';
import Sob from './Pages/Special/Sob';
import Req from './Pages/Req';
import Report from './Pages/Report';
import Dislocation from './Pages/Special/Dislocation';
import Fracture from './Pages/Special/Fracture';
import SnakeBite from './Pages/Special/SnakeBite';
import Burns from './Pages/Special/Burns';
import Availability from './Pages/Availability';
import Nearest from './Pages/Nearest';
import ResourceSummary from './Pages/ResourceSummary';
  
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
            <Route path="/Earace" element={<Earace/>}/>
            <Route path="/Sob" element={<Sob/>}/>
            <Route path="/Poisoning" element={<Poisoning/>}/>
            <Route path="/Traumatic" element={<Traumatic/>}/>
            <Route path="/Dislocation" element={<Dislocation/>}/>
            <Route path="/Fracture" element={<Fracture/>}/>
            <Route path="/SnakeBite" element={<SnakeBite/>}/>
            <Route path="/Burns" element={<Burns/>}/>
            <Route path="/Availability" element={<Availability/>}/>
            <Route path="/Nearest" element={<Nearest/>}/>
            <Route path="/ResourceSummary" element={<ResourceSummary/>}/>
        
        
          </Routes>

          
          
    </div>   
    
    
  );
  
}

export default App;
