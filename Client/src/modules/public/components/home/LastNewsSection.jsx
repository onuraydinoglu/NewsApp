import NewsCard from "../../../../shared/components/NewsCard";

import news from "../../../../shared/data/news";

const LastNewsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {news.slice(0, 4).map((item) => (
        <NewsCard key={item.id} title={item.title} image={item.image} />
      ))}
    </div>
  );
};

export default LastNewsSection;
