import { Employees } from '../../model/manage/employee.model.js';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../../helper/message.js';


export const createOne = async (req, res) => {
  try {  
    const newEmployees = new Employees(req.body);
    const result = await newEmployees.save();
    res.json(createSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};


export const getAll = async (req, res) => {
  try {  
    const result = await Employees.find();
    res.json(getSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const getOneById = async (req, res) => {
  try {   
    const result = await Employees.findById({_id: req.params.id});
    if (result === null) throw ({message: 'does not exist'});
    res.json(getSuccess(result));
  } catch (err) {
    res.json(err)
  }
};

export const updateOne = async (req, res) => {
  try {  
    const result = await Employees.findOneAndUpdate({_id: req.params.id}, req.body, { new: true });
    if (result === null) throw ({message: 'does not exist'});
    else res.json(updateSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};

export const deleteOne = async (req, res) => {
  try {  
    const result = await Employees.findOneAndDelete({_id: req.params.id});
    if (result === null) throw ({message: 'does not exist'});
    res.json(deleteSuccess(result));
  } catch (err) {
    res.json(invalid(err.message))
  }
};


export const filterEmployee = async (req, res) => {
  try {
    const filter = req.query;
    const populateQuery = [ 
      { path: 'experience' },
      { path: 'project' }
    ]
    const result = await Employees.find(filter)
    .populate(populateQuery)
    .exec();
    const totalItems = await Employees.find(filter).countDocuments();
    res.json(getSuccess(result), totalItems);
  } catch (err) {
    res.json(invalid(err.message))
  }
}