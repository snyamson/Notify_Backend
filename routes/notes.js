// Require External Modules
const Router = require("express").Router();

// Controller
const {
  deleteNote,
  getNotes,
  newNote,
} = require("../controllers/notesController");

Router.route("/api/notes").get(getNotes).post(newNote);
Router.route("/api/notes/:noteId").delete(deleteNote);

module.exports = Router;
