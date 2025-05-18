import { useParams } from "react-router-dom";

import Subtitle from "../../../../shared/components/Subtitle";

import news from "../../../../shared/data/news";

const Header = () => {
  const { id } = useParams();
  const article = news.find((item) => item.id === Number(id));

  if (!article) {
    return <p>Haber Bulunamadı.</p>;
  }

  return (
    <>
      <Subtitle>{article.title}</Subtitle>
      <div className="max-w-3xl mx-auto py-10">
        <img src={article.image} alt={article.title} className="w-full h-72 object-cover rounded" />
        <h1 className="text-3xl lora-semibold mt-4">{article.title}</h1>
        <p className="mt-4 text-lg text-gray-700">{article.content}</p>
      </div>
    </>
  );
};

export default Header;
