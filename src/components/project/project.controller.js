import * as projectService from './project.service.js';

import {
  createSuccess,
  deleteSuccess,
  getSuccess,
  invalid,
  updateSuccess,
} from '../../helper/API.resonse.js';

export const createProject = async (req, res) => {
  try {
    const result = await projectService.createOne(req.body);
    res.status(200).json(createSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getProjectById = async (req, res) => {
  try {
    const result = await projectService.getOneById({ _id: req.params.id });
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const updateProjectById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const result = await projectService.updateOneById(_id, body);
    res.status(200).json(updateSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const deleteProjectByID = async (req, res) => {
  try {
    const result = await projectService.deleteOneById({ _id: req.params.id });
    res.status(200).json(deleteSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getProjectList = async (req, res) => {
  try {
    const result = await projectService.getListByCondition();
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getProjectsByStatus = async (req, res) => {
  try {
    const result = await projectService.filterByStatus(req.query.projectStatus);
    res.status(200).json(getSuccess(result));
  } catch (error) {
    res.status(400).json(invalid(error.message));
  }
}

export const getProjectsByType = async (req, res) => {
  try {
    const result = await projectService.filterByType(req.query.projectType);
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getProjectsByTechStack = async (req, res) => {
  try {
    const result = await projectService.filterByTechStack(req.query.techStack);
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};
