import NewsCardVertical from "./NewsCardVertical";
import NewsCardHorizontal from "./NewsCardHorizontal";

const NewsSection = ({ data }) => {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-1/3">
        {data.slice(0, 1).map((item) => (
          <NewsCardVertical key={item.id} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 w-2/3">
        {data.slice(1, 7).map((item) => (
          <NewsCardHorizontal key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
