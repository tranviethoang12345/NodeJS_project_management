import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/category/projectStatus.controller.js'
import express from 'express';

const router = express.Router();

router.post('/projects/status', createOne);

router.get('/projects/status/:id', getOneById);

router.put('/projects/status/:id', updateOne);

router.delete('/projects/status/:id', deleteOne);

router.get('/projects/status', getAll);

export { router as projectStatusRouter };

