import express from 'express';
import { 
  createProject, 
  getProjectById, 
  updateProjectById, 
  deleteProjectByID, 
  getProjectList, 
  getProjectsByStatus,
  getProjectsByTechStack,
  getProjectsByType 
} from './project.controller.js';


const router = express.Router();

router.post('/projects', createProject);

router.get('/projects/:id', getProjectById);

router.put('/projects/:id', updateProjectById);

router.delete('/projects/:id', deleteProjectByID);

router.get('/projects', getProjectList);

router.get('/projects/seach/status', getProjectsByStatus);

router.get('/projects/search/types', getProjectsByType);

router.get('/projects/search/techstacks', getProjectsByTechStack);






export { router as projectRouter };