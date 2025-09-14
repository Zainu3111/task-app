import React from 'react'
import { Routes, Route } from "react-router-dom";

import MainPage from './components/MainPage/MainPage'
import SignUp from './components/SignUp/SignUp';

const App = () => {
  const data = {
    task: "get ice cream",
    createdOn: "2025-09-07",
    status: "Available"
  }
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/signup' element={< SignUp/>}/>
       
    </Routes>
  )
}

export default App
