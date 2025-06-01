import { useEffect, useState } from "react";

import Title from "../../../../shared/components/Title";
import NewsSection from "../../../../shared/components/NewsSection";

import { getNews } from "../../../../shared/services/newsService";

const WorldNewsSection = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const res = await getNews();
    setNews(res.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);
  useEffect(() => {
    console.log("Gelen haber verisi:", news);
  }, [news]);

  const worldNews = news.filter((item) => item.category?._id === "683af9b2454898340001215f");

  return (
    <div className="my-15">
      <Title>Dünyadan Haberler</Title>

      <NewsSection data={worldNews} />
    </div>
  );
};

export default WorldNewsSection;
