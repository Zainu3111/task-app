const Task = require('../models/Task')
const {StatusCodes} = require('http-status-codes')

const createTask = async (req,res) => {
  try {
    const data = req.body;
    if (!data || Object.keys(data).length === 0){
      throw new Error('Data Does Not Exist')
    }
    const task = await Task.create(data)
    res.status(StatusCodes.CREATED).json({ msg:"Created A Task", task:task }) 
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg:"Could Not Create the Task" })
  }
}

const getAllTasks = async (req,res) => {
  try {
    const tasks = await Task.find({})
    res.status(StatusCodes.OK).json({ msg:"success", tasks:tasks })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg:"Could not find the  tasks" })
  }
}

const updateTaskStatus = async (req,res) => {
  try {
    const {
      body:{ status },
      params:{ id }
    } = req

    if(!status){
      throw new Error('Status Cannot be Empty')
    }
    const task = await Task.findByIdAndUpdate(
      id, req.body, {new:true, runValidators:true})

    if (!task){
      throw new Error('Could not Find task')
    }
    res.status(StatusCodes.OK).json({ msg:"task updated", task:task })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg:"Could not find the task" })
  }
}



module.exports = {
  createTask,
  getAllTasks,
  updateTaskStatus
}