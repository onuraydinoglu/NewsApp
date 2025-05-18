import Card from "./Card";
import NewsCard from "./NewsCard";

const NewsSection = ({ data }) => {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-1/3">
        {data.slice(0, 1).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            image={item.image}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 w-2/3">
        {data.slice(1, 7).map((item) => (
          <NewsCard key={item.id} id={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
