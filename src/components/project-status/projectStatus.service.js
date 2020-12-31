import { ProjectStatus } from './projectStatus.model.js';

export const createOne = async params => {
  const newProjectStatus = new ProjectStatus(params);
  return newProjectStatus.save();
};

export const getOneById = async id => await ProjectStatus.findById(id);

export const updateOneById = async (id, params) => {
  return await ProjectStatus.findOneAndUpdate(id, params, { new: true });
};

export const deleteOneById = async id => {
  return await ProjectStatus.findOneAndDelete(id);
};

export const getOneByCondition = async conditions => {
  return await ProjectStatus.findOne(conditions);
};

export const getListByCondition = async conditions => {
  return await ProjectStatus.find(conditions);
};
