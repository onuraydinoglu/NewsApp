const mongoose = require("mongoose");
const dotenv = require("dotenv");
const News = require("./models/News");
const generateSlug = require("./utils/generateSlug");
const newsData = require("./data/news"); // haberlerin olduğu dosya

dotenv.config(); // .env'yi yükle

mongoose
  .connect(process.env.MONGO_URI) // Atlas bağlantısı
  .then(() => console.log("MongoDB Atlas bağlantısı başarılı"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

const seed = async () => {
  try {
    const withSlugs = newsData.map((item) => ({
      ...item,
      slug: generateSlug(item.title),
    }));

    await News.insertMany(withSlugs);
    console.log("✔ Haberler eklendi");
  } catch (err) {
    console.error("❌ Hata:", err);
  } finally {
    mongoose.disconnect();
  }
};

seed();
