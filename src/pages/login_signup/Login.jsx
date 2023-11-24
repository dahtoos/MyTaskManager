import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-container-box'>
    <form action="#" className='FORM'>
      <h3 id='h3'>Sign in</h3>
      <label className='LABEL' htmlFor="Username">Username:</label>
      <input className='INPUT' type="text" id='username' name='username' required />
      <label className='LABEL' htmlFor="Password">Password:</label>
        <input className='INPUT' type="password" id='password' name='password' required />
        <button type='submit' className='Btn'>login</button>
    </form>
    <p className='Paragraph'>Don't have an account yet? <Link to={'/register'}>Signup</Link></p>
    </div>
    </div>
  )
}

export default Login