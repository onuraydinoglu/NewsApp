const mongoose = require("mongoose");
const dotenv = require("dotenv");
const News = require("./models/News");

dotenv.config();

const deleteAllNews = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const result = await News.deleteMany({});
    console.log(`🗑 ${result.deletedCount} haber silindi.`);
  } catch (err) {
    console.error("❌ Silme hatası:", err.message);
  } finally {
    mongoose.disconnect();
  }
};

deleteAllNews();
