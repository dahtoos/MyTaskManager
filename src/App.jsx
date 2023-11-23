import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login_Signup/Login'
import Signup from './Pages/Login_Signup/Signup'



function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
