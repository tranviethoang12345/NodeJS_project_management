import { createOne, getOneById, updateOne, deleteOne, getAll } from '../api_controller/category/clientGroup.controller.js'
import express from 'express';

const router = express.Router();

router.post('/clientgroups', createOne);

router.get('/clientgroups/:id', getOneById);

router.put('/clientgroups/:id', updateOne);

router.delete('/clientgroups/:id', deleteOne);

router.get('/clientgroups', getAll);

export { router as clientGroupRouter };

