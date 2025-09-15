import React from 'react'

const AddTask = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div>
        <input className="border-2 rounded px-2 bg-white focus:bg-gray-200" type="text" placeholder="Enter a Task" />
      </div>
      <div>
        <button className="ml-4 px-6  border-2 rounded bg-gray-300 
          hover:bg-gray-400 hover:cursor-pointer
          transition-all duration-300 ">Add</button>
      </div>
    </div>
  )
}

export default AddTask