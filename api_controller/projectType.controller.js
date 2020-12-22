import { ProjectTypes } from '../model/projectType.model.js';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../helper/message.js'


export const createOne = async (req, res) => {
  try {  
    const newProjectTypes = new ProjectTypes(req.body);
    const projectType = await newProjectTypes.save();
    res.json(createSuccess(projectType));
  } catch (err) {
    res.json(invalid(err.message))
  }
};


export const getOneById = async (req, res) => {
  try {   
    const result = await ProjectTypes.findById({_id: req.params.id});
    res.json(getSuccess(result));
  } catch (err) {
    res.json(err);
  }
};

export const updateOne = async (req, res) => {
  try {  
    const result = await ProjectTypes.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
    res.json(updateSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const deleteOne = async (req, res) => {
  try {  
    const result = await ProjectTypes.findOneAndDelete({_id: req.params.id});
    res.json(deleteSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getAll = async (req, res) => {
  try {  
    const projectType = await ProjectTypes.find();
    res.json(getSuccess(projectType));
  } catch (err) {
    res.json(invalid(err.message))
  }
};
