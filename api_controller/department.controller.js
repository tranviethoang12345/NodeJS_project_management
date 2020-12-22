import { Departments } from '../model/department.model.js';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../helper/message.js';


export const createOne = async (req, res) => {
  try {  
    const newDepartments = new Departments(req.body);
    const result = await newDepartments.save();
    res.json(createSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getOneById = async (req, res) => {
  try {   
    const result = await Departments.findById({_id: req.params.id});
    res.json(getSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const updateOne = async (req, res) => {
  try {  
    const result = await Departments.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
    res.json(updateSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const deleteOne = async (req, res) => {
  try {  
    const result = await Departments.findOneAndDelete({_id: req.params.id});
    res.json(deleteSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getAll = async (req, res) => {
  try {  
    const result = await Departments.find();
    res.json(getSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};