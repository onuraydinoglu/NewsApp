const express = require("express");
const router = express.Router();
const News = require("../models/News");
const generateSlug = require("../utils/generateSlug");
const upload = require("../middleware/upload");

// CREATE (resim yüklemeli)
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const data = req.body;

    if (!data.slug && data.title) {
      data.slug = generateSlug(data.title);
    }

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`; // Yüklenen resmin yolu
    }

    const news = new News(data);
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const news = await News.find().populate("category").sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE (by ID)
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id).populate("category");
    if (!news) return res.status(404).json({ message: "Haber bulunamadı" });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE (resim yüklemeli)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const data = req.body;

    if (data.title && !data.slug) {
      data.slug = generateSlug(data.title);
    }

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }

    const updated = await News.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "Haber silindi" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
