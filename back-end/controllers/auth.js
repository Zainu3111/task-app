const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req,res) => {
  const user = await User.create({...req.body})
  const token = user.createJWT()
  
  res
    .status(StatusCodes.CREATED)
    .json({user:{ name:user.getName() }, token})
}

const login = async (req,res) => {
  const { email, password, } = req.body
  if( !password || ! email ){
    throw new Error('Bad Request')
  }

  const user = await User.findOne({ email })
  if(!user){
    throw new Error('Bad Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
}

module.exports = {
  register,
}