import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/category/projectType.controller.js'
import express from 'express';

const router = express.Router();

router.post('/projects-types', createOne);

router.get('/projects-types/:id', getOneById);

router.put('/projects-types/:id', updateOne);

router.delete('/projects-types/:id', deleteOne);

router.get('/projects-types', getAll);

export { router as projectTypeRouter };

