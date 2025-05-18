import Title from "../../../../shared/components/Title";
import Subtitle from "../../../../shared/components/Subtitle";
import Card from "../../../../shared/components/Card";

import news from "../../../../shared/data/news";
import NewsTextList from "../../../../shared/components/NewsTextList";

const CityNewsSection = () => {
  const hatayNews = news.filter((item) => item.city === 31);
  const samsunNews = news.filter((item) => item.city === 55);

  return (
    <div className="my-15">
      <Title>Yerel Haberler</Title>

      <div className="grid grid-cols-2 items-start gap-6">
        {/* SAMSUN */}
        <div>
          <Subtitle>Samsun Haberleri</Subtitle>
          {samsunNews.slice(0, 1).map((item) => (
            <Card
              key={item.id}
              slug={item.slug}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          ))}
          <NewsTextList id={news.id} data={samsunNews} />
        </div>

        {/* HATAY */}
        <div>
          <Subtitle>Hatay Haberleri</Subtitle>
          {hatayNews.slice(0, 1).map((item) => (
            <Card
              key={item.id}
              slug={item.slug}
              image={item.image}
              title={item.title}
              content={item.content}
            />
          ))}
          <NewsTextList id={news.id} data={hatayNews} />
        </div>
      </div>
    </div>
  );
};

export default CityNewsSection;
