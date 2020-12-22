import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    projectType: { type: Schema.Types.ObjectId, ref: 'ProjectTypes' },
    projectStatus: { type: Schema.Types.ObjectId, ref: 'ProjectStatus' },
    client: { type: Schema.Types.ObjectId, ref: 'Clients' },
    techStack: [ { type: Schema.Types.ObjectId, ref: 'TechStacks' } ],
    department: [ { type: Schema.Types.ObjectId, ref: 'Departments' } ],
    member: [ { type: Schema.Types.ObjectId, ref: 'Employees' } ],
    startDate: { type: Date },
    endDate: { type: Date },
  },
  { timestamps: true }
);


export const Projects = mongoose.model('Projects', ProjectSchema);