// import logo from './logo.svg';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { Login } from './Components/LoginSignup/Login';
//import { Navbar } from './Components/Navbar/Navbar';


function App() {
  
  

  return (
    // <div>
    //  <Loginsignup/>
    // </div>
    
    <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Navbar" element={<Navbar />} /> */}
{/*       
      <Route path="/Login" element={<Loginsignup />} />  
      <Route path="/sign Up" element={<Loginsignup />} />
          
       */}
    </Routes>
    
    
  );
  
}

export default App;
