const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { required } = require('joi')

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, 'Please provide a name'],
    minlength:3,
    maxlength:50,
  },
  email:{
    type:String,
    required:[true, 'Please provide a email'],
    match:[
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'
    ],
    unique:true,
  },
  password:{
    type:String,
    required:[true, 'Please provide a password'],
    minlength:6
  }
})

UserSchema.pre('save', async function(){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.getname = function(){
  return this.name
}

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password)
  return isMatch
}

UserSchema.methods.createJWT = function(){
  return jwt.sign(
    { userID:this._id, name:this.name },
    process.env.JWT_SECRET,
    { expiresIn:process.env.JWT_LIFETIME }
  )
}

module.exports = mongoose.model('User', UserSchema)