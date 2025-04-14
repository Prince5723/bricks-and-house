import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IProject } from './Project';

export interface IProgressUpdate extends Document {
  projectId: mongoose.Types.ObjectId | IProject;
  uploadedBy: mongoose.Types.ObjectId | IUser;
  imageUrls: string[];
  description: string;
  createdAt: Date;
}

const ProgressUpdateSchema: Schema = new Schema({
  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true 
  },
  uploadedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  imageUrls: [{ type: String }],
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.ProgressUpdate || 
  mongoose.model<IProgressUpdate>('ProgressUpdate', ProgressUpdateSchema);