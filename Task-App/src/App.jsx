import React from 'react'
import { Routes, Route } from "react-router-dom";

import MainPage from './components/MainPage'

const App = () => {
  const data = {
    task: "get ice cream",
    createdOn: "2025-09-07",
    status: "Available"
  }
  return (
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/signup' element={< />}/>
       
    </Routes>
  )
}

export default App
