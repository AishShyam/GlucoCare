import 'express-async-errors'
import express from 'express'
const app = express()
import morgan from 'morgan'
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import glucoseRouter from './routers/glucoseRouter.js'
import authRouter from './routers/authRouter.js'
import userRouter from './routers/userRouter.js'
import medicineRouter from './routers/medicineRouter.js'
import exerciseRouter from './routers/exerciseRouter.js'
import foodRouter from './routers/foodRouter.js'
import notesRouter from './routers/notesRouter.js'
import communityRouter from './routers/communityRouter.js'
import labRouter from './routers/labRouter.js'
import emergencyRouter from './routers/emergencyRouter.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import {authenticateUser} from './middleware/authMiddleware.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.static(path.resolve(__dirname, './public')));


app.use(cookieParser())

app.use(express.json())

app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' });
});

app.use('/api/v1/glucose', authenticateUser, glucoseRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', authenticateUser, userRouter)
app.use('/api/v1/medicine', authenticateUser, medicineRouter)
app.use('/api/v1/exercise', authenticateUser, exerciseRouter)
app.use('/api/v1/food', authenticateUser, foodRouter)
app.use('/api/v1/notes', authenticateUser, notesRouter)
app.use('/api/v1/community', authenticateUser, communityRouter)
app.use('/api/v1/lab', authenticateUser, labRouter)
app.use('/api/v1/emergency', authenticateUser, emergencyRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});



app.use('*', (req, res) => {
    res.status(404).json({ msg: 'not found' })
})

app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5100

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server running on PORT ${port}`)
    });
  } catch (error) {
    console.log(error)
    process.exit(1)
}