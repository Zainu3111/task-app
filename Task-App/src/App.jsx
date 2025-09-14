import React from 'react'
import { Routes, Route } from "react-router-dom";

import MainPage from './components/MainPage/MainPage'

import LoginAndSignUpPage from './components/SignUp/LoginAndSignUpPage';

const App = () => {
  const data = {
    task: "get ice cream",
    createdOn: "2025-09-07",
    status: "Available"
  }
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/signup' element={< LoginAndSignUpPage/>}/>
       
    </Routes>
  )
}

export default App
