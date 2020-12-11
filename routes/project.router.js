import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/manage/project.controller.js'
import express from 'express';

const router = express.Router();

router.post('/projects', createOne);

router.get('/projects/:id', getOneById);

router.put('/projects/:id', updateOne);

router.delete('/projects/:id', deleteOne);

router.get('/projects', getAll);

export { router as projectRouter };
