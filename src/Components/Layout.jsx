import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Doctor from '../Pages/Doctors';
import Home from '../Pages/Home';
import Resources from '../Pages/Resources';
import Specialization from '../Pages/Specialization';

const Layout = () => {
  
  return(
    <Router>
      <div>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Doctor" element={<Doctor/>}/>
            <Route path="/Resources" element={<Resources/>}/>
            <Route path="/Specialization" element={<Specialization/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default Layout
