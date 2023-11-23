import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-container-box'>
    <form action="#" className='FORM'>
      <h1>LOGIN</h1>
      <label htmlFor="Username">Username:</label>
      <input type="text" id='username' name='username' required />
      <label htmlFor="Password">Password:</label>
        <input type="text" id='password' name='password' required />
        <button type='submit' className='Btn'>login</button>
    </form>
    <p className='Paragraph'>Don't have an account yet? <Link to={'/register'}>Signup</Link></p>
    </div>
    </div>
  )
}

export default Login