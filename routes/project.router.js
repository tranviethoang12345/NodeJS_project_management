import { 
  createOne, 
  getOneById, 
  updateOne, 
  deleteOne, 
  getAll, 
  filterProjectByStatus,
  filterProjectByTechStack,
  filterProjectByType 
} from '../api_controller/project.controller.js';

import express from 'express';

const router = express.Router();

router.post('/projects', createOne);

router.get('/projects/:id', getOneById);

router.put('/projects/:id', updateOne);

router.delete('/projects/:id', deleteOne);

router.get('/projects', getAll);

router.get('/projects/seach/status', filterProjectByStatus);

router.get('/projects/search/types', filterProjectByType);

router.get('/projects/search/techstacks', filterProjectByTechStack);






export { router as projectRouter };