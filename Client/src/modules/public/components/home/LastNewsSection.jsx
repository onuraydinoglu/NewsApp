import NewsCardHorizontal from "../../../../shared/components/NewsCardHorizontal";

import news from "../../../../shared/data/news";

const LastNewsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {news.slice(0, 4).map((item) => (
        <NewsCardHorizontal key={item.id} data={item} />
      ))}
    </div>
  );
};

export default LastNewsSection;
