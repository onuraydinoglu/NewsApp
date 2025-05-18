import { useParams } from "react-router-dom";

import Subtitle from "../../../../shared/components/Subtitle";

import news from "../../../../shared/data/news";

const Header = () => {
  const { slug } = useParams();
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return <p>Haber Bulunamadı.</p>;
  }

  return (
    <>
      <Subtitle className="text-center py-10">{article.title}</Subtitle>
    </>
  );
};

export default Header;
