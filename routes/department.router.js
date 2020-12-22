import { 
  createOne, 
  getOneById, 
  updateOne, 
  deleteOne, 
  getAll 
} from '../api_controller/department.controller.js'
import express from 'express';

const router = express.Router();

router.post('/departments', createOne);

router.get('/departments/:id', getOneById);

router.put('/departments/:id', updateOne);

router.delete('/departments/:id', deleteOne);

router.get('/departments', getAll);

export { router as departmentRouter };

