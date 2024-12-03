// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} = require("../controllers/taskController");

// Route definitions
router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", addItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;