const express = require("express");
const router = express.Router();

let orders = []; // Mock database

// Place an order
router.post("/place", (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json({ message: "Order placed successfully", order });
});

// Get all orders (Admin)
router.get("/admin", (req, res) => {
  res.json(orders);
});

// Get user orders
router.get("/:userId", (req, res) => {
  const userOrders = orders.filter(order => order.userId === req.params.userId);
  res.json(userOrders);
});

module.exports = router;