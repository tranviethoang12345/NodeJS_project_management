import { ProjectStatus } from '../../model/category/projectStatus.model.js';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../../helper/message.js';

export const createOne = async (req, res) => {
  try {  
    const newProjectStatus = new ProjectStatus(req.body);
    const result = await newProjectStatus.save();
    res.json(createSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getAll = async (req, res) => {
  try {  
    const result = await ProjectStatus.find();
    return res.json(getSuccess(result));
  } catch (err) {
    return res.json(invalid(err.message))
  }
};

export const getOneById = async (req, res) => {
  try {   
    const result = await ProjectStatus.findById({_id: req.params.id});
    if (result === null) throw ({message: 'does not exist'});
    res.json(getSuccess(result));
  } catch (err) {
    res.json(err)
  }
};

export const updateOne = async (req, res) => {
  try {  
    const result = await ProjectStatus.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
    if (result === null) throw ({message: 'does not exist'});
    else res.json(updateSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const deleteOne = async (req, res) => {
  try {  
    const result = await ProjectStatus.findOneAndDelete({_id: req.params.id});
    if (result === null) throw ({message: 'does not exist'});
    res.json(deleteSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};


