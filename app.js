// Require External Modules
const express = require("express");
const mongoose = require("mongoose");

// Port Configuration
const PORT = process.env.PORT || 3000;

// App Configuration
const app = express();

// Middleware Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Configuration
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

mongoose
  .connect("mongodb://localhost:27017/notesDB", options)
  .then(() => console.log("successfully connected to the database"))
  .catch((err) => console.error(err));

//Route Configuration
app.use(require("./routes/notes"));

// Listen Configuration
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
