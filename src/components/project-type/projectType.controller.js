import * as projectTypeService from './projectType.service.js';
import {
  createSuccess, deleteSuccess, getSuccess, invalid, updateSuccess,
} from '../../helper/API.resonse.js';

export const createProjectType = async (req, res) => {
  try {
    const result = await projectTypeService.createOne(req.body);
    res.status(200).json(createSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const getProjectTypeById = async (req, res) => {
  try {
    const result = await projectTypeService.getOneById({ _id: req.params.id });
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const updateProjectTypeById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const result = await projectTypeService.updateOneById(_id, body);
    res.status(200).json(updateSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const deleteProjectTypeByID = async (req, res) => {
  try {
    const result = await projectTypeService.deleteOneById({ _id: req.params.id });
    res.status(200).json(deleteSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};

export const getProjectSTypeList = async (req, res) => {
  try {
    const result = await projectTypeService.getListByCondition();
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.json(invalid(error.message));
  }
};
