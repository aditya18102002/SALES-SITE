import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {
  const [user, setUser] = useState({ email: "", password: "" })
  const navigate= useNavigate();
  const subminHandler = async(e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:5000/auth/login', user);
      if (resp.status === 200) {
alert(resp.data.massage);

navigate('/Dashbord');
      } 
    } catch (error) {
      alert(error.response.data.massage);
            
    }


  }
  return (
    // here i added bootstrap form with button and it is also responsive
    <div>
      <div className='sale'>
        <h1 className='text-center'>Login</h1>
        <form>
        <div className="mb-3">
          {/* here i added input for email and type is email */}
          <label for="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          {/* here i added one more input for password with type of password */}
          <label for="exampleFormControlTextarea1" className="form-label">password</label>
          <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="form-control" id="exampleFormControlInput2" placeholder="password" />
        </div>
        {/* and this id login button type is submit of this button */}
        <button type="submit" onClick={subminHandler} className='btn btn-primary form-control'>Login</button>
</form>
      </div>
    </div>

  )
}

export default Login