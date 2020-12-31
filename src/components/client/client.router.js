import express from 'express';
import {
  createClient,
  deleteClientByID,
  getClientById,
  getClientList,
  updateClientById,
} from './client.controller.js';

const router = express.Router();

router.post('/clients', createClient);

router.get('/clients/:id', getClientById);

router.put('/clients/:id', updateClientById);

router.delete('/clients/:id', deleteClientByID);

router.get('/clients', getClientList);

export { router as clientRouter };
