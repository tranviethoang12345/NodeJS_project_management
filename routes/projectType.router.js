import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/category/projectType.controller.js'
import express from 'express';

const router = express.Router();

router.post('/project-types', createOne);

router.get('/project-types/:id', getOneById);

router.put('/project-types/:id', updateOne);

router.delete('/project-types/:id', deleteOne);

router.get('/project-types', getAll);

export { router as projectTypeRouter };

