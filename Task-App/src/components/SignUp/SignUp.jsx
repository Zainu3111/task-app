import React, { useState } from 'react'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)
  const [isFocusedName, setIsFocusedName] = useState(false)

  return (
    <div className='flex justify-center items-center'>
      <div className='
        border-2 rounded-2xl h-[290px] w-[400px]
        bg-blue-300
        text-2xl p-2
        flex flex-col justify-center
      '>
        <div className='flex flex-col items-center'>
          <input className='w-3/4 border-2 rounded bg-amber-50 text-center p-0.5
            focus:bg-gray-200 focus:border-4
            ' type="text" placeholder={isFocusedName ? '':'Name'} onFocus={()=>setIsFocusedName(true)} onBlur={() => setIsFocusedName(false)} />
          <input className='w-3/4 border-2 rounded bg-amber-50 text-center p-0.5 mt-2
            focus:bg-gray-200 focus:border-4
            ' type="text" placeholder={isFocusedEmail ? '':'email'} onFocus={()=>setIsFocusedEmail(true)} onBlur={() => setIsFocusedEmail(false)} />
          <input className='w-3/4 border-2 rounded mt-2 bg-amber-50 text-center p-0.5
           focus:bg-gray-200 focus:border-4
           ' type={showPassword ? 'text' : 'password'} placeholder={isFocusedPassword ? '':'password'} onFocus={()=>setIsFocusedPassword(true)} onBlur={() => setIsFocusedPassword(false)} />
        </div>
        <div className='flex flex-row items-center self-end pr-2'>
          <input className='p-0.5' type="checkbox" onChange={(e) => setShowPassword(e.target.checked)}/>
          <p className='text-[15px] text-gray-400 pl-2'>see password</p>
        </div>
        <div className='flex justify-end'>
          <button className='w-1/2 rounded p-1 text-white mt-2 justify-self-end 
           bg-blue-500
            hover:cursor-pointer hover:bg-blue-700 duration-300
          '>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp