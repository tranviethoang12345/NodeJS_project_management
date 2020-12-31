import express from 'express';
import {
  createProjectType,
  deleteProjectTypeByID,
  getProjectSTypeList,
  getProjectTypeById,
  updateProjectTypeById,
} from './projectType.controller.js';

const router = express.Router();

router.post('/project-types', createProjectType);

router.get('/project-types/:id', getProjectTypeById);

router.put('/project-types/:id', updateProjectTypeById);

router.delete('/project-types/:id', deleteProjectTypeByID);

router.get('/project-types', getProjectSTypeList);

export { router as projectTypeRouter };
