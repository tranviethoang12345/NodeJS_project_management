import { Projects } from '../model/project.model.js';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../helper/message.js';
import { ProjectTypes } from '../model/projectType.model.js';
import { ProjectStatus } from '../model/projectStatus.model.js';
import { TechStacks } from '../model/techStack.model.js';


export const createOne = async (req, res) => {
  try {
    const newProject = new Projects(req.body);
    const result = await newProject.save();
    res.json(createSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getOneById = async (req, res) => {
  try {
    const result = await Projects.findById({ _id: req.params.id });
    res.json(getSuccess(result));
  } catch (err) {
    res.json(err)
  }
};

export const updateOne = async (req, res) => {
  try {
    const result = await Projects.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(updateSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const deleteOne = async (req, res) => {
  try {
    const result = await Projects.findOneAndDelete({ _id: req.params.id });
    res.json(deleteSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getAll = async (req, res) => {
  try {
    const result = await Projects.find();
    // res.json({result, count})
    res.json({
      content: getSuccess(result),
      total: result.length
    });
  } catch (err) {
    res.json(invalid(err.message))
  }
};



export const filterProjectByStatus = async (req, res) => {
  try {
    // Get the _ids of projects status with the name of Cancelled.
    const status = await ProjectStatus.find({ name: req.query.projectStatus }, { _id: 1 });
    // Map the docs into an array of just the _ids
    const ids = await status.map(doc => doc._id);
    // Get the projects whose projects status are in that set.
    const result = await Projects.find({ projectStatus: { $in: ids } });

    res.json({
      content: getSuccess(result),
      Total: result.length
    });
  } catch (err) {
    res.json(invalid(err.message))
  }
}


export const filterProjectByType = async (req, res) => {
  try {
    const types = await ProjectTypes.find({ name: req.query.projectType }, { _id: 1 });
    const ids = await types.map(doc => doc._id);
    const result = await Projects.find({ projectType: { $in: ids } });
    res.json({
      content: getSuccess(result),
      Total: result.length
    });
  } catch (err) {
    res.json(invalid(err.message))
  }
}


export const filterProjectByTechStack = async (req, res) => {
  try {
    const stacks = await TechStacks.find({ name: req.query.techStack }, { _id: 1 });
    const ids = await stacks.map(doc => doc._id);
    const result = await Projects.find({ techStack: { $in: ids } });

    res.json({
      content: getSuccess(result),
      Total: result.length
    });
  } catch (err) {
    res.json(invalid(err.message))
  }
}