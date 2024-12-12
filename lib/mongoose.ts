import mongoose, { Mongoose } from "mongoose";

import logger from "./logger";
import "@/database"
const MONGO_URL = process.env.MONGODB_URL as string;
if (!MONGO_URL) {
  throw new Error("mongoDb url is not defined ");
}
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    logger.info("using existing mongoose connection");
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URL, {
        dbName: "devflow",
      })
      .then((result) => {
        logger.info("connected to MongoDb");
        return result;
      })
      .catch((error) => {
        logger.error("Error connecting to MongoDB", error);
        throw Error;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};
export default dbConnect;
