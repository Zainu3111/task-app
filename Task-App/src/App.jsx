import React from 'react'
import { Routes, Route } from "react-router-dom";

import MainPage from './components/MainPage/MainPage'

import LoginAndSignUpPage from './components/SignUp/LoginAndSignUpPage';
import Me from './components/Me/Me';

const App = () => {
  const data = {
    task: "get ice cream",
    createdOn: "2025-09-07",
    status: "Available"
  }
  return (
    <Routes>
      <Route path='/' element={< LoginAndSignUpPage/>}/>
      <Route path='/tasks' element={<MainPage />}/>
      <Route path='/me' element={<Me/>}/>
       
    </Routes>
  )
}

export default App
