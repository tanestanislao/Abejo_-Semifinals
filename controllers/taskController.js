// controllers/itemController.js
const items = require("../models/itemModel");

// Get all items
const getAllItems = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Items retrieved successfully", data: items });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Get a specific item by ID
const getItemById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = items.find((item) => item.id === id);
    if (item) {
      res
        .status(200)
        .json({ message: "Item retrieved successfully", data: item });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Add a new item
const addItem = async (req, res) => {
  try {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json({ message: "Item added successfully", data: items });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Update an existing item
const updateItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...req.body };
      res
        .status(200)
        .json({ message: "Item updated successfully", data: items });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Delete an item
const deleteItem = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      res
        .status(200)
        .json({ message: "Item deleted successfully", data: items });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
};