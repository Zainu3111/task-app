import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import Header from './Header'
import AddTask from './AddTask'

const MainPage = () => {

  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:3000/tasks/')
      if (!res.ok){
        throw new Error('Could Not Find Data')
      }
      const items = await res.json()
      setData(items.tasks)
      console.log(items.tasks[0]['createdAt'])
      
    } catch (error) {
      console.log(error)
    }
  }

  const [data, setData] = useState([])
  useEffect(() => {
    fetchTasks()
  }, [])


  return (

    <div className="bg-[rgb(248,247,247)] min-h-screen min-w-1/4">
      <div>
        <Header />
      </div>
        <AddTask/>
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


export default MainPage