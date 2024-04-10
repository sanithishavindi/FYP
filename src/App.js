// import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Loginsignup } from './Components/LoginSignup/Loginsignup';
// import { Navbar } from './Components/Navbar/Navbar';

function App() {
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  // const handleLogin = () => {
  //   // Perform login authentication here, e.g., API call, etc.
  //   // For demonstration purposes, just setting isLoggedIn to true.
  //   setIsLoggedIn(true);
  // }

  return (
    // <div>
    //  <Loginsignup/>
    // </div>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Loginsignup />} />
      <Route path="/Login" element={<Loginsignup />} />  
      <Route path="/sign Up" element={<Loginsignup />} />
          {/* {isLoggedIn ? <Redirect to="/Navbar" /> : <Loginsignup onLogin={handleLogin} />}
           */}
        {/* </Route>
        <Route path="/Navbar"> */}
          {/* Render dashboard only if logged in */}
          {/* {isLoggedIn ? <Navbar/> : <Redirect to="/Navbar" />} */}
        {/* </Route> */}
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
