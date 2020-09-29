// 2 create the router
const express = require("express");
const router = express.Router();

// 4 add endpoints
// GET /api/products
router.get("/", (req, res) => {
  res.status(200).json({ router: "products" });
});

// 3
module.exports = router;
