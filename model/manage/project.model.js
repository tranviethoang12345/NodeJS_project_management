import mongoose from 'mongoose';
import { ProjectStatus } from '../category/projectStatus.model.js';
import { ProjectTypes } from '../category/projectType.model.js';
import { TechStacks } from '../category/techStack.model.js';
import { ClientGroups } from '../category/clientGroup.model.js'
import { Departments } from './department.model.js';
import { Employees } from './employee.model.js';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    projectType: { type: Schema.Types.ObjectId, ref: 'ProjectTypes' },
    projectStatus: { type: Schema.Types.ObjectId, ref: 'ProjectStatus' },
    clientGroup: { type: Schema.Types.ObjectId, ref: 'ClientGroups' },
    techStack: [ { type: Schema.Types.ObjectId, ref: 'TechStacks' } ],
    department: [ { type: Schema.Types.ObjectId, ref: 'Departments' } ],
    member: [ { type: Schema.Types.ObjectId, ref: 'Employees' } ],
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);


export const Projects = mongoose.model('Projects', ProjectSchema);