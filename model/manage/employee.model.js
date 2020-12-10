import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema(
  {
    info: {
      fullName: { type: String },
      dateOfBirth: { type: Date },
      phoneNumber: { type: Number },
      address: { type: String },
      email: { type: String },
      language: [String],
      certificate: [String],
      department: DepartmentSchema,
    },

    experience: [
      {
        techstack: [ TechStackSchema ],
        exp: { type: Number }
      }
    ],

    project: [ProjectSchema],
    
  },
  { timestamps: true }

);

export const Employees = mongoose.model('Employees', EmployeeSchema);
