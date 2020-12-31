import * as projectStatusService from './projectStatus.service.js';

import {
  createSuccess, deleteSuccess, getSuccess, invalid, updateSuccess,
} from '../../helper/API.resonse.js';

export const createProjectStatus = async (req, res) => {
  try {
    const result = await projectStatusService.createOne(req.body);
    res.status(200).json(createSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getProjectStatusById = async (req, res) => {
  try {
    const result = await projectStatusService.getOneById({ _id: req.params.id });
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const updateProjectStatusById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const result = await projectStatusService.updateOneById(_id, body);
    res.status(200).json(updateSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const deleteProjectStatusByID = async (req, res) => {
  try {
    const result = await projectStatusService.deleteOneById({ _id: req.params.id });
    res.status(200).json(deleteSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getProjectStatusList = async (req, res) => {
  try {
    const result = await projectStatusService.getListByCondition();
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};
