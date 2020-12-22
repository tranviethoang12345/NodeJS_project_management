import { Employees } from '../model/employee.model.js';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../helper/message.js';
import { TechStacks } from '../model/techStack.model.js';
import { Projects } from '../model/project.model.js';


export const createOne = async (req, res) => {
  try {  
    const newEmployees = new Employees(req.body);
    const result = await newEmployees.save();
    res.json(createSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};


export const getOneById = async (req, res) => {
  try {   
    const result = await Employees.findById({_id: req.params.id});
    res.json(getSuccess(result));
  } catch (err) {
    res.json(err)
  }
};

export const updateOne = async (req, res) => {
  try {  
    const result = await Employees.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
    res.json(updateSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const deleteOne = async (req, res) => {
  try {  
    const result = await Employees.findOneAndDelete({_id: req.params.id});
    res.json(deleteSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getAll = async (req, res) => {
  try {  
    const search = req.query;
    const result = await Employees.find(search);
    res.json(getSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const filterEmployeeBySkill = async (req, res) => {
  try {
    const techStack = await TechStacks.find({ name: req.query.techStack }, { _id: 1 });
    const ids = await techStack.map(doc => doc._id);
    const result = await Employees.find(
      { skill: { $elemMatch: { 
        techstack: { $in: ids }, 
        experience: req.query.experience } } 
      }
    );
    res.json({
      content: getSuccess(result),
      Total: result.length
    });

  } catch (err) {
    res.json(invalid(err.message))
  }
}

export const filterEmployeeByProject = async (req, res) => {
  try {
    const projects = await Projects.find({ name: req.query.project }, { _id: 1 });
    const ids = await projects.map(doc => doc._id);
    const result = await Employees.find({ project: { $in: ids } });
    res.json({
      content: getSuccess(result),
      Total: result.length
    });

  } catch (err) {
    res.json(invalid(err.message))
  }
}

export const filterEmployeeByProjectSize = async (req, res) => {
  try {
    const result = await Employees.find( { project: { $size: req.query.size } });

    res.json({
      content: getSuccess(result),
      Total: result.length
    });

  } catch (err) {
    res.json(invalid(err.message))
  }
}
