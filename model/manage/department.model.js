import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
    techstacks: [ { type: Schema.Types.ObjectId, ref: 'TechStacks' } ],
    projects: [ { type: Schema.Types.ObjectId, ref: 'Projects' } ],
    members: [ { type: Schema.Types.ObjectId, ref: 'Employees' } ],
  },
  { timestamps: true }
);

export const Departments = mongoose.model('Departments', DepartmentSchema);

