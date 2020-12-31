import { Projects } from './project.model.js';
import { ProjectTypes } from '../project-type/projectType.model.js';
import { ProjectStatus } from '../project-status/projectStatus.model.js';
import { TechStacks } from '../techstack/techStack.model.js';

export const createOne = async params => {
  const newProject = new Projects(params);
  return newProject.save();
};

export const getOneById = async id => await Projects.findById(id);

export const updateOneById = async (id, params) => {
  return await Projects.findOneAndUpdate(id, params, { new: true });
};

export const deleteOneById = async id => {
  return await Projects.findOneAndDelete(id);
};

export const getOneByCondition = async conditions => {
  return await Projects.findOne(conditions);
};

export const getListByCondition = async conditions => {
  return await Projects.find(conditions);
};

export const filterByStatus = async (projectStatus) => {
  try {
    // Get the _ids of projects status with name - eg: "Cancelled"
    const status = await ProjectStatus.find({ name: { $regex: projectStatus, $options: '$i' } }, { _id: 1 });
    // Map the docs into an array of just the _ids
    const ids = await status.map(doc => doc._id);
    // Get the projects whose projects status are in that set.
    const result = await Projects.find({ projectStatus: { $in: ids }});

    return {
      total: result.length,
      data: result
    };
  }
  catch (err) {
    throw err;
  }
};

export const filterByType = async (projectType) => {
  try {
    const types = await ProjectTypes.find({ name: { $regex: projectType, $options: '$i' } }, { _id: 1 });
    const ids = await types.map(doc => doc._id);
    const result = await Projects.find({ projectType: { $in: ids }});
    return {
      total: result.length,
      data: result
    };
  }
  catch (err) {
    throw err;
  }
};

export const filterByTechStack = async (techStack) => {
  try {
    const stacks = await TechStacks.find({ name: { $regex: techStack, $options: '$i' } }, { _id: 1 });
    const ids = await stacks.map(doc => doc._id);
    const result = await Projects.find({ techStack: { $in: ids }});
    return {
      total: result.length,
      data: result
    };
  }
  catch (err) {
    throw err;
  }
};
