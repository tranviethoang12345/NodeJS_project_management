import { 
  createOne, 
  getOneById, 
  updateOne, 
  deleteOne, 
  getAll, 
  filterEmployeeBySkill,
  filterEmployeeByProject,
  filterEmployeeByProjectSize
} from '../api_controller/employee.controller.js'
import express from 'express';

const router = express.Router();

router.post('/employees', createOne);

router.put('/employees/:id', updateOne);

router.delete('/employees/:id', deleteOne);

router.get('/employees/:id', getOneById);

router.get('/employees', getAll);

router.get('/employees/search/skills', filterEmployeeBySkill);

router.get('/employees/search/projects', filterEmployeeByProject);

router.get('/employees/search/projectsizes', filterEmployeeByProjectSize);




export { router as employeeRouter };


