import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { verifyToken } from './middleware/verifyToken.js';
// import loggers
import morgan from 'morgan';
import winston from './helper/logger.js';
// import routes
import { routes } from './routes/allRoutes.js';



// app init
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});


// mongoose setup 
mongoose.connect(process.env.dbURL || 'mongodb://localhost/projectManagement', { 
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

// helmet setup
app.use(helmet());

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());

// JWT setup
app.use(verifyToken)

// logger setup
app.use(morgan('combined', { stream: winston.stream }));

// router setup
app.use('/api', routes);

