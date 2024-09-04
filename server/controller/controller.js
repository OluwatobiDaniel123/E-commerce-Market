import Transaction from "../model/Transaction.js";
import Category from "../model/Categories.js";

// POST: http://localhost:8080/api/categories
export const create_Categories = async (req, res) => {
  try {
    const { type, color } = req.body;
    const newCategory = new Category({ type, color });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Category Creation Error", details: error.message });
  }
};

// GET: http://localhost:8080/api/categories
export const get_Categories = async (req, res) => {
  try {
    const data = await Category.find({});
    const filter = data.map((v) => ({
      type: v.type,
      color: v.color,
    }));
    res.json(filter);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while fetching categories: ${error.message}` });
  }
};

// POST: http://localhost:8080/api/transaction
export const create_Transaction = async (req, res) => {
  try {
    if (!req.body) return res.status(400).json("Post HTTP Data not Provided");
    const { name, type, amount } = req.body;

    const newTransaction = new Transaction({
      name,
      type,
      amount,
      date: new Date(),
    });

    const savedTransaction = await newTransaction.save();
    res.json(savedTransaction);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while creating transaction: ${error.message}` });
  }
};

// GET: http://localhost:8080/api/transaction
export const get_Transaction = async (req, res) => {
  try {
    const data = await Transaction.find({});
    res.json(data);
    console.log(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while fetching transactions: ${error.message}` });
  }
};

// DELETE: http://localhost:8080/api/transaction
export const delete_Transaction = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: "Request body not found" });

    const result = await Transaction.deleteOne(req.body).clone();
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "No transaction found to delete" });
    }
    res.json("Record Deleted!");
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while deleting transaction: ${error.message}` });
  }
};

// GET: http://localhost:8080/api/labels
export const get_Labels = async (req, res) => {
  try {
    const result = await Transaction.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "type",
          foreignField: "type",
          as: "categories_info",
        },
      },
      {
        $unwind: "$categories_info",
      },
      {
        $project: {
          _id: 1,
          name: 1,
          type: 1,
          amount: 1,
          color: "$categories_info.color",
        },
      },
    ]);

    const data = result.map((v) => ({
      _id: v._id,
      name: v.name,
      type: v.type,
      amount: v.amount,
      color: v.color,
    }));

    res.json(data);
  } catch (error) {
    res.status(400).json({
      error: "Lookup Collection Error",
      details: error.message,
    });
  }
};
