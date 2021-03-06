import mongoose from 'mongoose';

const TechStackSchema = new mongoose.Schema ({
  name: { type: String, required: true },
  description: { type: String },
  active: { type: Boolean, default: true }
})

export const TechStacks = mongoose.model('TechStacks', TechStackSchema);


