const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/order", (req, res) => {
  const dataPath = path.join(__dirname, "orders.json");
  const newOrder = req.body;
  const orders = JSON.parse(fs.readFileSync(dataPath, "utf8") || "[]");
  orders.push(newOrder);
  fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2));
  res.json({ message: "Order received!" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
