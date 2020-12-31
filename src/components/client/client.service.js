import { Clients } from './client.model.js';

export const createOne = async params => {
  const newClient = new Clients(params);
  return newClient.save();
};

export const getOneById = async id => await Clients.findById(id);

export const updateOneById = async (id, params) => {
  return await Clients.findOneAndUpdate(id, params, { new: true });
};

export const deleteOneById = async id => {
  return await Clients.findOneAndDelete(id);
};

export const getOneByCondition = async conditions => {
  return await Clients.findOne(conditions);
};

export const getListByCondition = async conditions => {
  return await Clients.find(conditions);
  
};
