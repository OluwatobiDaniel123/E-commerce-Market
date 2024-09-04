import mongoose from "mongoose";

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  name: { type: String, default: "Anonymous" },
  type: { type: String, default: "Investment" },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
