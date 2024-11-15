const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  // res.json([{ name: "john" }, { name: "susan" }]);
  // res.json(products);
  res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, title, price, description } = product;
    return { id, title, price, description };
  });

  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID),
  );

  if (!singleProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Send is listening on the data");
});
