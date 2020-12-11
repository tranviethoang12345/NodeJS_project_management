import { Projects } from '../../model/manage/project.model.js';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../../helper/message.js';

export const createOne = async (req, res) => {
  try {  
    const newProject = new Projects(req.body);
    const result = await newProject.save();
    res.json(createSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};


export const getAll = async (req, res) => {
  try {  
    const result = await Projects.find();
    return res.json(getSuccess(result));
  } catch (err) {
    return res.json(invalid(err.message))
  }
};

export const getOneById = async (req, res) => {
  try {   
    const result = await Projects.findById({_id: req.params.id});
    if (result === null) throw ({message: 'does not exist'});
    res.json(getSuccess(result, techStack));
  } catch (err) {
    res.json(err)
  }
};

export const updateOne = async (req, res) => {
  try {  
    const result = await Projects.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
    if (result === null) throw ({message: 'does not exist'});
    else res.json(updateSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const deleteOne = async (req, res) => {
  try {  
    const result = await Projects.findOneAndDelete({_id: req.params.id});
    if (result === null) throw ({message: 'does not exist'});
    res.json(deleteSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};


