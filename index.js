const express = require("express");

const Hubs = require("./hubs/hubs-model.js");
const hubsRouter = require("./hubs/hubs-router.js"); // <<<<<

// 5 import the router
const productsRouter = require("./products/products-router.js");

const server = express();

server.use(express.json());

// endpoints
// the urls get concat'd together

// when the url of the request begins with /api/hubs, use the router
server.use("/api/hubs", hubsRouter); // <<<<<
server.use("/api/products", productsRouter); // <<<<

// 6 use the router for any request that begin with /api/products
server.use("/api/products", productsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running", query: req.query });
});

// router to handle products

const port = 4000;
server.listen(port, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
