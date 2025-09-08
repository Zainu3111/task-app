import React from 'react'

import MainPage from './components/MainPage'

const App = () => {
  const data = {
    task: "get ice cream",
    createdOn: "2025-09-07",
    status: "Available"
  }
  return (
    <div className="">
      <MainPage />
    </div>
  )
}

export default App
