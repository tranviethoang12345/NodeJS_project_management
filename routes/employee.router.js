import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/manage/employee.controller.js'
import express from 'express';

const router = express.Router();

router.post('/employees', createOne);

router.get('/employees/:id', getOneById);

router.put('/employees/:id', updateOne);

router.delete('/employees/:id', deleteOne);

router.get('/employees', getAll);

export { router as employeeRouter };

