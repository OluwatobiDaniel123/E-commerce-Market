import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  type: { type: String, unique: true, required: true },
  color: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
