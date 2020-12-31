import { 
  createTechStack, 
  getTechStackById, 
  updateTechStackById, 
  deleteTechStackByID, 
  getTechStackList } from './techStack.controller.js';
  
import express from 'express';

const router = express.Router();

router.post('/techstacks', createTechStack);

router.get('/techstacks/:id', getTechStackById);

router.put('/techstacks/:id', updateTechStackById);

router.delete('/techstacks/:id', deleteTechStackByID);

router.get('/techstacks', getTechStackList);

export { router as techStackRouter };

