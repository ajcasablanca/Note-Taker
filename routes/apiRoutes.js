const router = require("express").Router();
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

const dbFilePath = "./db/db.json";

router.get("/notes", async (req, res) => {
  try {
    const notesData = await fs.readFile(dbFilePath, "utf8");
    const notes = JSON.parse(notesData) || [];
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to read notes data." });
  }
});

router.post("/notes", async (req, res) => {
  try {
    const notesData = await fs.readFile(dbFilePath, "utf8");
    const notes = JSON.parse(notesData) || [];
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };
    notes.push(newNote);
    await fs.writeFile(dbFilePath, JSON.stringify(notes));
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to add new note." });
  }
});

router.delete("/notes/:id", async (req, res) => {
  try {
    const notesData = await fs.readFile(dbFilePath, "utf8");
    const notes = JSON.parse(notesData) || [];
    const filteredNotes = notes.filter((note) => note.id !== req.params.id);
    await fs.writeFile(dbFilePath, JSON.stringify(filteredNotes));
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note." });
  }
});

module.exports = router;
