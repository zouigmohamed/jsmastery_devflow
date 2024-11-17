import mongoose, { Mongoose } from "mongoose";
const MONGO_URL = process.env.MONGODB_UR as string;
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
const dbConnect = async () :Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URL, {
        dbName: "devflow",
      })
      .then((result) => {
        console.log("connected to MongoDb");
        return result;
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        throw Error;
      });
    }
    cached.conn = await cached.promise
    return cached.conn
};
export default dbConnect
