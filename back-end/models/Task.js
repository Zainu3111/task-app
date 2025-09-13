const mongoose = require('mongoose')
const { string } = require('joi')

const TaskSchema = new mongoose.Schema({
  Task:{
    type:String,
    required:[true, 'Please Provide the Task'],
    maxlength:50
  },
  status:{
    type:String,
    default:'Available',
    enum:['Available', 'Done', 'Urgent', 'Assigned']
  },
  doneBy:{
    type:String,
    maxlength:100,
  }
}
  ,{ timestamps:true })

module.exports = mongoose.model('Task', TaskSchema)