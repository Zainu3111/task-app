const mongoose = require('mongoose')

const TeamsSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Please provide a team name'],
    maxlength:100
  },
  leader:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:[true,'Please provide a team leader']
  },
  members:[{
    type:mongoose.Types.ObjectId,
    ref:'User',
  }]
})

module.exports = mongoose.model('Teams', TeamsSchema)