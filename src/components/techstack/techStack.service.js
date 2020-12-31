import { TechStacks } from './techStack.model.js';

export const createOne = async params => {
  const newTechStack = new TechStacks(params);
  return newTechStack.save();
};

export const getOneById = async id => await TechStacks.findById(id);

export const updateOneById = async (id, params) => {
  return await TechStacks.findOneAndUpdate(id, params, { new: true });
};

export const deleteOneById = async id => {
  return await TechStacks.findOneAndDelete(id);
};

export const getOneByCondition = async conditions => {
  return await TechStacks.findOne(conditions);
};

export const getListByCondition = async conditions => {
  return await TechStacks.find(conditions);
};
