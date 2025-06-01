import { useEffect, useState } from "react";
import NewsCardHorizontal from "../../../../shared/components/NewsCardHorizontal";

import { getNews } from "../../../../shared/services/newsService";

const LastNewsSection = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const res = await getNews();
    setNews(res.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {news.slice(0, 4).map((item) => (
        <NewsCardHorizontal key={item._id} data={item} />
      ))}
    </div>
  );
};

export default LastNewsSection;
