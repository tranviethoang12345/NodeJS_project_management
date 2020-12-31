import * as clientService from './client.service.js';
import {
  createSuccess, deleteSuccess, getSuccess, invalid, updateSuccess,
} from '../../helper/API.resonse.js';

export const createClient = async (req, res) => {
  try {
    const result = await clientService.createOne(req.body);
    res.status(200).json(createSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getClientById = async (req, res) => {
  try {
    const result = await clientService.getOneById({ _id: req.params.id });
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const updateClientById = async (req, res) => {
  try {
    const _id = req.params.id;
    const { body } = req;
    const result = await clientService.updateOneById(_id, body);
    res.status(200).json(updateSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const deleteClientByID = async (req, res) => {
  try {
    const result = await clientService.deleteOneById({ _id: req.params.id });
    res.status(200).json(deleteSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};

export const getClientList = async (req, res) => {
  try {
    const result = await clientService.getListByCondition();
    res.status(200).json(getSuccess(result));
  }
  catch (error) {
    res.status(400).json(invalid(error.message));
  }
};
