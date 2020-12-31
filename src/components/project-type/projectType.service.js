import { ProjectTypes } from './projectType.model.js';

export const createOne = async params => {
  const newProjectType = new ProjectTypes(params);
  return newProjectType.save();
};

export const getOneById = async id => await ProjectTypes.findById(id);

export const updateOneById = async (id, params) => {
  return await ProjectTypes.findOneAndUpdate(id, params, { new: true });
};

export const deleteOneById = async id => {
  return await ProjectTypes.findOneAndDelete(id);
};

export const getOneByCondition = async conditions => {
  return await ProjectTypes.findOne(conditions);
};

export const getListByCondition = async conditions => {
  return await ProjectTypes.find(conditions);
};
