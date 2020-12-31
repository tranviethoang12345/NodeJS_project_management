import express from 'express';
import {
  createDepartment,
  deleteDepartmentByID,
  getDepartmentById,
  getDepartmentList,
  updateDepartmentById,
} from './department.controller.js';

const router = express.Router();

router.post('/departments', createDepartment);

router.get('/departments/:id', getDepartmentById);

router.put('/departments/:id', updateDepartmentById);

router.delete('/departments/:id', deleteDepartmentByID);

router.get('/departments', getDepartmentList);

export { router as departmentRouter };
