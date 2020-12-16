import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  techstack: { type: Schema.Types.ObjectId, ref: 'TechStacks' },
  experience: { type: String },
});

const EmployeeSchema = new Schema(
  {
    fullName: { type: String },
    phoneNumber: { type: Number },
    address: { type: String },
    email: { type: String },
    experience: [ ExperienceSchema ],
    project: [ { type: Schema.Types.ObjectId, ref: 'Projects' } ],
  },
  { timestamps: true }
);



export const Employees = mongoose.model('Employees', EmployeeSchema);
