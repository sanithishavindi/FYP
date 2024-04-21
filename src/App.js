// import logo from './logo.svg';
import { Routes, Route, Link,Router } from 'react-router-dom';
import './App.css';
import { Login } from './Components/LoginSignup/Login';
import { Signup } from './Components/LoginSignup/Signup';
//import { Navbar } from './Components/Navbar/Navbar';


function App() {
  
  

  return (
    <div className='App'>

      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Signup</Link></li>
              <li><Link to="/Login">Login</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>

          </Routes>
        </div>

      </Router>

    </div>     
  );
  
}

export default App;
