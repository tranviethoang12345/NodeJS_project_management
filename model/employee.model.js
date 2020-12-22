import mongoose from 'mongoose';
import { capFirstLetters } from '../untils/capFirstLetters.js'

const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  techstack: { type: Schema.Types.ObjectId, ref: 'TechStacks' },
  experience: { type: String },
});

const EmployeeSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: Number },
    address: { type: String },
    email: { type: String },
    skill: [ SkillSchema ],
    project: [ { type: Schema.Types.ObjectId, ref: 'Projects' } ],
  },
  { timestamps: true }
);

// viet ten rieng chuan
EmployeeSchema.pre('save', async function () {
  this.fullName = await capFirstLetters(this.fullName);
});

export const Employees = mongoose.model('Employees', EmployeeSchema);
