import React, { useState } from 'react'
import LoginPage from './LoginPage'
import SignUp from './SignUp'
import Header from '../MainPage/Header'

const LoginAndSignUpPage = () => {
  const [showLogIn, setShowLogIn] = useState(false)
  return (
    <div className='h-screen flex flex-col bg-gradient-to-b from-blue-300 to-white'>
      <div >
        <Header/>
      </div>
      <div className='h-full flex flex-col justify-center items-center'>
        <div>
          {showLogIn ? <LoginPage/> : <SignUp/>}
        </div>
        <div >
          <button className='text-2xl bg-blue-500 text-white border-2 py-2 px-4 rounded-2xl
            hover:bg-blue-700 duration-300 hover:cursor-pointer
          ' onClick={() => setShowLogIn(!showLogIn)}>
            {showLogIn ? 'Sign Up':'Log In' }
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginAndSignUpPage