const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

//  import Router
const productRoute = require("./Route/ProuductRoute");

const url =
  "mongodb+srv://dbDatabase:nddA8Et5D5iZVvqX@server.lxdqe.mongodb.net/?retryWrites=true&w=majority&appName=Server";

mongoose
  .connect(url)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e.message));

//example url --- localhost:3000/api/product

app.use("/api", productRoute);

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
