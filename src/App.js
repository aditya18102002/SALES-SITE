import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./component";
import Login from "./component/login";
import Register from "./component/register";
import Addsale from "./component/addsale";
import Top5sale from "./component/top5sale";
import TODAYREVENUE from "./component/todayrevenue";
// here i import css where i use google fonts
import "./App.css";
import Dashbord from "./component/dashbord";
import Logout from "./component/logout";



function App() {
  // Main App component
  // State variables for authentication status and user data
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Function to handle user login
  const handleLogin = (userData) => {
    // Set isAuthenticated to true and update user data when the user successfully logs in
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Function to handle user logout
  const handleLogout = () => {
    // Set isAuthenticated to false and clear user data when the user logs out
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    // here i addded browserrouter as grantparent
    <BrowserRouter>
      <div className="App">

        {/* <Dashbord/> */}
        <Index isAuthenticated={isAuthenticated} user={user} />
        {/* here i added routes as parents */}
        <Routes>
          {/* here i added routes with specific path with there element here i use element router-dom greater than 6  */}
          {/* Route for the login page with the Login component and passing the handleLogin function as a prop */}
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Addsale" element={<Addsale />}></Route>
          <Route path="/Top5sale" element={<Top5sale />}></Route>
          <Route path="/Todayrevenue" element={<TODAYREVENUE />}></Route>
          <Route path='/Login' element={<Login onLogin={handleLogin} />} />
          {/* Route for the logout page with the Logout component and passing the handleLogout function as a prop */}
          <Route path='/Logout' element={<Logout onLogout={handleLogout} />} />

          {/* <Route path="/Index" element={ <Index/>}></Route>  */}
          <Route path="/Dashbord" element={<Dashbord />}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}
export default App;
