import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    projectStype: ProjectTypeSchema,
    projectStatus: ProjectStatusSchema,
    techStacks: [TechStackSchema],
    department: [DepartmentSchema],
    member: [EmployeeSchema],
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);


export const Projects = mongoose.model('Projects', ProjectSchema);