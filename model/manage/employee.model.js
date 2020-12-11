import mongoose from 'mongoose';
import { Projects } from './project.model.js';
import { TechStacks } from '../category/techStack.model.js';

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    info: {
      fullName: { type: String },
      dateOfBirth: { type: String },
      phoneNumber: { type: Number },
      address: { type: String },
      email: { type: String },
    },

    skill: [ {
        techstack: { type: Schema.Types.ObjectId, ref: 'TechStacks' },
        exp_year: { type: String }
      }
    ],

    project: { type: Schema.Types.ObjectId, ref: Projects },
    
  },
  { timestamps: true }

);

export const Employees = mongoose.model('Employees', EmployeeSchema);
