import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row h-16 justify-between items-center pl-16 pr-16  ">
      <div className="pl-10 text-center font-serif text-2xl">
        Task Manager App
      </div>
      <nav>
        <ul className='flex flex-row'>
          <li className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200"><a href="http://localhost:5173/me">Me</a></li>
          <li className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200"><a href="http://localhost:5173/tasks">Tasks</a></li>
          <li className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200" ><a href='http://localhost:5173/'>Sign Up</a></li>
        </ul>
      </nav>
      {/*}
      <div className="flex flex-row justify-between w-[346px] text-center ">
        <div className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200">Me</div>
        <div className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200">Tasks</div>
        <div className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200">Home</div>
      </div>*/}
    </div>
  )
}

export default Header