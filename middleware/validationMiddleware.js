import { body, param, validationResult } from 'express-validator'
import { GLUCOSE_UNIT, MEAL_TAG } from '../utils/constants.js'
import { BadRequestError, NotFoundError, UnauthorizedError } from '../errors/customErrors.js'
import Glucose from '../models/GlucoseModel.js'
import User from '../models/UserModel.js';
import mongoose from 'mongoose'


const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)
        if (!errorMessages[0].startsWith('no value')){
          throw new NotFoundError(errorMessages)
        }
        throw new BadRequestError(errorMessages)
      }
      next()
    },
  ]
}

export const validateGlucoseInput = withValidationErrors([
    body('glucose').notEmpty().withMessage('glucose is required'),
    body('unit').isIn(Object.values(GLUCOSE_UNIT)).withMessage('invalid unit type'),
    body('mealTag').isIn(Object.values(MEAL_TAG)).withMessage('invalid meal type'),
])


export const validateIdParam = withValidationErrors([
    param('id').custom(async (value, {req}) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value)
    if (!isValidId) throw new BadRequestError('invalid MongoDB id')
    const glucoseValue = await Glucose.findById(value)
    if (!glucoseValue) throw new NotFoundError(`no glucose value with id ${value}`)
    const isAdmin = req.user.role === 'admin'
    const isOwner = req.user.userId === glucoseValue.createdBy.toString()
    if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
  })
])

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('lastName').notEmpty().withMessage('last name is required'),
])

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new Error('email already exists');
      }
    }),
  body('lastName').notEmpty().withMessage('last name is required'),
]);