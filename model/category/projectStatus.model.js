import mongoose from 'mongoose';

export const ProjectStatusSchema = new mongoose.Schema ({
  name: { type: String },
  description: { type: String },
  active: { type: Boolean, default: false }
})

export const ProjectStatus = mongoose.model('ProjectStatus', ProjectStatusSchema);
