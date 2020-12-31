import { 
  createProjectStatus, 
  getProjectStatusById, 
  updateProjectStatusById, 
  deleteProjectStatusByID, 
  getProjectStatusList 
} from './projectStatus.controller.js'
import express from 'express';

const router = express.Router();

router.post('/project-status', createProjectStatus);

router.get('/project-status/:id', getProjectStatusById);

router.put('/project-status/:id', updateProjectStatusById);

router.delete('/project-status/:id', deleteProjectStatusByID);

router.get('/project-status', getProjectStatusList);

export { router as projectStatusRouter };

