// Note Model

const Note = require("../models/notes");

module.exports = {
  newNote: (req, res) => {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    newNote.save((err) => {
      if (err) console.error(err);
      else res.redirect("/api/notes");
    });
  },
  getNotes: (req, res) => {
    Note.find({})
      .sort({ _id: -1 })
      .exec((err, foundNotes) => {
        if (!err) res.json(foundNotes);
        else console.error(err);
      });
  },
  deleteNote: (req, res) => {
    Note.findOneAndRemove({ _id: req.params.noteId }, (err) => {
      if (!err) res.redirect("/api/notes");
      else console.error(err);
    });
  },
};
