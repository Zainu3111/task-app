import React from 'react'
import TaskCard from './TaskCard'

const Tasks = ({data}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center mx-[64px] pt-4">
        {/**<TaskCard data={Data[0]}/>
               */}
      { data && data.length ? 
        data.map((item, index) => <TaskCard key={index} data={item}/>)
        : null}
      </div>
    </div>
  )
}

export default Tasks