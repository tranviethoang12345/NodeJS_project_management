import mongoose from 'mongoose';

export const ProjectTypeSchema = new mongoose.Schema ({
  name: { type: String },
  description: { type: String },
  priorityLevel: { type: Number, min: 1, max: 4, default: 4 },
  active: { type: Boolean, default: false },
})

export const ProjectTypes = mongoose.model('ProjectTypes', ProjectTypeSchema);
