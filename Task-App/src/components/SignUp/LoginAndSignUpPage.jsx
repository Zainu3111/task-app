import React, { useState } from 'react'
import LoginPage from './LoginPage'
import SignUp from './SignUp'

const LoginAndSignUpPage = () => {
  const [showLogIn, setShowLogIn] = useState(false)
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <button className='text-2xl bg-blue-500 text-white border-2 py-2 px-4 rounded-2xl
          hover:bg-blue-700 duration-300 hover:cursor-pointer
        ' onClick={() => setShowLogIn(!showLogIn)}>
          {showLogIn ? 'Sign Up':'Log In' }
        </button>
      <div>
        {showLogIn ? <LoginPage/> : <SignUp/>}
      </div>
    </div>
  )
}

export default LoginAndSignUpPage