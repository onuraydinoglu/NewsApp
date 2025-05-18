import { useParams } from "react-router-dom";
import Title from "../../../../shared/components/Title";
import Subtitle from "../../../../shared/components/Subtitle";
import NewsCard from "../../../../shared/components/NewsCard";
import NewsTextList from "../../../../shared/components/NewsTextList";

import news from "../../../../shared/data/news";
import categories from "../../../../shared/data/categories";

const OtherNewsList = () => {
  const { slug } = useParams();
  const currentCategory = categories.find((c) => c.slug === slug);
  const categoryId = currentCategory?.id;

  const filterNews = news.filter((item) => item.category === categoryId);

  return (
    <div className="my-15">
      <Title>Öne Çıkan Haberler</Title>

      <div className="flex gap-6 items-start">
        <div className="grid grid-cols-2 gap-6 w-2/3">
          {filterNews.slice(7).map((item) => (
            <NewsCard key={item.id} slug={item.slug} title={item.title} image={item.image} />
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
