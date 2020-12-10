import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    techStack: [],
    project: [],
    member: [],
  },
  { timestamps: true }
);

export const Departments = mongoose.model('Departments', DepartmentSchema);

