// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Firebase from '../Firebase';
// import { Login } from './Components/LoginSignup/Login';
// import { Signup } from './Components/LoginSignup/Signup';

// const LoadingPage = () => {
//   const [isLoginAttempted, setIsLoginAttempted] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();
//   const firebase = new Firebase();

//   const handleLogin = async (email, password) => {
//     const user = await firebase.userSignInWithEmailAndPassword(email, password);
//     if (user) {
//       setIsAuthenticated(true);
//       navigate('/Home');
//     } else {
//       setIsLoginAttempted(true);
//       setIsLoading(false);
//     }
//   };

//   const handleSignup = async (email, password) => {
//     const result = await firebase.userSignUpWithEmailAndPassword(email, password);
//     if (result) {
//       navigate('/Login');
//     } else {
//       alert("Error signing up. Please try again.");
//     }
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <Login onLogin={handleLogin} />
//       ) : (
//         <Signup onSignup={handleSignup} />
//       )}
//     </div>
//   );
// };

// export default LoadingPage;
