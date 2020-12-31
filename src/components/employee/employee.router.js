import express from 'express';
import {
  createEmployee,
  deleteEmployeeByID,
  getEmployeesByProject,
  getEmployeesByProjectSize,
  getEmployeesBySkill,
  getEmployeeList,
  getEmployeeById,
  updateEmployeeById,
} from './employee.controller.js';

const router = express.Router();

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployeeById);

router.delete('/employees/:id', deleteEmployeeByID);

router.get('/employees/:id', getEmployeeById);

router.get('/employees', getEmployeeList);

router.get('/employees/search/skills', getEmployeesBySkill);

router.get('/employees/search/projects', getEmployeesByProject);

router.get('/employees/search/projectsizes', getEmployeesByProjectSize);

export { router as employeeRouter };
