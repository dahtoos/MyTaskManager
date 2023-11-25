import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login_Signup/Login'
import Signup from './Pages/Login_Signup/Signup'
import Terms from './Pages/Login_Signup/Terms'
import Tasks from './pages/login_signup/Tasks'


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
