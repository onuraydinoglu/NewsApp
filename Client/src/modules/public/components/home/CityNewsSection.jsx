import Title from "../../../../shared/components/Title";
import Subtitle from "../../../../shared/components/Subtitle";
import Card from "../../../../shared/components/Card";

import news from "../../../../shared/data/news";

const CityNewsSection = () => {
  const hatayNews = news.filter((item) => item.city === 55);
  const samsunNews = news.filter((item) => item.city === 31);

  return (
    <div className="my-15">
      <Title>Yerel Haberler</Title>

      <div className="grid grid-cols-2 items-start gap-6">
        {/* SAMSUN */}
        <div>
          <Subtitle>Samsun Haberleri</Subtitle>
          {samsunNews.slice(0, 1).map((item) => (
            <Card key={item.id} image={item.image} title={item.title} content={item.content} />
          ))}
          <ul className="list">
            {samsunNews.slice(1, 6).map((item) => (
              <li key={item.id} className="list-row text-lg lora-semibold cursor-pointer px-0">
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* HATAY */}
        <div>
          <Subtitle>Hatay Haberleri</Subtitle>
          {hatayNews.slice(0, 1).map((item) => (
            <Card key={item.id} image={item.image} title={item.title} content={item.content} />
          ))}
          <ul className="list">
            {hatayNews.slice(1, 6).map((item) => (
              <li key={item.id} className="list-row text-lg lora-semibold cursor-pointer px-0">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityNewsSection;
