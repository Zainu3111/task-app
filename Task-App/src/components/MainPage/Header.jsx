import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-row h-16 justify-between items-center pl-16 pr-16 bg-gray-300 ">
      <div className="pl-10 text-center font-serif text-2xl">
        Task Manager App
      </div>
      <div className="flex flex-row justify-between w-[346px] text-center ">
        <div className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200">Me</div>
        <div className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200">Tasks</div>
        <div className="min-w-[102px]  hover:cursor-pointer hover:font-medium transition duration-200">Home</div>
      </div>
    </div>
  )
}

export default Header