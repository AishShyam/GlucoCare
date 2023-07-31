import { StatusCodes } from 'http-status-codes'
import User from '../models/UserModel.js'
import { hashPassword, comparePassword } from '../utils/password.js'
import { UnauthenticatedError } from '../errors/customErrors.js'
import { createJWT } from '../utils/token.js'


export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0
    req.body.role = isFirstAccount ? 'admin' : 'user'
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ msg: "User created" })
}

 export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new UnauthenticatedError('invalid credentials')  
    const isPasswordCorrect = await comparePassword(
      req.body.password,
      user.password
    )  
    if (!isPasswordCorrect) throw new UnauthenticatedError('invalid credentials')
    const token = createJWT({ userId: user._id, role: user.role })
    const oneDay = 1000 * 60 * 60 * 24
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === 'production',
      })
    res.status(StatusCodes.CREATED).json({ msg: 'user logged in' })
}

export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' })
}