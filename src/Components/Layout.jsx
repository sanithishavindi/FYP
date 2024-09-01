import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { Menubar } from './Navbar/Menubar';


const Layout = () => {
  
  return(
    <div>
      <Menubar/>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Layout
