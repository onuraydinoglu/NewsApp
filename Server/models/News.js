const mongoose = require("mongoose");
const generateSlug = require("../utils/generateSlug");

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    city: { type: Number },
    slug: { type: String },
  },
  { timestamps: true }
);

// Haber kaydedilmeden önce slug üret
newsSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = generateSlug(this.title);
  }
  next();
});

module.exports = mongoose.model("News", newsSchema);
