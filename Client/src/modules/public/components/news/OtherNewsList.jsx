import { useLocation } from "react-router-dom";
import Title from "../../../../shared/components/Title";
import Subtitle from "../../../../shared/components/Subtitle";
import NewsCard from "../../../../shared/components/NewsCard";
import NewsTextList from "../../../../shared/components/NewsTextList";

import news from "../../../../shared/data/news";
import getCurrentCategory from "../../../../shared/utils/getCurrentCategory";

const OtherNewsList = () => {
  const location = useLocation();

  const currentCategory = getCurrentCategory(location.pathname);

  const categoryId = currentCategory.id;

  const filterNews = news.filter((item) => item.category === categoryId);

  return (
    <div className="my-15">
      <Title>Öne Çıkan Haberler</Title>

      <div className="flex gap-6 items-start">
        <div className="grid grid-cols-2 gap-6 w-2/3">
          {filterNews.slice(7).map((item) => (
            <NewsCard key={item.id} id={item.id} title={item.title} image={item.image} />
          ))}
        </div>
        <div className="w-1/3">
          <Subtitle className="px-4">Son Dakika Haberleri</Subtitle>
          <NewsTextList data={news} />
        </div>
      </div>
    </div>
  );
};

export default OtherNewsList;
