// Require External Modules
const mongoose = require("mongoose");
const schema = mongoose.Schema;

//Schema
const noteSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//Model
module.exports = mongoose.model("Note", noteSchema);
