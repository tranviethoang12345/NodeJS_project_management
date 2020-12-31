import * as departmentService from './department.service.js'
import {
  createSuccess,
  deleteSuccess,
  getSuccess,
  invalid,
  updateSuccess,
} from '../../helper/API.resonse.js';

export const createDepartment = async (req, res) => {
  try {
    const result = await departmentService.createOne(req.body);
    res.status(200).json(createSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getDepartmentById = async (req, res) => {
  try {
    const result = await departmentService.getOneById({ _id: req.params.id });
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const updateDepartmentById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const result = await departmentService.updateOneById(_id, body);
    res.status(200).json(updateSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const deleteDepartmentByID = async (req, res) => {
  try {
    const result = await departmentService.deleteOneById({ _id: req.params.id });
    res.status(200).json(deleteSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getDepartmentList = async (req, res) => {
  try {
    const result = await departmentService.getListByCondition();
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};
