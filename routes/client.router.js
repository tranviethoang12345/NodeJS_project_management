import { 
  createOne, 
  getOneById, 
  updateOne, 
  deleteOne, 
  getAll 
} from '../api_controller/client.controller.js'
import express from 'express';

const router = express.Router();

router.post('/clients', createOne);

router.get('/clients/:id', getOneById);

router.put('/clients/:id', updateOne);

router.delete('/clients/:id', deleteOne);

router.get('/clients', getAll);

export { router as clientRouter };

