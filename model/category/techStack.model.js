import mongoose from 'mongoose';

export const TechStackSchema = new mongoose.Schema ({
  name: { type: String },
  description: { type: String },
  active: { type: Boolean, default: false }
})

export const TechStacks = mongoose.model('TechStacks', TechStackSchema);
