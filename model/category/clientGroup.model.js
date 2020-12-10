import mongoose from 'mongoose';

export const ClientGroupSchema = new mongoose.Schema ({
  name: { type: String },
  description: { type: String },
  priorityLevel: { type: Number, min: 1, max: 4 },
  active: { type: Boolean, default: false }
})

export const ClientGroups = mongoose.model('ClientGroups', ClientGroupSchema);

