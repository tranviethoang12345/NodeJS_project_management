import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  priorityLevel: {
    type: Number, min: 1, max: 4, default: 4,
  },
  active: { type: Boolean, default: true },
});

export const Clients = mongoose.model('ClientGroups', ClientSchema);
