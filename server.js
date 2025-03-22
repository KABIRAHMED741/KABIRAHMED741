require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db");
const userRouters = require("./routes/userRoutes");

connectdb();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users",userRouters);

app.listen(5000,()=>console.log("Server is running "));