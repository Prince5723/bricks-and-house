import mongoose from 'mongoose';

declare global {
  var mongooseClient: {
    promise: Promise<typeof mongoose> | null;
    conn: typeof mongoose | null;
  } | null;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let clientPromise: Promise<typeof mongoose>;

if (process.env.NODE_ENV === 'development') {
  if (!global.mongooseClient) {
    global.mongooseClient = { promise: null, conn: null };
  }

  if (!global.mongooseClient.promise) {
    global.mongooseClient.promise = mongoose.connect(MONGODB_URI);
  }
  clientPromise = global.mongooseClient.promise;
} else {
  clientPromise = mongoose.connect(MONGODB_URI);
}

async function connectDB(): Promise<typeof mongoose> {
  try {
    return await clientPromise;
  } catch (e) {
    throw e;
  }
}

export default connectDB; 