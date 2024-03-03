import React, { useEffect } from 'react'
// here import link for routing from router-dom
import { Link, } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import React { useEffect } from 'react'



function Index({ isAuthenticated, user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token') == undefined)
      navigate('/login')
  }, [])
  return (

    // Navigation bar with dark background
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Container for the navbar content */}
      <div className="container-fluid">
        {/* Link to the home page with the brand name */}
        <Link className="navbar-brand" to="/">SALES APP</Link>
        {/* Button for toggling the responsive navbar on small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navbar items list */}
          <ul className="navbar-nav">
            {/* Conditional rendering based on authentication status */}
            {isAuthenticated ? (
              // If authenticated, show these navigation items
              <>
                <li className="nav-item">
                  {/* Link to the addSales page */}
                  <Link className="nav-link" to="/Addsale">ADD SALES</Link>
                </li>
                <li className="nav-item">
                  {/* Link to the topFiveSales page */}
                  <Link className="nav-link" to="/Top5sale">TOP 5 SALES</Link>
                </li>
                <li className="nav-item">
                  {/* Link to the todaysSales page */}
                  <Link className="nav-link" to="/TODAYREVENUE">TODAY'S TOTAL REVENUE</Link>
                </li>
                <li className="nav-item">
                  {user && (
                    <span className="nav-link">Welcome, {user.fname}</span>
                  )}
                </li>
                <li className="nav-item">
                  {/* Link to the logout page with user email as the title */}
                  <Link className="nav-link" to="/Logout" title={user?.email || 'Logout'}>LOGOUT</Link>
                </li>
              </>
            ) : (
              // If not authenticated, show these navigation items
              <>
                <li className="nav-item">
                  {/* Link to the login page */}
                  <Link className="nav-link" to="/Login">LOGIN</Link>
                </li>
                <li className="nav-item">
                  {/* Link to the register page */}
                  <Link className="nav-link" to="/Register">REGISTER</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>



    // // here i added bootstrap navbar
    // <div>
    //   <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    //     <div class="container-fluid">
    //       {/* navbar name or logo*/}
    //       <p class="navbar-brand">PATIDAR SALE'S APP</p>
    //       {/* here i added toggler for navbar collapse in small size devices */}
    //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul class="navbar-nav">
    //           {/* here i added navlinks using router of different components */}
    //           {/* <li class="nav-item">
    //             <Link to='/Addsale' className='nav-link'>ADD SALE</Link>
    //           </li>

    //           <li class="nav-item">
    //             <Link to='/Top5sale' className='nav-link'>TOP 5 SALE</Link>
    //           </li>

    //           <li class="nav-item">
    //             <Link to='/TODAYREVENUE' className='nav-link'>TODAY'S TOTAL REVENUE</Link>
    //           </li> */}

    //           <li class="nav-item">
    //             <Link to="/Login" className='nav-link'>LOGIN</Link>
    //           </li>

    //           <li class="nav-item">
    //             <Link to="/Register" className='nav-link'>REGISTER</Link>
    //           </li>

    //           {/* <li class="nav-item">
    //             <Link to='/Logout' className='nav-link'>LOGOUT</Link>
    //           </li> */}

    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

  )
}

export default Index