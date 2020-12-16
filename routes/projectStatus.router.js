import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/category/projectStatus.controller.js'
import express from 'express';

const router = express.Router();

router.post('/project-status', createOne);

router.get('/project-status/:id', getOneById);

router.put('/project-status/:id', updateOne);

router.delete('/project-status/:id', deleteOne);

router.get('/project-status', getAll);

export { router as projectStatusRouter };

