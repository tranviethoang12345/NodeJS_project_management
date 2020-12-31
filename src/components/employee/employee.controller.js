import * as employeeService from './employee.service.js';

import {
  createSuccess,
  deleteSuccess,
  getSuccess,
  invalid,
  updateSuccess,
} from '../../helper/API.resonse.js';

export const createEmployee = async (req, res) => {
  try {
    const result = await employeeService.createOne(req.body);
    res.status(200).json(createSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const result = await employeeService.getOneById({ _id: req.params.id });
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const updateEmployeeById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const result = await employeeService.updateOneById(_id, body);
    res.status(200).json(updateSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const deleteEmployeeByID = async (req, res) => {
  try {
    const result = await employeeService.deleteOneById({ _id: req.params.id });
    res.status(200).json(deleteSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getEmployeeList = async (req, res) => {
  try {
    const result = await employeeService.getListByCondition(req.query);
    res.status(200).json(getSuccess(result)); 
  } catch (error) {
    res.status(500).json(invalid(error.message));
  }
}

export const getEmployeesBySkill = async (req, res) => {
  try {
    const { techStack, experience } = req.query;
    const result = await employeeService.filterBySkill(techStack, experience);
    res.status(200).json(getSuccess(result));
  } catch (error) {
    res.status(400).json(invalid(error.message));
  }
}

export const getEmployeesByProject = async (req, res) => {
  try {
    const result = await employeeService.filterByProject(req.query.project);
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getEmployeesByProjectSize = async (req, res) => {
  try {
    const result = await employeeService.filterByProjectSize(req.query.size);
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};
