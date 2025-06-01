const mongoose = require("mongoose");
const generateSlug = require("../utils/generateSlug");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String },
});

// Kategori kaydedilmeden önce slug üret
categorySchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = generateSlug(this.name);
  }
  next();
});

module.exports = mongoose.model("Category", categorySchema);
