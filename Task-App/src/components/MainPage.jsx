import React from 'react'
import Data from '../data/cardData'
import TaskCard from './TaskCard'
import Header from './Header'

const MainPage = () => {
  return (

    <div className="bg-[rgb(248,247,247)] min-h-screen min-w-1/4">
      <div>
        <Header />
      </div>

      <div className="flex flex-wrap justify-center mx-[64px] pt-4">
        {/**<TaskCard data={Data[0]}/>
               */}
      { Data && Data.length ? 
        Data.map((item, index) => <TaskCard key={index} data={item}/>)
        : null}
   
      </div>


    </div>
  )
}


export default MainPage