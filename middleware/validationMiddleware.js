import { body, param, validationResult } from 'express-validator'
import { EXERCISE_TYPE, GLUCOSE_UNIT, LAB_TEST_TYPE, LAB_UNITS, MEAL_TAG, MEAL_TAG_FOOD, MEDICINE_UNIT } from '../utils/constants.js'
import { BadRequestError, NotFoundError, UnauthorizedError } from '../errors/customErrors.js'
import Glucose from '../models/GlucoseModel.js'
import User from '../models/UserModel.js';
import Medicine from '../models/MedicineModel.js'
import Exercise from '../models/ExerciseModel.js'
import Food from '../models/FoodModel.js'
import Notes from '../models/NotesModel.js'
import Community from '../models/CommunityModel.js'
import Lab from '../models/LabModel.js'
import Emergency from '../models/EmergencyModel.js'

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

export const validateMedicineInput = withValidationErrors([
  body('medicineName').notEmpty().withMessage('medicine name is required'),
  body('medicineUnit').isIn(Object.values(MEDICINE_UNIT)).withMessage('invalid unit type'),
])

export const validateMedicineIdParam = withValidationErrors([
  param('id').custom(async (value, {req}) => {
  const isValidId = mongoose.Types.ObjectId.isValid(value)
  if (!isValidId) throw new BadRequestError('invalid MongoDB id')
  const medicineValue = await Medicine.findById(value)
  if (!medicineValue) throw new NotFoundError(`no medicine value with id ${value}`)
  const isAdmin = req.user.role === 'admin'
  const isOwner = req.user.userId === medicineValue.createdBy.toString()
  if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
})
])

export const validateExerciseInput = withValidationErrors([
  body('duration').notEmpty().withMessage('duration is required'),
  body('exerciseType').isIn(Object.values(EXERCISE_TYPE)).withMessage('invalid type'),
])

export const validateExerciseIdParam = withValidationErrors([
  param('id').custom(async (value, {req}) => {
  const isValidId = mongoose.Types.ObjectId.isValid(value)
  if (!isValidId) throw new BadRequestError('invalid MongoDB id')
  const exerciseValue = await Exercise.findById(value)
  if (!exerciseValue) throw new NotFoundError(`no exercise value with id ${value}`)
  const isAdmin = req.user.role === 'admin'
  const isOwner = req.user.userId === exerciseValue.createdBy.toString()
  if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
})
])

export const validateFoodInput = withValidationErrors([
  body('meal').isIn(Object.values(MEAL_TAG_FOOD)).withMessage('invalid type'),
])

export const validateFoodIdParam = withValidationErrors([
  param('id').custom(async (value, {req}) => {
  const isValidId = mongoose.Types.ObjectId.isValid(value)
  if (!isValidId) throw new BadRequestError('invalid MongoDB id')
  const foodValue = await Food.findById(value)
  if (!foodValue) throw new NotFoundError(`no food value with id ${value}`)
  const isAdmin = req.user.role === 'admin'
  const isOwner = req.user.userId === foodValue.createdBy.toString()
  if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
})
])

export const validateNotesInput = withValidationErrors([
  body('text').notEmpty().withMessage('text is required'),
  body('title').notEmpty().withMessage('title is required')
])

export const validateNotesIdParam = withValidationErrors([
  param('id').custom(async (value, {req}) => {
  const isValidId = mongoose.Types.ObjectId.isValid(value)
  if (!isValidId) throw new BadRequestError('invalid MongoDB id')
  const notesValue = await Notes.findById(value)
  if (!notesValue) throw new NotFoundError(`no note value with id ${value}`)
  const isAdmin = req.user.role === 'admin'
  const isOwner = req.user.userId === notesValue.createdBy.toString()
  if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
})
])

export const validateCommunityInput = withValidationErrors([
  body('message').notEmpty().withMessage('message is required'),
])

export const validateCommunityIdParam = withValidationErrors([
  param('id').custom(async (value, {req}) => {
  const isValidId = mongoose.Types.ObjectId.isValid(value)
  if (!isValidId) throw new BadRequestError('invalid MongoDB id')
  const communityValue = await Community.findById(value)
  if (!communityValue) throw new NotFoundError(`no message value with id ${value}`)
  const isAdmin = req.user.role === 'admin'
  const isOwner = req.user.userId === communityValue.createdBy.toString()
  if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
})
])

export const validateLabInput = withValidationErrors([
  body('testResult').notEmpty().withMessage('test result is required'),
  body('testType').isIn(Object.values(LAB_TEST_TYPE)).withMessage('invalid type'),
  body('testUnit').isIn(Object.values(LAB_UNITS)).withMessage('invalid unit type')
])

export const validateLabIdParam = withValidationErrors([
  param('id').custom(async (value, {req}) => {
  const isValidId = mongoose.Types.ObjectId.isValid(value)
  if (!isValidId) throw new BadRequestError('invalid MongoDB id')
  const labValue = await Lab.findById(value)
  if (!labValue) throw new NotFoundError(`no message value with id ${value}`)
  const isAdmin = req.user.role === 'admin'
  const isOwner = req.user.userId === labValue.createdBy.toString()
  if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
})
])

export const validateEmergencyInput = withValidationErrors([
])

export const validateEmergencyIdParam = withValidationErrors([
  param('id').custom(async (value, {req}) => {
  const isValidId = mongoose.Types.ObjectId.isValid(value)
  if (!isValidId) throw new BadRequestError('invalid MongoDB id')
  const emergencyValue = await Emergency.findById(value)
  if (!emergencyValue) throw new NotFoundError(`no message value with id ${value}`)
  const isAdmin = req.user.role === 'admin'
  const isOwner = req.user.userId === emergencyValue.createdBy.toString()
  if (!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to access this route')
})
])

