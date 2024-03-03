import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Simulate an asynchronous operation (e.g., API request)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Clear the token from local storage
        localStorage.removeItem('token');

        // Call the onLogout callback to update state in the parent component
        onLogout();

        // Redirect to the login page
        navigate('/login');
      } catch (error) {
        console.error('Logout error:', error);
        // Handle any logout errors if needed

        // Redirect to the login page even if there's an error
        navigate('/login');
      } finally {
        // Set loading to false after performing the logout operations
        setLoading(false);
      }
    };

    // Call the function to perform logout
    performLogout();
  }, [onLogout, navigate])

  //   const navigate = useNavigate();

  //   const [token, setToken] = useState(localStorage.getItem('token'));

  // useEffect(()=>{
  // if(!token){
  //     navigate('/login');
  // }
  // },[token,navigate])


  //   const handleLogout = () => {
  //     localStorage.removeItem('token');
  //     navigate('/login');
  //   };

  return (
    <div className="spinner-container">
      {loading && <div className="spinner"></div>}
      <div className='ms-2'>Logout in progress please wait...</div>
    </div>
  );
};

export default Logout;