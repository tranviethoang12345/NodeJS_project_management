import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { verifyToken } from './middleware/verifyToken.js';
import cors from 'cors';
import morgan from 'morgan';
import winston from './helper/logger.js';

// import routes
import { projectTypeRouter } from './routes/projectType.router.js';
import { projectStatusRouter } from './routes/projectStatus.router.js';
import { clientRouter } from './routes/client.router.js';
import { techStackRouter } from './routes/techStack.router.js';
import { employeeRouter } from './routes/employee.router.js';
import { projectRouter } from './routes/project.router.js';
import { departmentRouter } from "./routes/department.router.js";

// app init
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});


// connect mongoose 
mongoose.connect('mongodb://localhost/projectManagement', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false 
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongo DB')
  // connected! 
});


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());

// JWT setup
app.use(verifyToken)

// logger setup
app.use(morgan('combined', { stream: winston.stream }));

// router setup
app.use('/api', [
  projectTypeRouter,
  projectStatusRouter,
  clientRouter,
  techStackRouter,
  employeeRouter,
  projectRouter,
  departmentRouter
]);

