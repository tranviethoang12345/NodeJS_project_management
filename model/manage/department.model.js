import mongoose from 'mongoose';
// import { TechStacks } from '../category/techStack.model.js';
// import { Employees } from './employee.model.js';
// import { Projects } from './project.model.js'

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    techstack: [{ type: Schema.Types.ObjectId, ref: 'TechStacks' }],
    project: [ { type: Schema.Types.ObjectId, ref: 'Projects' } ],
    member: [ { type: Schema.Types.ObjectId, ref: 'Employees' } ],
  },
  { timestamps: true }
);

export const Departments = mongoose.model('Departments', DepartmentSchema);

