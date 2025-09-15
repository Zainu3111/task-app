import { useState } from "react"


const TaskCard = ({data}) => {
  const colors = {
    Available: "text-green-500",
    Assigned: "text-blue-500",
    Urgent: "text-red-600",
    Done: "text-gray-500",
  }
  const {status} = data
  const color = colors[status]
  const [hover, setHover] = useState(false)

  return (
    <div className="
    flex flex-col justify-around w-[228px] h-[136px] border rounded-[12px] p-4 bg-blue-300 mx-2 my-1
    [box-shadow:4px_4px_10px_rgba(0,0,0,0.25)]
    hover:bg-blue-400 hover:[box-shadow:4px_4px_10px_rgba(0,0,0,0.5)] 
    hover:cursor-pointer 
    transform hover:scale-105 transition-all duration-400
    " onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <div className="flex flex-row justify-between text-gray-900 text-[16px] font-medium">
        <div>
          Task:
        </div>
        <div className="text-center">
          {data.Task}
        </div>
      </div>
      <div className="flex flex-row justify-between text-gray-700 text-[16px] font-medium">
        <div>
          Created On:
        </div>
        <div>
          {data['createdAt'].split('T')[0]}
        </div>
      </div>
      <div className={`flex flex-row justify-center ${color} text-[16px] font-medium`}>
        <div>{hover ?

          data.status === "Available" ?
          <button className="bg-green-500 text-white font-medium px-2 rounded-2xl
          hover:cursor-pointer
          ">More Information</button>

          : data.status === "Assigned" ? 
          <div className="flex flex-row justify-between">
            <div>To:</div>
            <div>{data.name}</div>
          </div>

          :data.status === "Urgent" ?
          <button className="bg-red-600 text-white font-medium px-2 rounded-2xl
          hover:cursor-pointer
          ">More Information</button>

          :data.status === "Done" ?
          <div className="flex flex-row justify-between">

            <div>By:</div>
            <div>{data.name}</div>
          </div>
          : null
          : data.status}</div>
      </div>
    </div>
  )
}

export default TaskCard