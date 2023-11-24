import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

const Signup = () => {
  return (
    <div className='container1'>
    <div className='container'>
        <form action="#" className='full-box'>
            <div id='h3'>
        <h3>Sign up for Dahtoos Task-Manager</h3>
        <p>Create a free account or <Link to={'/login'}>login</Link> </p>
        </div>
        <label className='LABELS' htmlFor="Email">Email</label>
        <input className='INPUTS' type="text" name='Email' required/>
        <label className='LABELS' htmlFor="Username">Username</label>
        <input className='INPUTS' type="text" name='Username' required/>
        <label className='LABELS' htmlFor="Password">Password</label>
        <input className='INPUTS' type="password" name='password' required/>
        </form>
        <p>By creating an account, you agree to our <Link to={'/terms'}>terms</Link></p>
    </div>
    </div>
  )
}

export default Signup