import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../../../shared/components/Title";
import Subtitle from "../../../../shared/components/Subtitle";
import NewsCardHorizontal from "../../../../shared/components/NewsCardHorizontal";
import NewsCardTextList from "../../../../shared/components/NewsCardTextList";

import { getCategories } from "../../../../shared/services/categoryService";
import { getNews } from "../../../../shared/services/newsService"; // ✅

const OtherNewsList = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [catRes, newsRes] = await Promise.all([getCategories(), getNews()]);
      setCategories(catRes.data.map((cat) => ({ ...cat, _id: String(cat._id) })));
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

  return (
    <div className="my-15">
      <Title>Öne Çıkan Haberler</Title>
      <div className="flex gap-6 items-start">
        <div className="grid grid-cols-2 gap-6 w-2/3">
          {filteredNews.slice(7).map((item) => (
            <NewsCardHorizontal key={item._id} data={item} />
          ))}
        </div>
        <div className="w-1/3">
          <Subtitle className="px-4">Son Dakika Haberleri</Subtitle>
          <NewsCardTextList data={news.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
};

export default OtherNewsList;
