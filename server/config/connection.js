import mongoose from "mongoose";

const conn = mongoose
  .connect(process.env.MONGODB_URL)
  .then((db) => {
    console.log("Database Connected");
    return db;
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });

export default conn;
