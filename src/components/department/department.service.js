import { Departments } from './department.model.js';

export const createOne = async params => {
  const newDepartment = new Departments(params);
  return newDepartment.save();
};

export const getOneById = async id => await Departments.findById(id);

export const updateOneById = async (id, params) => {
  return await Departments.findOneAndUpdate(id, params, { new: true });
};

export const deleteOneById = async id => {
  return await Departments.findOneAndDelete(id);
};

export const getOneByCondition = async conditions => {
  return await Departments.findOne(conditions);
};

export const getListByCondition = async conditions => {
  return await Departments.find(conditions);
};
