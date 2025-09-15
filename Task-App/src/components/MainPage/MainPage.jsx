import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import Header from './Header'
import AddTask from './AddTask'
import Tasks from './Tasks'

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

    <div className="bg-gradient-to-b from-blue-300 to-white min-h-screen">
      <div>
        <Header />
      </div>
      <div>
        <AddTask/>
        <Tasks data={data}/>
      </div>

    </div>
  )
}


export default MainPage