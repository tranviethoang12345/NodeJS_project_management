import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/category/techStack.controller.js.js'
import express from 'express';

const router = express.Router();

router.post('/techstacks', createOne);

router.get('/techstacks/:id', getOneById);

router.put('/techstacks/:id', updateOne);

router.delete('/techstacks/:id', deleteOne);

router.get('/techstacks', getAll);

export { router as techStackRouter };

