const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Config
dotenv.config();
const app = express();

//Database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/app", require("./routes/app"));
app.use("/api/desktop", require("./routes/desktop"));

// Serve
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`App listening on port ${PORT}`));
