const express = require("express");

const { readProducts } = require("./models/proucts.js");

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  const { products } = await readProducts();
  const product = products.find(({ sku }) => sku === req.params.sku);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
});
