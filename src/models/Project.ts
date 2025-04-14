import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface IProject extends Document {
  siteAddress: string;
  clientId: mongoose.Types.ObjectId | IUser;
  engineerId: mongoose.Types.ObjectId | IUser;
  status: 'in progress' | 'completed';
  createdAt: Date;
}

const ProjectSchema: Schema = new Schema({
  siteAddress: { type: String, required: true },
  clientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  engineerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  status: { 
    type: String, 
    required: true, 
    enum: ['in progress', 'completed'],
    default: 'in progress'
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);