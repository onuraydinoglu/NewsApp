import Title from "../../../../shared/components/Title";
import NewsSection from "../../../../shared/components/NewsSection";

import news from "../../../../shared/data/news";

const WorldNewsSection = () => {
  const worldNews = news.filter((item) => item.category === 2);

  return (
    <div className="my-15">
      <Title>Dünyadan Haberler</Title>

      <NewsSection data={worldNews} />
    </div>
  );
};

export default WorldNewsSection;
