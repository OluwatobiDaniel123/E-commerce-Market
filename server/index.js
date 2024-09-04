import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/route.js";
import mongoose from "mongoose";
// import Transaction from "./model/Transaction.js";
// import Category from "./model/Categories.js";

// import conn from "./config/connection.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

// use middleware
app.use(cors());
app.use(express.json());

// using routes
app.use(route);

// // Sample transactions
// const sampleTransactions = [
//   { name: "Transaction1", type: "Investment", amount: 100 },
//   { name: "Transaction2", type: "Expense", amount: 50 },
// ];

// // Sample categories
// const sampleCategories = [
//   { type: "Investment", color: "#00FF00" },
//   { type: "Expense", color: "#FF0000" },
// ];

// // Insert sample transactions
// Transaction.insertMany(sampleTransactions)
//   .then(() => console.log("Sample transactions inserted"))
//   .catch((err) => console.error("Error inserting sample transactions:", err));

// // Insert sample categories
// Category.insertMany(sampleCategories)
//   .then(() => console.log("Sample categories inserted"))
//   .catch((err) => console.error("Error inserting sample categories:", err));

//
mongoose
  .connect(process.env.MONGODb_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server and MongoDB Started On Port${PORT}`)
    );
  })

  .catch((error) => console.log(`Server not connecting${error}`));
