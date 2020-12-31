import * as techStackService from './techStack.service.js';
import {
  createSuccess, deleteSuccess, getSuccess, invalid, updateSuccess,
} from '../../helper/API.resonse.js';

export const createTechStack = async (req, res) => {
  try {
    const result = await techStackService.createOne(req.body);
    res.status(200).json(createSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const getTechStackById = async (req, res) => {
  try {
    const result = await techStackService.getOneById({ _id: req.params.id });
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const updateTechStackById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const result = await techStackService.updateOneById(_id, body);
    res.status(200).json(updateSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const deleteTechStackByID = async (req, res) => {
  try {
    const result = await techStackService.deleteOneById({ _id: req.params.id });
    res.status(200).json(deleteSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const getTechStackList = async (req, res) => {
  try {
    const result = await techStackService.getListByCondition();
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};
