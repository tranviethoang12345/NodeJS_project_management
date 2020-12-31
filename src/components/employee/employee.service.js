import { Employees } from './employee.model.js';
import { TechStacks } from '../techstack/techStack.model.js';
import { Projects } from '../project/project.model.js';

export const createOne = async params => {
  const newEmployee = new Employees(params);
  return newEmployee.save();
};

export const getOneById = id => Employees.findById(id);

export const updateOneById = async (id, params) => Employees.findOneAndUpdate(id, params, { new: true });

export const deleteOneById = async id => Employees.findOneAndDelete(id);

export const getOneByCondition = async conditions => Employees.findOne(conditions);

export const getListByCondition = async (queryString) => {
  try {
    let {
      pageSize,
      currentPage,
      sortBy,
      orderBy,
      sortQuery,
      filter,
      filterOn,
      filerQuery,
    } = queryString;
  
    sortQuery = {
      [sortBy]: orderBy
    };
  
    filerQuery = {};
    if (filter.length > 0) {
      const regx = new RegExp(filter, 'i'); 
      if (filterOn.length > 0) {
        filerQuery = {
          [filterOn]: regx
        };
      } else {
        filerQuery = {
          fullName: filter
        }
      }
    } 

    const countItem = await Employees.countDocuments(filerQuery);
    const data = await Employees.find(filerQuery)
                                .limit(pageSize)
                                .skip(currentPage * pageSize)
                                .sort(sortQuery);
    return {
      total: countItem,
      data
    }
  } catch (error) {
    throw error;
  }

}

export const filterBySkill = async (techStackName, experience) => {
  try {
    const techStack = await TechStacks.find( { name: { $regex: techStackName, $options: '$i' } }, { _id: 1 } );
    const ids = await techStack.map(doc => doc._id);
    const result = await Employees.find(
      { skill: { $elemMatch: { 
        techstack: { $in: ids }, 
        experience: { $regex: experience, $options: '$i' } } } 
      }
    );
    return {
      total: result.length,
      data: result
    };
  } catch (error) {
    throw error;
  }
}

export const filterByProject = async (project) => {
  try {
    const projects = await Projects.find({ name: { $regex: project, $options: '$i' } }, { _id: 1 });
    const ids = await projects.map(doc => doc._id);
    const result = await Employees.find({ project: { $in: ids }});
    return {
      total: result.length,
      data: result
    };
  }
  catch (error) {
    throw error;
  }
};

export const filterByProjectSize = async (size) => {
  try {
    const result = await Employees.find({ project: { $size: size }});
    return {
      total: result.length,
      data: result
    };
  }
  catch (error) {
    throw error;
  }
};

