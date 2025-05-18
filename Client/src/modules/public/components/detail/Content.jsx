import { useParams } from "react-router-dom";
import news from "../../../../shared/data/news";

const Content = () => {
  const { slug } = useParams();
  const article = news.find((item) => item.slug === slug);
  return (
    <div className="max-w-3xl mx-auto">
      <img src={article.image} alt={article.title} className="w-full h-72 object-cover rounded" />
      <p className="mt-4 text-lg text-gray-700">{article.content}</p>
    </div>
  );
};

export default Content;
