import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IProject } from './Project';

export interface ITicket extends Document {
  projectId: mongoose.Types.ObjectId | IProject;
  raisedBy: mongoose.Types.ObjectId | IUser;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  approvedBy: mongoose.Types.ObjectId | IUser | null;
  estimatedCost: number | null;
  createdAt: Date;
  updatedAt: Date;
}

const TicketSchema: Schema = new Schema({
  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true 
  },
  raisedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    required: true, 
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  approvedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    default: null 
  },
  estimatedCost: { type: Number, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Ticket || 
  mongoose.model<ITicket>('Ticket', TicketSchema);