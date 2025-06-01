import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsSection from "../../../../shared/components/NewsSection";
import { getCategories } from "../../../../shared/services/categoryService";
import { getNews } from "../../../../shared/services/newsService"; // ✅ dinamik veri

const FeaturedNews = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]); // ✅ haberleri buraya al
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [catRes, newsRes] = await Promise.all([getCategories(), getNews()]);
      setCategories(catRes.data.map((c) => ({ ...c, _id: String(c._id) })));
      setNews(newsRes.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return null;

  const currentCategory = categories.find((c) => c._id === id);
  const categoryId = currentCategory?._id;
  const filteredNews = news.filter(
    (item) => String(item.category._id || item.category) === String(categoryId)
  );

  return <NewsSection data={filteredNews} />;
};

export default FeaturedNews;
