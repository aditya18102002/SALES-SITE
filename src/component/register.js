import React, { useState } from 'react'
import axios from 'axios'


function Register() {
  const [user, setUser] = useState({ fname: "", lname: "", email: "", password: "" })
  const subminHandler = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:5000/auth/register', user);
      if (resp.status === 201) {
        alert('registration successfully');
        setUser({ fname: '',lname: '',email: '',password: ''});
      } else {
        alert('error in registration')
      }
    } catch (error) {
      console.log(error)
      alert('error in registration try again');
    }
  }
  return (
    <div>
      {/* here is heading of form */}
      <div className='sale'>
        <h1 className='text-center'>REGISTERATION FORM</h1>
        <div className="mb-3">
          {/* here is input for first name whare user write first name */}
          <label for="exampleFormControlInput1" class="form-label">First-Name</label>
          <input type="text" value={user.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} class="form-control" id="exampleFormControlInput1" placeholder="First-Name" />
        </div>

        <div class="mb-3">
          {/* here is input for last name whare user write last name */}
          <label for="exampleFormControlTextarea1" class="form-label">Last-Name</label>
          <input type='text' value={user.lname} onChange={(e) => setUser({ ...user, lname: e.target.value })} class="form-control" id="exampleFormControlinput2" placeholder='Last-Name' />

        </div>

        <div class="mb-3">
          {/* here is input for email whare user write email */}
          <label for="exampleFormControlTextarea1" class="form-label">Email</label>
          <input type='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} class="form-control" id="exampleFormControlinput2" placeholder='Email' />
        </div>

        <div class="mb-3">
          {/* here is input for password whare user write password */}
          <label for="exampleFormControlTextarea1" class="form-label">PASSWORD</label>
          <input type='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} class="form-control" id="exampleFormControlinput2" placeholder='password' />
        </div>
        {/* here is button for register type is submit */}
        <button type='submit' onClick={subminHandler} className='btn btn-primary form-control'>REGISTER</button>
      </div>
    </div>
  )
}

export default Register