import mongoose from 'mongoose';

const ProjectStatusSchema = new mongoose.Schema ({
  name: { type: String, required: true },
  description: { type: String },
  active: { type: Boolean, default: true }
})

export const ProjectStatus = mongoose.model('ProjectStatus', ProjectStatusSchema);
