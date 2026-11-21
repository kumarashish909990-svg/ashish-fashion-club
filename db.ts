import mongoose from "mongoose";
const URI = process.env.MONGODB_URI!;
if (!URI) throw new Error("Please set MONGODB_URI in .env.local");
let cached = (global as typeof globalThis & { mongoose?: {conn:any;promise:any} }).mongoose;
if (!cached) cached = (global as any).mongoose = {conn:null,promise:null};
export async function connectDB() {
  if (cached!.conn) return cached!.conn;
  if (!cached!.promise) cached!.promise = mongoose.connect(URI).then(m=>m);
  cached!.conn = await cached!.promise;
  return cached!.conn;
}