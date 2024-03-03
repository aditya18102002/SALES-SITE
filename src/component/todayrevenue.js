import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

function TODAYREVENUE() {
    // State variable to store the totalAmount
    const [totalAmount, setTotalAmount] = useState(0);

    // Function to fetch today's total sales amount from the backend API
    const fetchTotalAmount = async () => {
      try {
        // Make a GET request to the backend API endpoint for total sales
        const response = await axios.get('https://salesapp-backend.onrender.com/sales/totalSales');
        // Log the response data to the console for debugging
        console.log(response);
        // Update the state with the received total sales amount
        setTotalAmount(response.data);
      } catch (err) {
        // Log any errors that occur during the API request
        console.log(err);
      }
    };
  
    // useEffect hook to fetch totalAmount when the component mounts or totalAmount changes
    useEffect(() => {
      // Call the fetchTotalAmount function when the component mounts or totalAmount changes
      fetchTotalAmount();
    }, [totalAmount]);
  return (
    <div className="container">
    {/* Heading displaying today's total revenue */}
    <h2 className="text-center my-4">TOTAL REVENUE IS {totalAmount}</h2>
  </div>
  )
}

export default TODAYREVENUE